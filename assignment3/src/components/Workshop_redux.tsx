import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { regisSlice, updateFromRegis } from "@store/slice/regisSlice";
import { Button, Form } from "antd";
import { Input } from "antd";
import reactLogo from "@assets/react.svg";
import viteLogo from "/vite.svg";

const Workshop_redux = () => {
  const count = useSelector((state: RootState) => state.register.value);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const submit = (e: regisSlice) => {
    console.log(e);
    dispatch(updateFromRegis(e));
  };

  console.log(count);
  return (
    <>
      <div className="bg-black h-screen flex flex-row items-center justify-evenly">
        <div className="justify-center flex-1 ">
          <div className="flex flex-row justify-center mb-10">
            <a href="https://vitejs.dev" target="_blank">
              <img
                className="w-[80px] h-[80px] mr-10"
                src={viteLogo}
                alt="vite logo"
              />
            </a>
            <a href="https://react.dev" target="_blank">
              <img
                className="w-[80px] h-[80px]"
                src={reactLogo}
                alt="react logo"
              />
            </a>
          </div>

          <h1 className="text-white font-bold text-center text-[50px] mb-[30px]">
            Vite + React
          </h1>

          <Form
            form={form}
            onFinish={submit}
            layout="vertical"
            className="justify-center flex items-center flex-col"
          >
            <Form.Item
              label="Username :"
              name="username"
              className="[&_label]:!text-white w-[350px]"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="[&_label]:!text-white  w-[350px]"
              label="Email :"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="mb-8 [&_label]:!text-white  w-[350px]"
              label="Password :"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Button
              style={{ backgroundColor: "rgb(219 39 119)" }}
              type="primary"
              htmlType="submit"
              className=" !bg-slate-500 text-white px-[150px] mb-8"
            >
              Register
            </Button>
          </Form>
          <p className="text-white text-center">
            Click on the Vite and React logos to learn more
          </p>
        </div>

        <div className=" bg-white h-screen p-10 font-semibold w-4/12">
          <p className="font-bold text-2xl mb-5">ข้อมูลจาก Reducer</p>
          <p>
            username :{" "}
            {count.username.length ? count.username : "ยังไม่มีข้อมูล"}
          </p>
          <br></br>
          <p>email : {count.email.length ? count.email : "ยังไม่มีข้อมูล"}</p>
          <br></br>
          <p>
            password :{" "}
            {count.password.length ? count.password : "ยังไม่มีข้อมูล"}
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Workshop_redux;
