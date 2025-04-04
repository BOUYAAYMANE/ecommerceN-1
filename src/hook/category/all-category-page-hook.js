import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory, {
  getAllCategoryPage,
} from "../../redux/actions/categorieAction";

export const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  // when first load
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, []);
  // hna kanmchy direct ldata
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  // to get page count
  //en fais ca car en 1er fois data prent 1s,3s.. pour s'afficher et nou donne une prob
  let pageCount = 0;
  if (category && category.paginationResult)
    pageCount = category.paginationResult.numberOfPages;
  // when press pagination
  // func bach n returniw num de page bach n accediw l page
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };
  return [loading, pageCount, category, getPage];
};
