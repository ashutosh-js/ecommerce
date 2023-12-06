import React, { ReactNode } from "react";
import { Layout, Space } from "antd";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
const {  Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "transparent",
};

// const footerStyle: React.CSSProperties = {
//   textAlign: "center",
//   color: "#fff",
//   backgroundColor: "#7dbcea",
// };

interface LayoutsProps {
  children: ReactNode;
}

const Layouts: React.FC<LayoutsProps> = ({ children }) => {
  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Navbar />
          {/* <iframe
src="https://www.chatbase.co/chatbot-iframe/I0vZGP6HvFWd6hx--86jP"
width="100%"
style={{height:'100%', minHeight:'700px'}}
// style="height: 100%; min-height: 700px"
frameborder="0"
></iframe> */}
          <Content style={contentStyle}>{children}</Content>
          <Footer/>
        </Layout>
      </Space>
    </>
  );
};

export default Layouts;
