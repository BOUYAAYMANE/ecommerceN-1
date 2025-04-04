import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllProduct, {
  getAllProductSearch,
  getProductPage,
} from "../../redux/actions/productsAction";

const ViewSearhProducthook = () => {
  const limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    // kathafed 3la resulta de search wakha nreload lpage
    getStorage();
    // mli kanklikiw 3la chi whda  tartib hassba 'akter mabi3an ouuu .......'
    sortData();
    await dispatch(
      getAllProductSearch(
        // `keyword=${word}&limit=${limit}&sort=${sort}&${queryCategory}&${queryBrand}&price[gte]=${priceFrom}&price[lte]=${priceTo}`
        `keyword=${word}&limit=${limit}&sort=${sort}&${queryCategory}&${queryBrand}&${pricefromString}&${priceToString}`
      )
    );
  };
  useEffect(() => {
    getProduct();
  }, []);

  const allProducts = useSelector((state) => state.allProduct.allproduct);
  let items = [];
  try {
    if (allProducts) items = allProducts.data;
    else items = [];
  } catch (error) {}

  //numberOfPages pagination
  let pageCount = 0;
  try {
    if (allProducts && allProducts.paginationResult) {
      pageCount = allProducts.paginationResult.numberOfPages;
    } else pageCount = 0;
  } catch (error) {}
  // return nombre de resultat total de produit
  let results = 0;
  try {
    if (allProducts && allProducts.results) {
      results = allProducts.results;
    } else results = 0;
  } catch (error) {}
  // get data de current page (data de chaque page)
  const getPage = async (page) => {
    getStorage();
    sortData();
    await dispatch(
      getAllProductSearch(
        `keyword=${word}&page=${page}&limit=${limit}&sort=${sort}&${queryCategory}&${queryBrand}&${pricefromString}&${priceToString}`
      )
    );
  };
  let pricefromString = "",
    priceToString = "";
  let word = "",
    queryCategory = "",
    queryBrand = "",
    priceFrom = 0,
    priceTo = 0;
  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    if (localStorage.getItem("queryCategory") != null)
      queryCategory = localStorage.getItem("queryCategory");
    if (localStorage.getItem("queryBrand") != null)
      queryBrand = localStorage.getItem("queryBrand");
    if (localStorage.getItem("priceFrom") != null)
      priceFrom = localStorage.getItem("priceFrom");
    if (localStorage.getItem("priceTo") != null)
      priceTo = localStorage.getItem("priceTo");
    //
    if (priceFrom === "" || priceFrom <= 0) {
      pricefromString = "";
    } else {
      pricefromString = `&price[gt]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };
  // when user choose sort type
  let sortType = "",
    sort;
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "السعر من الاقل للاعلي") {
      sort = "+price";
    } else if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    } else if (sortType === "الاعلى تقييما") {
      sort = "-ratingsQuantity";
    } else if (sortType === "الاكتر مبيعا") {
      sort = "-sold";
    } else sort = "";
  };
  return [items, pageCount, getPage, getProduct, results];
};

export default ViewSearhProducthook;
