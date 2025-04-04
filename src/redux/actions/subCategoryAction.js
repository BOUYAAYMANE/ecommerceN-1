import {useGetData }from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { CREATE_SUBCATEGORY, GET_ERROR, GET_ONE_SUBCATEGORY } from "../type";

// // create subCategorie
export const creatSubCategory = (data) => async (dispatchReturn) => {
  try {
    const response = await usePostData(`/api/v1/subcategories`, data);
    dispatchReturn({
      type: CREATE_SUBCATEGORY,
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

// get  subCategorie depend in category id
export const getOneCategory = (id) => async (dispatchReturn) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
    dispatchReturn({
      type: GET_ONE_SUBCATEGORY,
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
