import {
  CREATE_CATEGORY,
  CREATE_SUBCATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  GET_ONE_SUBCATEGORY,
} from "../type";

const initial = {
  subcategory: [],
  loading: true,
};
const subcategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_SUBCATEGORY:
      return {
        subcategory: action.payload,
        loading: false,
      };
      case GET_ONE_SUBCATEGORY:
      return {
        subcategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        subcategory: action.payload,
      };
    default:
      return state;
  }
};

export default subcategoryReducer;
