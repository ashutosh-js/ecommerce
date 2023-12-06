import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Form, Typography, Spin, Row, Col, Card } from "antd";
import { toast } from "react-toastify";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";

const { Text, Title } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>(false);

  const signin = async () => {
    setisLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Signin Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
      setisLoading(false);
    } catch (error) {
      toast.error("Sigin Failed", {
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
    <>
      <div className="login-container">
        {isLoading && <Spin />}
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col xs={22} sm={18} md={14} lg={10} xl={8}>
            <Card
              className="login-card"
              cover={
                <img src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" />
              }
            >
              <Title level={2}>Welcome to Flipkart</Title>

              {/* <Link to="/">
                <img
                  className="login-logo"
                  // src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  // src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                  alt="flipkart"
                  style={{ width: "100%" }}
                />
              </Link> */}

              <Form onFinish={() => {}} className="login-form">
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
                    prefix={<UserOutlined className="site-form-item-icon" />}
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

                <div className="button-container">
                  <Button
                    htmlType="submit"
                    className="login-signIn-button"
                    onClick={signin}
                  >
                    Sign In
                  </Button>

                  <Text>
                    By continuing, you agree to Flipkart's Terms of Use and
                    Privacy Policy.
                  </Text>
                </div>

                <Button
                  onClick={() => navigate("/register")}
                  className="login-register-button"
                >
                  New to Flipkart? Create an account
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
