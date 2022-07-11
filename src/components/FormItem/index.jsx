import React from 'react';

import { Form } from 'antd';

function FormItem({
  label,
  name,
  rules = [
    {
      required: true,
      message: 'Requied!',
    },
  ],
  children,
}) {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      {children}
    </Form.Item>
  );
}

export default FormItem;
