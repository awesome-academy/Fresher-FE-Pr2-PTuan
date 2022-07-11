import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { formatNumber } from '../../helper';
import btnCart from '../../assets/Icon/btn_cart.svg';

import './style.scss';
import { Row, Col } from 'antd';
const Product = ({ id, name, image, images, price, priceold, showOption }) => {
  const dispatch = useDispatch();
  const showImages = (images) => {
    return Object.values(images).map((item, index) => (
      <Col key={index} className="view-color">
        <img src={item} alt="product" />
      </Col>
    ));
  };
  const handleAddToCart = () => {
    // dispatch(addToCart());
  };
  return (
    <>
      <div className="product-image">
        <Link to={`/detail/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <img
          onClick={handleAddToCart}
          className="btn-add-to-cart"
          src={btnCart}
          alt="cart"
        />
      </div>
      <h3 className="product-name text-align-left">{name}</h3>
      <div className="product-price-box">
        <div className="price">{formatNumber(price)}</div>
        <div className="price-old">{formatNumber(priceold)}</div>
      </div>
      {!showOption && (
        <div className="option-view">
          <Row style={{ marginLeft: '0', marginRight: '0' }}>
            {images && showImages(images)}
          </Row>
        </div>
      )}
    </>
  );
};

export default Product;
