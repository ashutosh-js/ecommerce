import React from "react";
import {
  Layout,
  Row,
  Col,
  Input,
  Button,
  Badge,
  Dropdown,
  Space,
  message,
} from "antd";
import type { MenuProps } from "antd";

import {
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";


const {  Header } = Layout;
const { Search } = Input;


const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000000',
  height: 64,
  paddingInline: 16,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    label: "My Profile",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "Order",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "Wishlist",
    key: "3",
    icon: <UserOutlined />,
  },
  {
    label: "Logout",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

 
const Navbar: React.FC = () => {
  return (
    <Header className="header" style={headerStyle}>
    <Row justify="space-evenly" align="middle">
      <Col xs={5} sm={8} md={8} lg={6} xl={4}>
        <div className="logo">Flipkart</div>
      </Col>
      <Col xs={6} sm={6} md={10} lg={10} xl={10}>
        <Search
          placeholder="Search..."
          allowClear
          style={{ verticalAlign: 'middle', width: "100%" }}
        />
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} className="header-actions">
        <Link to={'/cart'}>
          <Badge count={5}>
            <ShoppingCartOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          </Badge>
        </Link>
      </Col>
      <Col xs={4} sm={4} md={4} lg={2} xl={2} className="header-actions">
        <Dropdown menu={menuProps} placement="bottomRight">
          <Link to={'/login'}>
            <Button icon={<UserOutlined />} style={{ color: "black" }} ghost>
              <Space>
                Login
                <DownOutlined />
              </Space>
            </Button>
          </Link>
        </Dropdown>
      </Col>
    </Row>
  </Header>
    
  );
};

export default Navbar;
