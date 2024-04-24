import React, { useState } from "react";
import { Form, Input, Radio } from "antd";
import { Typography } from "antd";
import { DatePicker } from "antd";
import { Checkbox, Divider } from "antd";
import type { CheckboxProps, GetProp } from "antd";
import { Switch } from "antd";

type FieldType = {};

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["ดูหนัง", "ฟังเพลง", "เล่นเกมส์", "อื่น ๆ"];
const defaultCheckedList = [""];

const { Text } = Typography;

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const Workshop_ant3: React.FC = () => {
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;

  const onChangelist = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <>
      <Text className="font-bold text-lg block my-3">Confirm : </Text>

      <Form.Item
        label="birth date"
        name="birthday"
        rules={[{ required: true, message: "Please input your birth date!" }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: "Please select your gender!" }]}
      >
        <Radio.Group>
          <Radio value="men"> Male </Radio>
          <Radio value="women"> Female </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="งานอดิเรก">
        <Checkbox onChange={onCheckAllChange} checked={checkAll}>
          เลือกทั้งหมด
        </Checkbox>

        <Divider style={{ margin: "10px 0" }} />

        <CheckboxGroup
          style={{
            display: "flex",
            width: "256px",
            justifyContent: "space-between",
          }}
          options={plainOptions}
          value={checkedList}
          onChange={onChangelist}
        />
      </Form.Item>

      <Form.Item className="mb-4" name="text">
        <Input placeholder="ระบุ" />
      </Form.Item>

      <Form.Item 
        label="ยอมรับเงื่อนไข : "
        name="terms"
        valuePropName="checked"
        rules={[
          {
            required: true,
            message: "Please accept the terms and conditions!",
          },
        ]}
      >
        <Switch onChange={onChange} />
      </Form.Item>
    </>
  );
};
export default Workshop_ant3;
