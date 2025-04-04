import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  removeProductToWishList,
} from "./../../redux/actions/wishListAction";
import favoff from "../../assets/Image/fav-off.png";
import favon from "../../assets/Image/fav-on.png";
import notify from "../../component/utilitys/ToastNotify";

const ProductCardHook = (product, favProd) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  // favProd.some => kat returner True ila tha9a9 condition
  let Fav = favProd.some((fitem) => fitem === product._id);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);
  // useState hna  katreland l page bach favProd t reload hta hiya ont3tina new data li fiha
  const [isFav, setIsFav] = useState(Fav);
  //
  let user = localStorage.getItem("user");
  useEffect(() => {
    setIsFav(favProd.some((fitem) => fitem === product._id));
  }, [favProd]);

  const handelFav = () => {
    if (isFav) {
      removeToWishListData();
    } else {
      addToWishListData();
    }
  };

  useEffect(() => {
    if (isFav === true) {
      setFavImg(favon);
    } else {
      setFavImg(favoff);
    }
  }, [isFav]);

  const resAdd = useSelector((state) => state.addToWishListReducer.addWishList);
  const resRemove = useSelector(
    (state) => state.addToWishListReducer.removeWishList
  );

  const addToWishListData = async () => {
    setIsFav(true);
    setFavImg(favon);
    setLoadingAdd(true);
    await dispatch(
      addProductToWishList({
        productId: product._id,
      })
    );
    setLoadingAdd(false);
  };

  const removeToWishListData = async () => {
    setIsFav(false);
    setFavImg(favoff);
    setLoadingRemove(true);
    await dispatch(removeProductToWishList(product._id));
    setLoadingRemove(false);
  };

  useEffect(() => {
    if (loadingAdd === false) {
      //console.log(resAdd);
      if (resAdd && resAdd.status === 200) {
        notify("تمت اضافة المنتج للمفضلة بنجاح", "Success");
      } else if (resAdd && resAdd.status === 401) {
        notify("انتا غير مسجل", "Error");
      }
    }
  }, [loadingAdd]);

  useEffect(() => {
    if (loadingRemove === false) {
      //console.log(resRemove);
      if (resRemove && resRemove.status === "success") {
        notify("تمت حذف المنتج من المفضلة بنجاح", "warning");
      } else if (resAdd && resAdd.status === 401) {
        notify("انتا غير مسجل", "Error");
      }
    }
  }, [loadingRemove]);

  return [removeToWishListData, addToWishListData, handelFav, favImg, user];
};

export default ProductCardHook;
