import React from "react";
import { CategorieHeader } from "../../component/Category/CategorieHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../component/Products/ProductDetails";
import RateContainer from "../../component/Rate/RateContainer";
import CardProductContainer from "../../component/Products/CardProductContainer";
import ViewHommeProducthook from "../../hook/product/view-home-products-hook";
import { useParams } from "react-router-dom";
import ViewProducDetailstHook from "../../hook/product/view-product-details-hook";
import { NavBarLogin } from "../../component/utilitys/NavBarLogin";
import { HeaderAll } from "../../component/header/HeaderAll";
import { useTheme } from "@mui/material";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [item , images, cat, brand, items] = ViewProducDetailstHook(id);

  if (items)
  var prod = items.slice(0, 4)

if (item) {
  var rateAvg = item.ratingsAverage
  var rateQty = item.ratingsQuantity
}


const theme = useTheme();

  return (
    <div>
      <HeaderAll theme={theme} />
      {/* <NavBarLogin /> */}
      <Container>
        <ProductDetails />
        <RateContainer theme={theme} rateAvg={rateAvg} rateQty={rateQty} />
        {items ? (
          <CardProductContainer products={prod} title="Products you may like" />
        ) : null}
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
