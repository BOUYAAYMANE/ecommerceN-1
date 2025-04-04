import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllProduct, {
  getProductPage,
} from "../../redux/actions/productsAction";
import notify from "../../component/utilitys/ToastNotify";

const ViewAdminProducthook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warning");
      return;
    }
    dispatch(getAllProduct(5));
  }, []);

  const allProducts = useSelector((state) => state.allProduct.allproduct);
  let items = [];
  if (allProducts) items = allProducts.data;
  else items = [];
  //numberOfPages pagination
  let pageCount = 0;
  if (allProducts && allProducts.paginationResult)
    pageCount = allProducts.paginationResult.numberOfPages;
  // get data de current page
  const getPage = async (page) => {
    await dispatch(getProductPage(5, page));
  };

  return [items, getPage, pageCount];
};

export default ViewAdminProducthook;
