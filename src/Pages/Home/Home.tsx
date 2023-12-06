import React from "react";
import Layouts from "../../Layout/Layouts";
import HeroIndex from "../../components/HeroSection/Index";
import ProductIndex from "../../components/Productcard";

const Home: React.FC = () => {
  return (
    <>
      <Layouts>
        <HeroIndex />
        <ProductIndex />
      </Layouts>
    </>
  );
};
export default Home;
