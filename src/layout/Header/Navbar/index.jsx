import React from 'react';
import { Button, Badge, Row, Col, Form, Input } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './style.scss';
import NavMenuDrop from '../NavMenuDrop';
import user from '../../../assets/Icon/user.svg';
import cartImg from '../../../assets/Icon/cart.svg';
import heart from '../../../assets/Icon/heart.svg';
import Logo from '../../../assets/logo.webp';
import { formatNumber } from '../../../helper';

const list = [
  {
    name: 'xuân hè 2022',
    link: '/xuan-he',
  },
  {
    name: 'nữ',
    link: '/nu',
    key_mobile: '1',
    list: [
      {
        title: 'ÁO',
        items: [
          { title: 'Áo Polo Nữ' },
          { title: 'Áo Sơ Mi Nữ' },
          { title: 'Áo Thun Nữ' },
          { title: 'Áo Khoác Nữ' },
        ],
      },
      {
        title: 'QUẦN',
        items: [
          { title: 'Quần Jean Nữ ' },
          { title: 'Quần âu nữ' },
          { title: 'quần kaki nữ' },
          { title: 'quần short Nữ' },
        ],
      },
      {
        title: 'VÁY NỮ',
        items: [
          { title: 'Áo Polo Nữ' },
          { title: 'Áo Sơ Mi Nữ' },
          { title: 'Áo Thun Nữ' },
          { title: 'Áo Khoác Nữ' },
        ],
      },
      {
        title: 'BỘ ĐỒ NỮ',
        items: [
          { title: 'Áo Polo Nữ' },
          { title: 'Áo Sơ Mi Nữ' },
          { title: 'Áo Thun Nữ' },
          { title: 'Áo Khoác Nữ' },
        ],
      },
      {
        title: 'YODY SPORT',
        items: [{}],
      },
      {
        title: 'PHỤ KIỆN',
        items: [
          { title: 'Áo Polo Nữ' },
          { title: 'Áo Sơ Mi Nữ' },
          { title: 'Áo Thun Nữ' },
          { title: 'Áo Khoác Nữ' },
        ],
      },
      {
        title: 'ĐỒ MẶC TRONG',
        items: [
          { title: 'Áo Polo Nữ' },
          { title: 'Áo Sơ Mi Nữ' },
          { title: 'Áo Thun Nữ' },
          { title: 'Áo Khoác Nữ' },
        ],
      },
    ],
    imgRight:
      'https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/863105/assets/link_image_2_1.jpg?1655524220621',
  },
  {
    name: 'nam',
    link: '/nam',
    key_mobile: '2',
    list: [
      {
        title: 'ÁO',
        items: [
          { title: 'Áo Thun' },
          { title: 'Áo Polo Nam' },
          { title: 'Áo Sơ Mi Nam' },
          { title: 'Áo Ba Lỗ' },
          { title: 'Áo Khoác Nam' },
          { title: 'Áo Vest Nam' },
        ],
      },
      {
        title: 'QUẦN',
        items: [
          { title: 'Quần Jean Nam' },
          { title: 'Quần Tây Nam' },
          { title: 'Quần Kaki Nam' },
          { title: 'Quần Short' },
        ],
      },
      {
        title: 'Đồ mặc trong',
        items: [{ title: 'Đồ Lót' }],
      },
      {
        title: 'YODY SPORT',
        items: [{}],
      },
      {
        title: 'PHỤ KIỆN',
        items: [
          { title: 'Ví nam' },
          { title: 'Thắt lưng nam' },
          { title: 'Giày nam' },
          { title: 'Mũ Nam' },
          { title: 'Phụ Kiện Khác' },
        ],
      },
    ],
    imgRight:
      'https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/863105/assets/link_image_3_1.jpg?1655524220621',
  },
  {
    name: 'trẻ em',
    link: '/tre-em',
    key_mobile: '3',
    list: [
      {
        title: 'ÁO',
        items: [
          { title: 'Áo Thun' },
          { title: 'Áo polo' },
          { title: 'Áo khoác' },
          { title: 'Áo sơ mi' },
        ],
      },
      {
        title: 'QUẦN',
        items: [{ title: 'Quần dài' }, { title: 'Quần short' }],
      },
      {
        title: 'BỘ ĐỒ TRẺ EM',
        items: [{}],
      },
      {
        title: 'VÁY ĐẦM TRẺ EM',
        items: [{ title: 'Chân Váy' }, { title: 'Váy trẻ em' }],
      },
      {
        title: 'PHỤ KIỆN',
        items: [{ title: 'Phụ kiện khác' }],
      },
    ],
    imgRight:
      'https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/863105/assets/link_image_4_1.jpg?1655524220621',
  },
  {
    name: 'polo yody',
    link: '#',
  },
  {
    name: 'bộ sưu tập',
    link: '#',
  },
  {
    name: 'yody love',
    link: '#',
    list: [
      {
        title: 'TIN TỨC',
        items: [
          { title: 'Yody news' },
          { title: 'Trải nghiệm khách hàng' },
          { title: 'Showroom Yody' },
          { title: 'Văn hóa Yody' },
          { title: 'Bạn đọc quan tâm' },
        ],
      },
      {
        title: 'PHONG CÁCH THỜI TRANG',
        items: [
          { title: 'Mix and match ' },
          { title: 'Mẹo hay' },
          { title: 'Xu hướng thời trang' },
          { title: 'Phong thủy' },
        ],
      },
      {
        title: 'STORIES',
        items: [{ title: 'Nhân vật' }, { title: 'Theo dòng thời trang' }],
      },
      {
        title: 'CHẤT LIỆU VÀ SẢN PHẨM',
        items: [{ title: 'Chất liệu' }, { title: 'Sản phẩm' }],
      },
      {
        title: 'ƯU ĐÃI',
        items: [
          { title: 'Khuyến mãi' },
          { title: 'Dịch vụ' },
          { title: 'Chính sách' },
        ],
      },
    ],
    imgRight:
      'https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/863105/assets/link_image_7_1.jpg?1655524220621',
  },
  {
    name: 'đồng phục',
    link: '#',
  },
];

