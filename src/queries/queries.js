import axios from "axios";

export const fetchCategoryNames = async () => {
  const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
  //fetches and returns list of categories from the url
  return response;
};

export const fetchCategoryItems = async (catName) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`);
  //fetches and returns list of foods/meals from the url using categoryName param
  return response;
};

export const fetchMeal = async (mealIdNumber) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIdNumber}`);
  //fetches and returns a meal.food from the url using mealID param
  return response;
}
