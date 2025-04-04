import { usePostDataWithImage } from "../../hooks/usePostData";
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
import {useGetData }from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useInUpdateDataWithImage } from "../../hooks/useUpdateData";

// get all products
const getAllProduct = (limite) => async (dispatchReturn) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limite}`);
    dispatchReturn({
      type: GET_ALL_PRODUCT,
      payload: response,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};
export default getAllProduct;

// get all products by category
export const getAllProductsByCategory = (page, limit, categoryID) => async (dispatch) => {
  try {
      const response = await useGetData(`/api/v1/products?limit=${limit}&category=${categoryID}&page=${page}`);
      dispatch({
          type: GET_ALL_PRODUCTS_CATEGORY,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: GET_ALL_PRODUCTS_CATEGORY,
          payload: e.response,
      })
  }
}

//get all products by brand
export const getAllProductsByBrand = (page, limit, brandID) => async (dispatch) => {
  try {
      const response = await useGetData(`/api/v1/products?limit=${limit}&brand=${brandID}&page=${page}`);
      dispatch({
          type: GET_ALL_PRODUCTS_BRAND,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: GET_ALL_PRODUCTS_BRAND,
          payload: e.response,
      })
  }
}

// get product page  with pagination
export const getProductPage = (limite,nbrPage) => async (dispatchReturn) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limite}&page=${nbrPage}`);
    dispatchReturn({
      type: GET_ALL_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};
// get all product with  query string (example de query string :=>`/api/v1/products?limit=${limite}&page=${nbrPage}`)
export const getAllProductSearch = (queryString) => async (dispatchReturn) => {
  try {
    const response = await useGetData(`/api/v1/products?${queryString}`);
    dispatchReturn({
      type: GET_ALL_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};


// create product
export const createProduct = (formaData) => async (dispatchReturn) => {
  try {
    const response = await usePostDataWithImage(`/api/v1/products`, formaData);
    dispatchReturn({
      type: CREATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};

// GET ONE product details with id
export const getOneProduct = (id) => async (dispatchReturn) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);
    dispatchReturn({
      type: GET_PRODUCT_DETAILS,
      payload: response,
      loading: true,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};

// GET products like
export const getProductLike = (id) => async (dispatchReturn) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${id}`);
    dispatchReturn({
      type: GET_PRODUCT_LIKE,
      payload: response,
      loading: true,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};

// GET products like
export const deleteProduct = (id) => async (dispatchReturn) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);
    dispatchReturn({
      type: DELETE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};
//update prooduct with id
export const updateProducts = (id,data) => async (dispatch) => {
  try {
      const response = await useInUpdateDataWithImage(`/api/v1/products/${id}`,data);
      dispatch({
          type: UPDATE_PRODUCTS,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
      })
  }
}