const Navbar = () => {
  const fullName = 'Tuan';
  const total = 10;

  const handleLogout = () => {};
  const renderCart = () => {};

  return (
    <div className="navbar">
      <div className="container wrapper-container">
        <div className="navbar-header">
          <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul className="nav-list">
            {list.map((item) => {
              return (
                <li className="nav-item" key={item.name}>
                  <Link className="item-href" to={item?.link}>
                    {item.name}
                  </Link>
                  {item.list && (
                    <NavMenuDrop list={item.list} imgRight={item.imgRight} />
                  )}
                </li>
              );
            })}
          </ul>
          <div className="search">
            <Form>
              <Input
                className="search-box"
                type="text"
                spellCheck="false"
                placeholder="Tìm sản phấm"
              />
              <Button className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </Form>
          </div>
          <div className="header-tool">
            <div className="user">
              <img src={user} alt="" />
              <ul className="account-header">
                {
                  <>
                    <h3 className="full-name">{fullName}</h3>
                    <li>
                      <Link to="/my-profile">Thông tin tài khoản</Link>
                    </li>
                    <li>
                      <Link to="/change-password">Đổi mật khẩu</Link>
                    </li>
                    <li>
                      <Link to="/favorite-product">Sản phẩm yêu thích</Link>
                    </li>
                    <li>
                      <Link to="/my-order">Đơn hàng của tôi</Link>
                    </li>
                    <li>
                      <Button
                        type="link"
                        icon={<LogoutOutlined />}
                        onClick={handleLogout}
                      >
                        Đăng xuất
                      </Button>
                    </li>
                  </>
                }
              </ul>
            </div>
            <div className="like">
              <Link to="/favorite-product">
                <img src={heart} alt="" />
              </Link>
            </div>

            <div className="cart">
              <Badge count={total} showZero>
                <Link to="/cart">
                  <img src={cartImg} alt="" />
                </Link>
                <div className="cart-drop">
                  <div className="cart-container">
                    {total > 0 ? (
                      <>
                        <Row gutter={[32, 32]} className="border-bottom">
                          <Col span={4}>STT</Col>
                          <Col span={4}>Hình ảnh</Col>
                          <Col span={4}>Tên sản phẩm</Col>
                          <Col span={4}>Số lượng</Col>
                          <Col span={4}>Giá tiền</Col>
                          <Col span={4}>Tổng cộng</Col>
                        </Row>
                        {renderCart()}
                        <Row justify="end">
                          <Col>
                            <Link to="/cart">
                              <Button type="link">Đi tới giỏ hàng</Button>
                            </Link>
                          </Col>
                        </Row>
                      </>
                    ) : (
                      <div className="message">
                        <img
                          src="https://bizweb.dktcdn.net/100/438/408/themes/858544/assets/blank_cart.svg?1650243498580"
                          alt=""
                        />
                        <p>Giỏ hàng của bạn trống</p>
                        <Link to="/login" className="cart-login">
                          Đăng nhập/Đăng ký
                        </Link>
                        <div>
                          <Link to="/">Mua ngay</Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Badge>
            </div>

            <div className="menu-bars">
              <span className="icon-bars">
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>
            <div className="nav-overlay"></div>
            <div className="nav-list-mobile nav-list">
              {list.map(({ key_mobile, name, list }) => {
                if (key_mobile) {
                  return (
                    <div key={name}>
                      <ul className="nav-item">
                        <li className="nav-item">
                          <a href="#!" className="item-href">
                            {name}
                          </a>
                        </li>
                      </ul>
                      <ul className="">
                        {list.map((element) => {
                          return (
                            <li className="title" key={element.title}>
                              <a href="#!" className="item-link">
                                {element.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                } else return '';
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
