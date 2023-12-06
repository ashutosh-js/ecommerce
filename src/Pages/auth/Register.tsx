import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Form, Typography, Spin, Row, Col, Card } from "antd";
import { toast } from "react-toastify";
import {  LockOutlined, MailOutlined } from "@ant-design/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";

const { Text, Title } = Typography;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>(false);

  const register = async () => {
    setisLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Registration Successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/login");
      setisLoading(false);
    } catch (error) {
      toast.error("Registration Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setisLoading(false);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}
    >
      <Col xs={22} sm={16} md={12} lg={8} xl={6} span={12}>
        <Card style={{ background: 'blue' }}>
          <Title style={{ color: "#fff" }} level={2}>Register</Title>
          <Text style={{ color: "#fff" }}>Create your Flipkart account</Text>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
            alt=""
            style={{ width: "100%" }}
          />
        </Card>
      </Col>
      <Col xs={22} sm={16} md={12} lg={8} xl={6} span={12}>
        <Card style={{ padding: '40px' }}>
          {isLoading && <Spin />}
          <Link to="/">
            <img
              className="login__logo"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart"
              style={{ width: "100%" }}
            />
          </Link>

          <Form onFinish={() => { }}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="login__signInButton"
              onClick={register}
            >
              Register
            </Button>
          </Form>

          <Text>
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </Text>

          <Button
            onClick={() => navigate("/login")}
            className="login__registerButton"
          >
            Already have an account? Sign In
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
