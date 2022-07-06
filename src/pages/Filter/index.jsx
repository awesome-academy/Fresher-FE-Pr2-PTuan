import { Checkbox, Select, Slider, Row, Col, Pagination, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product';
import { filterProduct } from '../../redux/actions/product.action';
import axios from 'axios';

import './style.scss';
import { API_PATH } from '../../Service/constants';

export const type = ['Nam', 'Nữ', 'Trẻ em'];

function Filter() {
  const [toggle, setToggle] = useState({
    color: false,
    size: false,
  });
  const { filter } = useSelector((state) => state.productReducer);
  const { products, loading } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const [checkedList, setCheckedList] = useState({
    type: [],
    category: [],
    price: [],
    _sort: '',
    _order: '',
    price_gte: 0,
    price_lte: Infinity,
    _page: 1,
    _limit: 8,
  });

  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios.get(`${API_PATH}/styles`).then(({ data }) => setStyles(data));
  }, []);

  useEffect(() => {
    dispatch(filterProduct(checkedList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedList]);

  const handlePagination = (page) => {
    dispatch(
      filterProduct({
        ...checkedList,
        _page: page,
        _limit: 16,
      }),
    );
  };

  const renderType = () => (
    <Checkbox.Group
      onChange={(item, type = 'type') => handleFilter(item, type)}
    >
      <Row>
        {type.map((item, index) => (
          <Col key={index}>
            <Checkbox value={item}>{item}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
  const renderCategory = () => (
    <Checkbox.Group
      onChange={(item, type = 'category') => handleFilter(item, type)}
    >
      <Row gutter={[0, 8]} justify="start">
        {styles.map((item, index) => (
          <Col span={12} key={index}>
            <Checkbox value={item}>{item}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );

  return (
    <>
      <div className="product-category">
        <div className="container">
          <Row gutter={[32, 32]}>
            <Col lg={6} xs={24} className="left">
              {filter?.q && <h2>{`Kết quả tìm kiếm cho: ${filter?.q}`}</h2>}
              <div className="filter">
                <div className="filter-fashion">
                  <div className="title">
                    <h3>Thời trang</h3>
                    <div
                      onClick={() => {
                        setToggle({ ...toggle, color: !toggle.color });
                      }}
                    >
                      {toggle.color ? (
                        <i className="fa-solid fa-arrow-up"></i>
                      ) : (
                        <i className="fa-solid fa-arrow-down"></i>
                      )}
                    </div>
                  </div>
                  <div className="type">
                    <div className={`${toggle.color ? 'hidden' : ''}`}>
                      {renderType(type)}
                    </div>
                  </div>
                </div>
                <div className="filter-size">
                  <div className="title">
                    <h3>Thể loại</h3>
                    <div
                      onClick={() => {
                        setToggle({ ...toggle, size: !toggle.size });
                      }}
                    >
                      {toggle.size ? (
                        <i className="fa-solid fa-arrow-up"></i>
                      ) : (
                        <i className="fa-solid fa-arrow-down"></i>
                      )}
                    </div>
                  </div>
                  <div className="category">
                    <div className={`${toggle.size ? 'hidden' : ''}`}>
                      {renderCategory()}
                    </div>
                  </div>
                </div>
                <div className="filter-price">
                  <div className="title">
                    <h3>Khoảng giá (VNĐ)</h3>
                  </div>
                  <div className="price">
                    <div className={`${toggle.price ? 'hidden' : ''}`}>
                      {
                        <Slider
                          range
                          style={{ width: '95%' }}
                          marks={{ 0: 0, 1000000: 1000000 }}
                          min={0}
                          step={50000}
                          max={1000000}
                          defaultValue={[0, 1000000]}
                          onChange={(item, type = 'price') =>
                            handleFilter(item, type)
                          }
                        />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={18} xs={24} className="right">
              <Row justify="space-between">
                <Col>
                  {loading
                    ? 'Sản phẩm đang được cập nhật ..........'
                    : `${filter?._totalRows} sản phẩm`}
                </Col>
                <Col>
                  <label>
                    Sort by:
                    <Select
                      style={{ marginLeft: '5px' }}
                      onChange={(item, filter = 'order') =>
                        handleFilter(item, filter)
                      }
                      defaultValue={{ value: 'default' }}
                    >
                      <Select.Option value="default">Featured</Select.Option>
                      <Select.Option value="asc">Price asc.</Select.Option>
                      <Select.Option value="desc">Price desc.</Select.Option>
                    </Select>
                  </label>
                </Col>
              </Row>
              {loading ? (
                <Spin className="spin"></Spin>
              ) : (
                <div className="product">
                  <Row gutter={[16, 32]}>
                    {products &&
                      products.map((item) => (
                        <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                          <Product item={item} />
                        </Col>
                      ))}
                  </Row>
                </div>
              )}

              <Row justify="end">
                <Col>
                  <Pagination
                    defaultCurrent={1}
                    total={filter?._totalRows}
                    onChange={(page) => handlePagination(page)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Filter;
