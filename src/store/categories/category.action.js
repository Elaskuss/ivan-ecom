import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const fetchCategoriesStart = () => {
   return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}

export const fetchCategoriesSuccess = (categoriesArray) => {
   return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
}

export const fetchCategoriesFail = (error) => {
   return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error);
}

