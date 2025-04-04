import {useGetData }from "../../hooks/useGetData"
import { usePostDataWithImage } from "../../hooks/usePostData"
import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "../type"

// get all brand
export const getAllBrand =(limite) => async(dispatchReturn) =>{
    try {
        const resp = await useGetData(`/api/v1/brands?limit=${limite}`)
        dispatchReturn ({
            type : GET_ALL_BRAND,
            payload : resp,
        })
    } catch (error) {
        dispatchReturn ({
            type : GET_ERROR,
            payload : "err" + error
        })
    }
}

// get all brand with pagination
export const getAllBrandPage = (page) => async (dispatchReturn) => {
  try {
    const response = await useGetData(
      `/api/v1/brands?limit=6&page=${page}`
    );
    dispatchReturn({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};
// get all brand with pagination
export const getOneBrand = (id) => async (dispatchReturn) => {
  try {
    const response = await useGetData(
      `/api/v1/brands/${id}`
    );
    dispatchReturn({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (error) {
    dispatchReturn({
      type: GET_ERROR,
      payload: "error " + error,
    });
  }
};
// // create brand 
export const creatBrand = (formData) => async (dispatchReturn) => {
  try {
    const response = await usePostDataWithImage(
      `/api/v1/brands`, formData
    );
    dispatchReturn({
      type: CREATE_BRAND,
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
