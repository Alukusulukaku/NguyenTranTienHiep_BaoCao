import Slider from "../../pages/frontend/home/Slider";
import React from "react";
import SuggestedCategories from "../../pages/frontend/home/SuggestedCategories";
import {
  LatestProducts,
  SaleProducts,
  TrendingProducts,
} from "../../pages/frontend/home/Category";
import News from "../../pages/frontend/home/News";
import Subscribe from "../../pages/frontend/home/Subscribe";

function Home() {
  return (
    <>
      <div>
        <Slider />
        <LatestProducts />
        <SuggestedCategories />
        <TrendingProducts />
        <SaleProducts />
        <News />
      </div>
      <Subscribe />
    </>
  );
}

export default Home;
