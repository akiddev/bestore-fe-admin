import CategoryService from "../../services/categoryService";
import {
  CATEGORIES_SET,
  CATEGORY_SET,
  CATEGORY_STATE_CLEAR,
} from "./actionTypes";

//Insert Category
export const insertCategory = (category, navigate) => async (dispatch) => {
  const service = new CategoryService();

  try {
    console.log("insert category");

    const response = await service.insertCategory(category);

    if (response.status === 201) {
      dispatch({
        type: CATEGORY_SET,
        payload: response.data,
      });
    }

    console.log(response);
  } catch (error) {
    console.log("Error" + error);
  }

  navigate("/categories/list");
};

//Get Categories
export const getCategories = () => async (dispatch) => {
  const service = new CategoryService();

  try {
    console.log("get categories");

    const response = await service.getCategories();

    console.log(response);

    if (response.status === 200) {
      dispatch({
        type: CATEGORIES_SET,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const clearCategoryState = () => (dispatch) => {
  dispatch({ type: CATEGORY_STATE_CLEAR });
};
