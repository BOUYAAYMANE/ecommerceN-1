import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBrand } from "../../redux/actions/brandAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProductToCart } from "./../../redux/actions/cartAction";
import notify from "../../component/utilitys/ToastNotify";

const AddToCartHook = (prdID, item) => {
  const dispatch = useDispatch();

  const [indexColor, setIndexColor] = useState("");
  const [colorText, setColorText] = useState("");
  const [loading, setLoading] = useState(true);
  const colorClick = (index, color) => {
    setIndexColor(index);
    setColorText(color);
  };

  //add product to cart
  const addToCartHandel = async () => {
    //console.log(item.availableColors);
    if (item.availableColors.length >= 1) {
      if (colorText === "") {
        notify("Please choose a color for the product first.", "warning");
        return;
      }
    } else {
      setColorText("");
    }
    setLoading(true);
    await dispatch(
      addProductToCart({
        productId: prdID,
        color: colorText,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.addToCart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify(
          "The product has been added to your cart successfully.",
          "success"
        );
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("Log in first", "warning");
      }
    }
  }, [loading]);

  return [colorClick, indexColor, addToCartHandel];
};

export default AddToCartHook;
