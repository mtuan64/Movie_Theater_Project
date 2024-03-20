import React, { useContext, useEffect, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Dropdown,
  Layout,
  Menu,
  message,
  theme,
} from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserInfoContext";
import { getMe } from "../../api/auth";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const BaseLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const data = useContext(UserContext);

  useEffect(() => {
    getMe()
      .then((res) => {
        data.setUser(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onNavigate = (key) => {
    navigate(key);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    message.success("Logout successfully !!");
  };

  const items = [
    getItem(
      <div onClick={() => onNavigate("/user")}>User</div>,
      "1",
      <PieChartOutlined />
    ),
    getItem(
      <div onClick={() => onNavigate("/film")}>Film</div>,
      "2",
      <DesktopOutlined />
    ),
  ];

  const itemHeader = [
    getItem(<div onClick={() => {}}>User Info</div>, "1", <PieChartOutlined />),
    getItem(<div onClick={logout}>Logout</div>, "2", <DesktopOutlined />),
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical text-white text-3xl text-center my-5 font-bold">
          LOGO
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="mb-5 text-right !px-4"
        >
          <Dropdown
            className="min-w-[100px]"
            menu={{
              items: itemHeader,
            }}
            placement="bottomRight"
            arrow
          >
            <Button>{data?.user?.taiKhoan}</Button>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
