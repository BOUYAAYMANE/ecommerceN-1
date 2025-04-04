import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { Subtitle } from "../utilitys/Subtitle";
import { CategoryCard } from "../Category/CategoryCard";

import { HomeCategoryHook } from "../../hook/category/home-category-hook";
export const HomeCategories = ({ theme }) => {
  //
  const [category, loading, colors] = HomeCategoryHook();

  //
  return (
    <Container style={{maxWidth:"1150px"}}>
      <Subtitle
        theme={theme}
        pathText="/AllCategorie"
        title="categories"
        btntitle="Plus"
      />
      <Row className="my-2 justify-content-between">
        {loading === false ? (
          category && category.data ? (
            category.data.slice(0, 5).map((item, index) => {
              return (
                <CategoryCard
                  theme={theme}
                  key={index}
                  id={item._id}
                  title={item.name}
                  img={item.image}
                  // colors[Math.floor(Math.random() * 5) + 1]
                  // background={colors[Math.floor(Math.random() * 5) + 1]}
                />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};
