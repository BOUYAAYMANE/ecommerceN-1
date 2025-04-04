import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory from "../../redux/actions/categorieAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import ViewSearhProducthook from "../product/view-search-products-hook";

const Sidebarsearchhook = () => {
  const [items, pageCount, getPage, getProduct, results] =
    ViewSearhProducthook();
  const dispatch = useDispatch();
  // when first load
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    get();
  }, []);
  // hna kanmchy direct ldata
  const allCat = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);

  // to get categorie
  let category = [];
  if (allCat && allCat.data) category = allCat.data;
  // to get brand
  let brand = [];
  if (allBrand && allBrand.data) brand = allBrand.data;

  var queryCategory = "";
  const [cateChecked, setCateChecked] = useState([]);
  // when user press any category
  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCateChecked([]);
    } else {
      if (e.target.checked === true) {
        // [...cateChecked] => valeur precendant
        setCateChecked([...cateChecked, value]);
      } else if (e.target.checked === false) {
        const newArr = cateChecked.filter((e) => e !== value);
        setCateChecked(newArr);
      }
    }
  };
  // mli kayw9e3 chi haja f array cateChecked : katkhdem usseffect suiv
  useEffect(() => {
    // map sur val=> id chicked pour ajout dans querystring de allproductQuerystring?
    queryCategory = cateChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("queryCategory", queryCategory);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [cateChecked]);

  // brand
  var queryBrand = "";
  const [brandChecked, setBrandChecked] = useState([]);
  // when user press any category
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        // [...brandChecked] => valeur precendant
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArr = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArr);
      }
    }
  };
  useEffect(() => {
    // map sur val=> id chicked pour ajout dans querystring de allproductQuerystring?
    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("queryBrand", queryBrand);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandChecked]);
  // search par price from => to
  const [From,setPriceFrom]=useState(0);
  const [To,setPriceTO]=useState(0);
  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value)
  };
  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTO(e.target.value)
  };
  useEffect(() => {
    
  setTimeout(() => {
    getProduct()
  }, 1000);
   
  }, [From,To])
  
  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo];
};

export default Sidebarsearchhook;
