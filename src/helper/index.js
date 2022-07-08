import { notification, Select } from 'antd';

export const openNotificationWithIcon = ({ type, message, description }) => {
  notification[type]({
    message,
    description,
  });
};

export const createAction = (type, payload = {}) => {
  return { type, payload };
};
export const createActionSuccess = (type, data = {}) => {
  return { type: `${type}_SUCCESS`, data };
};
export const createActionFail = (type, data = {}) => {
  return { type: `${type}_FAIL`, data };
};

export const logger = (reducer) => {
  return (preState, action) => {
    console.group(action.type);
    console.log('preState: ', preState);
    console.log('Action: ', action);
    const newState = reducer(preState, action);
    console.log('Next State: ', newState);
    console.groupEnd();
    return newState;
  };
};

export const formatNumber = (value = 0) =>
  value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

export const getLocal = (value, defaultValue = null) =>
  JSON.parse(localStorage.getItem(value)) || defaultValue;

export const setLocal = ({ key, value }) =>
  localStorage.setItem(key, JSON.stringify(value));

export const removeLocal = (value) => localStorage.removeItem(value);

export const renderRegionOptions = (regions) => {
  return regions.data.map((region) => (
    <Select.Option key={region.id} value={region.code}>
      {region.name}
    </Select.Option>
  ));
};

export const getNameRegion = (regions, location) =>
  regions.data.find((item) => item.code === location).name;

export const handleCalculateTotalMoney = (cart) =>
  cart.reduce(
    (previousValue, item) => previousValue + item.amount * item.price,
    0,
  );
