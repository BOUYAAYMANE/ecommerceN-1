import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllProduct from "../../redux/actions/productsAction";
import notify from "../../component/utilitys/ToastNotify";

const ViewHommeProducthook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warning");
      return;
    }
    dispatch(getAllProduct());
  }, []);

  const allProducts = useSelector((state) => state.allProduct.allproduct);
  let items = [];
  if (allProducts && allProducts.data) items = allProducts.data.slice(0, 4);
  else items = [];

  return [items];
};

export default ViewHommeProducthook;
