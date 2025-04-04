import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCTS_BRAND,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ERROR,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_LIKE,
  UPDATE_PRODUCTS,
} from "../type";

const initial = {
  product: [],
  allproduct: [],
  oneproduct: [],
  likeproduct: [],
  deleteProduct: [],
  allProductCat: [],
  allProductBrand: [],
  productPage: [],
  updateProducts: [],
  loading: true,
};
const productReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        allproduct: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCT:
      return {
        ...state,
        productPage: action.payload,
        loading: false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        oneproduct: action.payload,
        loading: false,
      };
    case GET_PRODUCT_LIKE:
      return {
        ...state,
        likeproduct: action.payload,
        loading: false,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        updateProducts: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_CATEGORY:
      return {
        loading: true,
        allProductCat: action.payload,
      };
    case GET_ALL_PRODUCTS_BRAND:
      return {
        loading: true,
        allProductBrand: action.payload,
      };
    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
