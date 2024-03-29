import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
   [selectCategoryReducer],
   (categoriesSlice) => {
      return categoriesSlice.categories;
   }
);

export const selectCategoriesIsLoading = createSelector(
   [selectCategoryReducer],
   (categoriesSlice) => {
      return categoriesSlice.loading;
   }
)

export const selectCategoriesMap = createSelector(
   [selectCategories],
   (categories) => {
      const categoryMap = categories.reduce((acc, category) => {
         const { title, items } = category;
         acc[title.toLowerCase()] = items;
         return acc;
      }, {});
      return categoryMap;
   }
);
