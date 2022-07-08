import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Button, Form, Input, Space } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { API_PATH } from '../../../Service/constants';

import {
  colors,
  renderColorCheckbox,
  renderOptionCategory,
  renderSizeCheckbox,
  sizes,
} from '../ProductManagement';
import { createProduct } from '../../../redux/actions/product.action';
import FormItem from '../../../components/FormItem';
import { COLORS, SIZES } from '../../../constant';

function CreateProduct() {
  const { products, pagination } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [styles, setStyles] = useState([]);

  const [checkedList, setCheckedList] = useState({
    color: [],
    size: [],
  });

  useEffect(() => {
    axios.get(`${API_PATH}/styles`).then(({ data }) => setStyles(data));
  }, []);

  const submitForm = (values) => {
    dispatch(createProduct(values));
    navigate('/admin/product-management');
  };

  return (
    <>
      <h2>Tạo sản phẩm mới</h2>
      <Form
        name="createProduct"
        onFinish={(values) => submitForm(values)}
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        autoComplete="off"
      >
        <FormItem label="Tên sản phẩm" name="name">
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

        <FormItem label="Color" name="colorsName">
          {renderColorCheckbox(COLORS)}
        </FormItem>

        <FormItem name="sizes" label="Size">
          {renderSizeCheckbox(SIZES)}
        </FormItem>

        <Space size="large">
          <Link to="/admin/product-management">
            <Button>Quay lại</Button>
          </Link>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Space>
      </Form>
    </>
  );
}

export default CreateProduct;
