import React from "react";
import {
  Col,
  Row,
  Card,
  Slider,
  Typography,
  Divider,
  Select,
  Space,
  Button,
} from "antd";

const rowStyle: React.CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.1)",
};

const filterColumnStyle: React.CSSProperties = {
  flex: "0 0 20%",
  backgroundColor: "#fff",
  padding: "10px",
  margin: "8px",
  maxHeight: "600px",
};

const productListColumnStyle: React.CSSProperties = {
  flex: "0 0 80%",
  backgroundColor: "#fff",
  margin: "8px",
};

const productListContainerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

const { Text } = Typography;

const Productlist: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
      <Row style={rowStyle}>
        <Col xs={12} sm={24} md={8} lg={8} xl={8} style={filterColumnStyle}>
            <Text strong style={{ fontSize: "22px" }}>
              Filter
            </Text>
            <Divider />
            <Text>Price</Text>
            <Slider defaultValue={30} />
            <Space wrap>
              <Select
                defaultValue="Min"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "100" },
                  { value: "lucy", label: "200" },
                  { value: "yiminghe", label: "400" },
                  { value: "disable", label: "800" },
                ]}
              />
              <Select
                defaultValue="Max"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "800" },
                  { value: "lucy", label: "400" },
                  { value: "Yiminghe", label: "200" },
                  { value: "disabled", label: "100" },
                ]}
              />
            </Space>
        </Col>
        <Col
          xs={12}
          sm={8}
          md={6}
          lg={16}
          xl={16}
          style={productListColumnStyle}
        >
          <div style={productListContainerStyle}>
            <Card
              hoverable
              style={{ width: 250, margin: "4px" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <div style={{display:'flex', whiteSpace:'nowrap' , justifyContent:'space-between'}}>
              <Text strong>Product Name</Text>
              <Text strong>2000 RS</Text>
              </div>
              <Button size="large" block style={{marginTop:'15px'}}>Add To Cart</Button>
             
            </Card>
            <Card
              hoverable
              style={{ width: 250, margin: "4px" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <div style={{display:'flex', whiteSpace:'nowrap' , justifyContent:'space-between'}}>
              <Text strong>Product Name</Text>
              <Text strong>2000 RS</Text>
              </div>
              <Button size="large" block style={{marginTop:'15px'}}>Add To Cart</Button>
             
            </Card>
            <Card
              hoverable
              style={{ width: 250, margin: "4px" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <div style={{display:'flex', whiteSpace:'nowrap' , justifyContent:'space-between'}}>
              <Text strong>Product Name</Text>
              <Text strong>2000 RS</Text>
              </div>
              <Button size="large" block style={{marginTop:'15px'}}>Add To Cart</Button>
             
            </Card>
            <Card
              hoverable
              style={{ width: 250, margin: "4px" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <div style={{display:'flex', whiteSpace:'nowrap' , justifyContent:'space-between'}}>
              <Text strong>Product Name</Text>
              <Text strong>2000 RS</Text>
              </div>
              <Button size="large" block style={{marginTop:'15px'}}>Add To Cart</Button>
             
            </Card>
            <Card
              hoverable
              style={{ width: 250, margin: "4px" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <div style={{display:'flex', whiteSpace:'nowrap' , justifyContent:'space-between'}}>
              <Text strong>Product Name</Text>
              <Text strong>2000 RS</Text>
              </div>
              <Button size="large" block style={{marginTop:'15px'}}>Add To Cart</Button>
             
            </Card>
         
          </div>
        </Col>
      </Row>
  );
};

export default Productlist;
