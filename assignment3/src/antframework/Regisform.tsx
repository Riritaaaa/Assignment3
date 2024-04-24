import React from "react";
import { Form, Input } from "antd";
import { Typography } from "antd";
const { Text } = Typography;

type FieldType = {
  username?: string;
  password?: string;
};

const Regisform: React.FC = () => {
  return (
    <div >
      <Text className="font-bold text-lg block my-3">General : </Text>

      <Form.Item<FieldType>
        label="Username"
        name="username"
        className="w-[256px]"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 8, message: "Password must be at least 8 characters!" },
        ]}
      >
        <Input.Password />
      </Form.Item>
    </div>
  );
};

export default Regisform;
