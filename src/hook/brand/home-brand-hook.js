import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";

export const HomeBrandHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);
  // hna kanmchy direct ldata
  const Brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  return [Brand, loading];
};
