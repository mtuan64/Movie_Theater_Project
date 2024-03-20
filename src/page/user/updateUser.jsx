import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/user";
import { Button, Form } from "antd";
import Input from "antd/es/input/Input";

const UpdateUser = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(info);
    if (!info) return;
    form.setFieldsValue({
      username: info.taiKhoan,
      password: info.matKhau,
    });
  }, [info, form]);

  const onFinish = async (values) => {
    // setLoading(true);
    // try {
    //   const res = await login(values.username, values.password);
    //   localStorage.setItem("token", res.data.content.accessToken);
    //   setUser(res.data.content);
    //   navigate("/user");
    //   message.success("Login successfully");
    // } catch (error) {
    //   message.error(error.response.data.content);
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    getUser(id)
      .then((res) => {
        console.log(res);
        setInfo(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <Form
      form={form}
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
  );
};

export default UpdateUser;
