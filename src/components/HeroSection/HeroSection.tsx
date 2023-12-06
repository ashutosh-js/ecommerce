import React from "react";
import { Col, Row, Typography } from "antd";
import { useGetCategoriesQuery } from "../../services/categoryApi";
const { Text } = Typography;
import { Category } from "../../services/types";

const HeroSection: React.FC = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery({});
  console.log("results", categories, error, isLoading)

  return (
    <>
      <Row
      gutter={[16, 16]}
      className="container_row"
      style={{
        backgroundColor: "#fff",
        color: "#000000",
        margin: "8px 14px",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
      justify="center"
      align="middle"
      >
        <div       
        style={{ display: "flex", justifyContent:'center', flexWrap: "nowrap", gap: 15 }}>
        {categories?.map((item: Category)=>{
          return (
          <Col key={item.id} span={2} className="__items">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.image}
                alt=""
                style={{height:'80px', width:'180px'}}
              />
              <Text style={{ fontWeight: "bold", marginTop: "8px" }}>
                {item.name}
              </Text>
            </div>
          </Col>
            )
          })}
        
        </div>
      </Row>
    </>
  );
};
export default HeroSection;
