import React from "react";
import { Header1 } from "../component/header/Header1";
import Header2 from "../component/header/Header2";
import Header3 from "../component/header/Header3";
import { Box, useTheme } from "@mui/material";
import Hero from "../component/hero/Hero";
import Main from "../component/main/main";
import Footer from "../component/footer/footer";
import ScrollToTop from "../component/scroll/ScrollToTop";
import { useMode } from "../theme";
import { HomeCategories } from "./../component/Home/HomeCategories";
import ViewHommeProducthook from "../hook/product/view-home-products-hook";
import { HeaderAll } from "../component/header/HeaderAll";
// import { useTheme } from "@emotion/react";
import { BrandFeature } from "./../component/Brand/BrandFeature";
import IconSection from "../component/hero/IconSection";
// const theme = useTheme()
// const [theme, colorMode] = useMode();
export const HomePage = ({ theme }) => {
  const [items] = ViewHommeProducthook();

  return (
    <div>
      <HeaderAll theme={theme} />
      <Box bgcolor={theme.palette.bg.main}>
        <Hero />
        <HomeCategories theme={theme} />
      <IconSection />

        {items ? (
          <Main
            products={items}
            pathText="/Product"
            title="most sold"
            btntitle="Plus"
          />
        ) : null}
        <BrandFeature
          title="brands"
          btntitle="Plus"
        />
        {/* <Main /> */}
      </Box>
      <Footer />

      <ScrollToTop />
    </div>
  );
};
