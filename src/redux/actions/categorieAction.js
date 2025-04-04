import {useGetData }from "../../hooks/useGetData";
import { usePostDataWithImage } from "../../hooks/usePostData";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from "../type";
// get all categories
    //dispatchReturn just variable mais dial asyncr dez api (midlware)
 const getAllCategory = (limite) => async (dispatchReturn) => {
  try {
    const response = await useGetData(`/api/v1/categories?limit=${limite}`);
    dispatchReturn({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};
export default getAllCategory
// export one categ
export const getOneCategory = (id) => async (dispatchReturn) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}`);
    dispatchReturn({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};

// get all categories with pagination
export const getAllCategoryPage = (page) => async (dispatchReturn) => {
  try {
    const response = await useGetData(
      `/api/v1/categories?limit=6&page=${page}`
    );
    dispatchReturn({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};
// // create Category (name+image)
export const creatCategory = (formData) => async (dispatchReturn) => {
  try {
    const response = await usePostDataWithImage(
      `/api/v1/categories`, formData
    );
    dispatchReturn({
      type: CREATE_CATEGORY,
      payload: response,
      loading:true
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};
