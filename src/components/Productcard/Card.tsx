import React from "react";
import { Col, Row, Typography, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const { Meta } = Card;

interface CardsProps {
  title: string;
  items: {
    name: string; title: string; description: string; images: string ; price: number
}[];
}

const Cards: React.FC<CardsProps> = ({ title, items }) => {
  const navigate=useNavigate()
  const handleClick=()=>{
navigate("/productlist")
  }
  // console.log("dddd", items)
  return (
    <>
      <Row
        style={{
          backgroundColor: "#fff",
          color: "#000000",
          margin: "14px 15px 0px 15px",
        }}
        align="middle"
        justify="space-between"
      >
        <Text className="__Electronic_text">{title}</Text>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "15px",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            backgroundColor: "#1890ff",
          }}
          onClick={handleClick}
        >
          <ArrowRightOutlined style={{ color: "#fff" }} />
        </div>
      </Row>
      <Row
        gutter={[8, 16]}
        className="container_row"
        style={{
          backgroundColor: "#fff",
          color: "#000000",
          margin: "0px 15px 10px 15px",
          padding: "8px",
          overflowX:'auto',
          flexWrap:'nowrap'
        }}
      >
        {items?.map((item, index) => (
          <Col key={index} xs={12} sm={8} md={8} lg={6} xl={4}>
            <Card
              hoverable
              style={{ width: "100%",  padding: "16px 16px" }}
              cover={<img alt={item.title} src={item.images} style={{ width: "100%", height:'200px' }} />}
            >
              <Meta title={item.title} description={item.price} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cards;
