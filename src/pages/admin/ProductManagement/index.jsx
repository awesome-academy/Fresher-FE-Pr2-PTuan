import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import {
  Table,
  Button,
  Col,
  Row,
  Modal,
  Form,
  Input,
  Checkbox,
  Select,
} from 'antd';
import { formatNumber } from '../../../helper';

import {
  deleteProduct,
  getAllProduct,
} from '../../../redux/actions/product.action';
import { API_PATH } from '../../../Service/constants';
import FormItem from '../../../components/FormItem';
import { COLORS, SIZES } from '../../../constant';

export const renderColorCheckbox = (items) => (
  <Checkbox.Group>
    <Row gutter={[0, 8]}>
      {items.map((item, index) => (
        <Col span={8} key={index}>
          <Checkbox value={item.colorCode}>
            <i
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                marginRight: 5,
                backgroundColor: `${item.colorCode}`,
              }}
            ></i>
            {item.color}
          </Checkbox>
        </Col>
      ))}
    </Row>
  </Checkbox.Group>
);

export const renderSizeCheckbox = (items) => (
  <Checkbox.Group>
    <Row gutter={[0, 8]}>
      {items.map((item, index) => (
        <Col span={6} key={index}>
          <Checkbox value={item}>{item}</Checkbox>
        </Col>
      ))}
    </Row>
  </Checkbox.Group>
);

export const renderOptionCategory = (styles) => (
  <Select>
    {styles.map((item, index) => (
      <Select.Option value={item} key={index}>
        {item}
      </Select.Option>
    ))}
  </Select>
);

function ProductManagement() {
  const { products, pagination } = useSelector((state) => state.productReducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createProductForm] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [styles, setStyles] = useState([]);

  const [checkedList, setCheckedList] = useState({
    color: [],
    size: [],
  });

  useEffect(() => {
    axios.get(`${API_PATH}/styles`).then(({ data }) => setStyles(data));
    dispatch(getAllProduct());
  }, []);

  const dataSource = () =>
    products.map((item, index) => ({
      key: index,
      ...item,
    }));

  const columns = [
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      align: 'center',
      render: (_, { image }) => (
        <div className="product-img">
          <img src={image} alt="product" />
        </div>
      ),
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Mô tả',
      dataIndex: 'color',
      key: 'color',
      align: 'center',
      render: (_, { colorsName, sizes }) => (
        <>
          <div>Màu: {colorsName.join('-')}</div>
          <div>Size: {sizes.join('-')}</div>
        </>
      ),
    },
    {
      title: 'Giá bán',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (_, { price }) => (
        <span className="price-product">{formatNumber(price)}</span>
      ),
    },
    {
      align: 'center',
      title: 'Action',
      key: 'action',
      render: (_, { id }) => (
        <>
          <Button type="link" onClick={() => setIsModalVisible(true)}>
            Chỉnh sửa
          </Button>
          <Button danger type="link" onClick={() => handleDeleteProduct(id)}>
            <i
              className="fa-solid fa-trash-can"
              style={{ marginRight: '5px' }}
            ></i>
            Xoá
          </Button>
        </>
      ),
    },
  ];

  const onChange = (list, type) => {
    if (type === 'color') setCheckedList(...checkedList.size, list);
    if (type === 'size') setCheckedList(...checkedList.color, list);
  };

  const handleDeleteProduct = (id) => {
    const indexProductDelete = products.findIndex((item) => item.id === id);
    Modal.confirm({
      title: 'Xoá sản phẩm!',
      content: `Xoá vĩnh viễn sản phẩm ${products[indexProductDelete].name}. Thao tác này sẽ không khôi phục lại được!`,
      okButtonProps: { danger: true },
      okText: 'Xoá vĩnh viễn',
      onOk() {
        dispatch(deleteProduct(id));
      },
    });
  };

  return (
    <>
      <Table
        bordered
        columns={columns}
        title={() => (
          <Row justify="space-between">
            <Col>Bảng sản phẩm</Col>
            <Col>
              <Button
                type="primary"
                onClick={() => navigate('/admin/product-management/create')}
              >
                Thêm sản phẩm mới
              </Button>
            </Col>
          </Row>
        )}
        pagination={{
          position: ['bottomRight'],
          pageSize: 4,
          onClick: (value) => console.log(value),
        }}
        dataSource={dataSource()}
      />
      <Modal
        title="Chỉnh sửa sản phẩm "
        visible={isModalVisible}
        onOk={() => {
          createProductForm.submit();
          setIsModalVisible(false);
        }}
        onCancel={() => {
          setIsModalVisible(false);
          createProductForm.resetFields();
        }}
      >
        <Form
          name="editProduct"
          form={createProductForm}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          autoComplete="off"
        >
          <FormItem label="Tên sản phẩm" name="name">
            <Input />
          </FormItem>

          <FormItem label="Hình ảnh" name="image">
            <Input />
          </FormItem>

          <FormItem label="Mô tả" name="description">
            <Input />
          </FormItem>

          <FormItem label="Category" name="category">
            {renderOptionCategory(styles)}
          </FormItem>

          <FormItem label="Giá bán" name="price">
            <Input />
          </FormItem>

          <FormItem label="Color" name="colors">
            {renderColorCheckbox(COLORS)}
          </FormItem>

          <FormItem name="sizes" label="Size">
            {renderSizeCheckbox(SIZES)}
          </FormItem>
        </Form>
      </Modal>
    </>
  );
}

export default ProductManagement;
