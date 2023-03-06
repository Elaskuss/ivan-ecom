import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const setCategoriesMap = (categoriesArray) => {
   return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
