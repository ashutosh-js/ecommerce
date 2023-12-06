import React from "react";
import { Carousel } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  width: "100%",
  textAlign: 'center',
  objectFit: "cover",
};

const Banner: React.FC = () => (
  <>
    <Carousel
      arrows
      nextArrow={<ArrowRightOutlined />}
      prevArrow={<ArrowLeftOutlined />}
      autoplay
      style={{
        backgroundColor: "#fff",
        color: "#000000",
        margin: "14px 15px 0px 15px",
      }}
    >
      <div>
        <img
          style={contentStyle}
          src="https://rukminim1.flixcart.com/fk-p-flap/480/80/image/f7b7d27605cca646.jpg?q=20"
        ></img>
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/ab169ccf09123a96.jpg?q=20"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/ab169ccf09123a96.jpg?q=20"
        ></img>
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/ab169ccf09123a96.jpg?q=20"
        ></img>
      </div>
    </Carousel>
  </>
);

export default Banner;
