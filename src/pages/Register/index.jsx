import React, { useState } from 'react';
import { Form, Input, Button, Radio, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LockOutlined } from '@ant-design/icons';

import { register } from '../../redux/actions';

import '../Login/style.scss';
import './style.scss';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (values) => {
    const { confirm, ...rest } = values;
    dispatch(
      register({
        data: rest,
        callback: () => navigate('/login'),
      }),
    );
  };

  return (
    <div className="login-content">
      <div className="form-login-register">
        <Row>
          <div className="header">
            <Link to="/login">
              <i className="fa-solid fa-chevron-left"></i>
            </Link>
            Đăng ký thành viên mới
          </div>
          <Col>
            <Form
              name="normal_login"
              initialValues={{
                remember: true,
              }}
              onFinish={handleRegister}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        min: 2,
                        message: 'Tên quá ngắn',
                      },
                      {
                        max: 20,
                        message: 'Tên quá dài',
                      },
                      {
                        required: true,
                        message: 'Vui lòng nhập trường này!',
                      },
                    ]}
                  >
                    <Input placeholder="Tên" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="surname"
                    rules={[
                      {
                        min: 2,
                        message: 'Quá ngắn',
                      },
                      {
                        max: 20,
                        message: 'Họ quá dài',
                      },
                      {
                        required: true,
                        message: 'Vui lòng nhập trường này!',
                      },
                    ]}
                  >
                    <Input placeholder="Họ" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Số Điện Thoại!',
                      },
                      {
                        pattern: new RegExp(
                          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                        ),
                        message: 'Số điện thoại không hợp lệ',
                      },
                    ]}
                  >
                    <Input placeholder="Số điện thoại" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        pattern: new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
                        message: 'Email không đúng',
                      },
                      {
                        required: true,
                        message: 'Enter you email',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="Địa chỉ email" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Password!',
                      },
                      {
                        min: 6,
                        message: 'Mật khẩu phải có độ dài từ 6 ký tự trở lên',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Mật khẩu"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Xác nhận mật khẩu!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              'The two passwords that you entered do not match!',
                            ),
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Xác nhận mật khẩu"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <label className="text-center">Sở thích</label>
              <Radio.Group buttonStyle="outline" className="box-interests">
                <Radio.Button value="maleFashion">Thời trang nam</Radio.Button>
                <Radio.Button value="femaleFasion">Thời trang nữ</Radio.Button>
                <Radio.Button value="ChildFashion">
                  Thời trang trẻ em
                </Radio.Button>
              </Radio.Group>
              <Form.Item>
                <Button htmlType="submit" className="btn-login">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={24}>
            <div className="social-login-register">
              <p>--- Hoặc ---</p>
              <a href="#!">
                <img
                  src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                  alt="social"
                />
              </a>
              <a href="#!">
                <img
                  src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                  alt="social"
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
