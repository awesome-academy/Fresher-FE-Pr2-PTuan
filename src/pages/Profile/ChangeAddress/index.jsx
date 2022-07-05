import React, { useState, useEffect } from 'react';
import {
  Button,
  Col,
  Row,
  Form,
  notification,
  Select,
  Input,
  Space,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserInfo } from '../../../redux/actions';

import { getCities, getDistricts, getWards } from '../../../redux/actions';
import { getNameRegion, renderRegionOptions } from '../../../helper';

function ChangeAddress() {
  const { userInfo } = useSelector((state) => state.userReducer);
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.locationReducer,
  );
  const dispatch = useDispatch();
  const [isChangeLocation, setIsChangeLocation] = useState(false);
  const [locationForm] = Form.useForm();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  const handleChangeLocation = (values) => {
    const { city, district, ward, address } = values;

    const cityName = getNameRegion(cityList, city);

    const districtName = getNameRegion(districtList, district);

    const wardName = getNameRegion(wardList, ward);

    const location = {
      city: {
        code: city,
        name: cityName,
      },
      district: {
        code: district,
        name: districtName,
      },
      ward: {
        code: ward,
        name: wardName,
      },
      address,
    };
    dispatch(
      changeUserInfo({
        userID: userInfo.id,
        location,
      }),
    );
    notification.success({
      message: 'Thay đổi thành công',

      description: 'Địa chỉ của bạn đã được thay đổi',
    });
    locationForm.resetFields();
    setIsChangeLocation(false);
  };

  const renderLocation = () => {
    if (userInfo.location) {
      return (
        <>
          <Col span={4}>Thành phố/ Tỉnh:</Col>
          <Col span={20}>{userInfo.location.city.name}</Col>
          <Col span={4}>Quận/ Huyện:</Col>
          <Col span={20}>{userInfo.location.district.name}</Col>
          <Col span={4}>Phường/ Xã:</Col>
          <Col span={20}>{userInfo.location.ward.name}</Col>
          <Col span={4}>Địa chỉ cụ thể:</Col>
          <Col span={20}>{userInfo.location.address}</Col>
          <Button type="primary" onClick={() => setIsChangeLocation(true)}>
            Thay đổi địa chỉ
          </Button>
        </>
      );
    } else {
      return (
        <>
          <p>Chưa có địa chỉ</p>
          <Button type="primary" onClick={() => setIsChangeLocation(true)}>
            Thay đổi địa chỉ
          </Button>
        </>
      );
    }
  };

  const renderChangeLocationForm = () => (
    <Form
      style={{ width: '100%' }}
      form={locationForm}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 7 }}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={(values) => handleChangeLocation(values)}
    >
      <Form.Item
        label="Tỉnh/Thành phố"
        name="city"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn Tỉnh/Thành phố của bạn',
          },
        ]}
      >
        <Select
          allowClear
          onChange={(value) => {
            dispatch(getDistricts({ cityCode: value }));
            locationForm.setFieldsValue({ district: undefined });
            locationForm.setFieldsValue({ ward: undefined });
          }}
        >
          {renderRegionOptions(cityList)}
        </Select>
      </Form.Item>

      <Form.Item
        label="Quận/Huyện"
        name="district"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn Quận/Huyện của bạn',
          },
        ]}
      >
        <Select
          allowClear
          onChange={(value) => {
            dispatch(getWards({ districtCode: value }));
            locationForm.setFieldsValue({ ward: undefined });
          }}
        >
          {renderRegionOptions(districtList)}
        </Select>
      </Form.Item>

      <Form.Item
        label="Phường/Xã"
        name="ward"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn Phường/Xã của bạn',
          },
        ]}
      >
        <Select allowClear>{renderRegionOptions(wardList)}</Select>
      </Form.Item>

      <Form.Item
        label="Địa chỉ cụ thể"
        name="address"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập địa chỉ cụ thể của bạn!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Thay đổi
          </Button>
          <Button onClick={() => setIsChangeLocation(false)}>Hủy</Button>
        </Space>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <div className="container-profile">
        <Row justify="space-between">
          <Col className="title">Địa chỉ của tôi</Col>
        </Row>
        <div className="profile-content">
          <Row align="middle" justify="space-between" gutter={[32, 32]}>
            {isChangeLocation ? renderChangeLocationForm() : renderLocation()}
          </Row>
        </div>
      </div>
    </>
  );
}

export default ChangeAddress;
