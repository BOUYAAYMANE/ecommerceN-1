import React from "react";
import { Header1 } from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

export const HeaderAll = ({ theme }) => {
  return (
    <>
      <Header1 />
      <Header2 theme={theme} />
      <Header3 />
    </>
  );
};
