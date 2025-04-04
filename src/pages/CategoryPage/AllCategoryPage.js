import React from "react";
import { CategorieContainer } from "../../component/Category/CategorieContainer";
import { PaginationComp } from "../../component/utilitys/PaginationComp";
import { AllCategoryPageHook } from "../../hook/category/all-category-page-hook";
import { NavBarLogin } from "../../component/utilitys/NavBarLogin";
import { HeaderAll } from "../../component/header/HeaderAll";
import { useTheme } from "@mui/system";
export const AllCategoryPage = () => {
  const [loading, pageCount, category, getPage] = AllCategoryPageHook();
  const theme = useTheme();

  return (
    <>
      <HeaderAll theme={theme} />

      <div style={{ minHeight: "670px" }}>
        <CategorieContainer data={category.data} loading={loading} />
        {/* affichage de pagination ou non */}
        {pageCount > 1 ? (
          <PaginationComp pageCount={pageCount} onPress={getPage} />
        ) : null}
      </div>
    </>
  );
};
