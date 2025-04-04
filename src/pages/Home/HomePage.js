import React from "react";
import { Slider } from "../../component/Home/Slider";
import { HomeCategories } from "../../component/Home/HomeCategories";
import CardProductContainer from "../../component/Products/CardProductContainer";
import { DiscountSection } from "../../component/Home/DiscountSection";
import { BrandFeature } from "../../component/Brand/BrandFeature";
import { Footer } from "../../component/utilitys/Footer";
import ViewHommeProducthook from "../../hook/product/view-home-products-hook";
import { NavBarLogin } from "../../component/utilitys/NavBarLogin";

export const HomePage = () => {
  const [items] = ViewHommeProducthook();

  return (
    <>
      <NavBarLogin />
    
      {/* <NavBarLogin /> */}
      <div className="font" style={{ minHeight: "700px" }}>
        <Slider />
        <HomeCategories />
        {items ? (
          <CardProductContainer
            products={items}
            pathText="/Product"
            title="الاكثر مبيعا"
            btntitle="المزيد"
          />
        ) : null}

        <DiscountSection />
        {items ? (
          <CardProductContainer
            products={items}
            pathText="/Product"
            title="الاكثر مبيعا"
            btntitle="المزيد"
          />
        ) : null}
        <BrandFeature title="اشهر المركات" btntitle="المزيد" />
      </div>
    </>
  );
};
