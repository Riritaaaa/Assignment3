import React from "react";
import { Form, Input } from "antd";
import { Typography } from "antd";

const { Text } = Typography;

type FieldType = {
  email?: string;
  phone?: string;
};

const Workshop_ant2: React.FC = () => {
  return (
    <>
      <Text className="font-bold text-lg block my-3">Contact : </Text>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            type: "email",
            message: "Please input a valid email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Phone"
        name="phone"
        rules={[
          { required: true, message: "Please input your phone number!" },
          {
            pattern: /^[0-9]{10}$/,
            message: "Please input a valid phone number!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};
export default Workshop_ant2;
