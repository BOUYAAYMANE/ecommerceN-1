import React from "react";
import { BrandContainer } from "../../component/Brand/BrandContainer";
import { PaginationComp } from "../../component/utilitys/PaginationComp";
import { AllBrandPageHook } from "../../hook/brand/all-brand-page-hook";
import { NavBarLogin } from "../../component/utilitys/NavBarLogin";

export const AllBrandPage = () => {
  const [loading, pageCount, brand, getPage] = AllBrandPageHook();
  return (
    <>
      <NavBarLogin />
      <div style={{ minHeight: "670px" }}>
        <BrandContainer loading={loading} data={brand.data} />
        {pageCount > 1 ? (
          <PaginationComp pageCount={pageCount} onPress={getPage} />
        ) : null}
      </div>
    </>
  );
};
