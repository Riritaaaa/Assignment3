import React, { useState } from "react";
import { Button, Form } from "antd";
import { Typography, Steps, message } from "antd";
import Workshop_ant2 from "@antframework/Workshop_ant2";
import Workshop_ant3 from "@antframework/Workshop_ant3";
import Regisform from "@antframework/Regisform";
import "@antframework/Ant.css";

const steps = [
  {
    title: "",
    content: <Regisform />,
  },
  {
    title: "",
    content: <Workshop_ant2 />,
  },
  {
    title: "",
    content: <Workshop_ant3 />,
  },
];

const { Text } = Typography;

const Workshop_ant: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current !== steps.length - 1) {
      setCurrent(current + 1);
    } else {
      message.success("Register complete!");
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500  to-blue-500 h-screen flex justify-center items-center">
        <div className="pt-10 pb-5 px-8 h-fit w-fit bg-white shadow-lg shadow-slate-500 flex flex-col rounded-lg transition-all ">
          <Text className="text-center font-bold text-2xl block mb-5">
            Sign up Form
          </Text>

          <Form
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={next}
            autoComplete="off"
          >
            <Steps current={current} items={items} />
            <div>{steps[current].content}</div>

            <div style={{ marginBottom: 10, marginTop: 30 }}>
              {current > 0 && (
                <Button
                  onClick={() => prev()}
                  style={{ backgroundColor: "rgb(249 115 22)" }}
                  className="buttonant text-white px-8 mr-3"
                >
                  PREVIOUS
                </Button>
              )}

              {current < steps.length - 1 && (
                <Button
                  style={{ backgroundColor: "rgb(147 51 234)" }}
                  type="primary"
                  htmlType="submit"
                  className="buttonant text-white px-12"
                >
                  NEXT
                </Button>
              )}

              {current === steps.length - 1 && (
                <Button
                  style={{ backgroundColor: "rgb(219 39 119)" }}
                  type="primary"
                  htmlType="submit"
                  className="buttonant text-white px-12"
                >
                  DONE
                </Button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Workshop_ant;
