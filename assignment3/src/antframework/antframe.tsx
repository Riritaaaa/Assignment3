import React from "react";
import { Button, Flex } from "antd";
import Icon, {
  HomeOutlined,
  RobotOutlined,
  FireTwoTone,
} from "@ant-design/icons";
import { Col, Row } from "antd";

const antframe = () => {
  return (
    <div className="text-center">
      <Flex className="justify-center" gap="small" wrap="wrap">
        <Button href="https://ant.design/components/button" type="primary">
          Primary Button
        </Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
      <RobotOutlined />
      <FireTwoTone twoToneColor={"#dba614"} />
      <Icon component={HomeOutlined as React.ForwardRefExoticComponent<any>} />
      <HomeOutlined />
      <Row style={{backgroundColor:"blue"}}>
        <Col  span={24}>col</Col>
      </Row>
      <Row>
        <Col style={{backgroundColor:"blue"}} span={12}>col-12</Col>
        <Col style={{backgroundColor:"skyblue"}} span={12}>col-12</Col>
      </Row>
      <Row>
        <Col style={{backgroundColor:"blue"}} span={8}>col-8</Col>
        <Col style={{backgroundColor:"skyblue"}} span={8}>col-8</Col>
        <Col style={{backgroundColor:"blue"}} span={8}>col-8</Col>
      </Row>
      <Row>
        <Col style={{backgroundColor:"blue"}} span={6}>col-6</Col>
        <Col style={{backgroundColor:"skyblue"}} span={6}>col-6</Col>
        <Col style={{backgroundColor:"blue"}} md={24} span={6}>col-6</Col>
        <Col style={{backgroundColor:"skyblue"}} lg={24} span={6}>col-6</Col>
      </Row>
    </div>
  );
};

export default antframe;
