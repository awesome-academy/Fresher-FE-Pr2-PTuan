import React, { useEffect, useState } from 'react';
import Product from '../../../components/Product';

import { Row, Col } from 'antd';

import './style.scss';
import { useSelector } from 'react-redux';

const title = [
  'cafe',
  'mắt chim',
  'coolmax',
  'airy cool',
  'vỏ hàu',
  'cool compact',
  'airmax',
  'askin',
];

const Content = () => {
  const { products } = useSelector((state) => state.productReducer);
  const [active, setActive] = useState(title[0]);
  const [visible, setVisible] = useState(12);

  return (
    <>
      <div className="header-content">
        <div className="content-title">
          <h2>POLO YODY - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI</h2>
        </div>
        <ul className="list-title">
          {title.map((item) => {
            return (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={
                  active === item
                    ? 'list-title-item item-active'
                    : 'list-title-item'
                }
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <Row gutter={16}>
        {products.slice(0, visible).map((item) => {
          return (
            <Col key={item.id} xs={24} sm={12} md={6} lg={4}>
              <Product {...item} />
            </Col>
          );
        })}
      </Row>
      <div className="more">Xem thêm</div>
    </>
  );
};

export default Content;
