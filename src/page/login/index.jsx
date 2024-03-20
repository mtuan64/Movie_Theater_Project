import React, { useContext, useEffect, useState } from "react";
import { login } from "../../api/auth";
import { Button, Form, Input, Spin, message } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserInfoContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await login(values.username, values.password);
      localStorage.setItem("token", res.data.content.accessToken);
      setUser(res.data.content);
      navigate("/user");
      message.success("Login successfully");
    } catch (error) {
      message.error(error.response.data.content);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <div className="flex items-center justify-center min-h-screen">
        <Form
          layout="vertical"
          name="basic"
          className="w-[500px] border border-gray-800 p-4 rounded-lg"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            initialValue="13123"
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                min: 3,
                message: "User name must has at least 3 characters",
              },
              // {
              //   pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              //   message: "Username invalid"
              // }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue="BC42Movies"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="text-center">
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Spin>
  );
};

export default Login;
