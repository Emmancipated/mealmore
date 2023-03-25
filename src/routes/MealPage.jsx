import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMeal } from "../queries/queries";
import Footer from "../components/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddMeal } from "../redux/actions";


//query for meal using the id of meal as param
const mealDetailQuery = (id) => ({
  queryKey: ["category", "meal", id],
  queryFn: async () => fetchMeal(id),
})

export const loader = 
  (queryClient) => //receives queryClent as argument and then calls it as a function
  async ({ params }) => {
    const query = mealDetailQuery(params.mealID); //calls the query using mealID param as the argument

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    )
  }

export const MealPage = () => {
  const params = useParams();
  const { data: mealsObject } = useQuery(mealDetailQuery(params.mealID));
  const { data: mealsWrapper } = mealsObject;
  const { meals } = mealsWrapper;
  const [viewedMeal] = meals;
  const {strMeal} = viewedMeal;
  const {strMealThumb} = viewedMeal;
  const { strCategory } = viewedMeal;
  const [savedMeal] = useState({id: params.mealID, name: strMeal, quantity: 1, image: strMealThumb, category: strCategory});
  const [saveStatus, setSaveStatus] = useState("Save for later");
  const dispatch = useDispatch();

  const saveMeal = () => {
    dispatch(AddMeal(savedMeal));
    setSaveStatus("Saved");
  }
  
  return (
    <section id="MealPage">
      <div className="mealpage-container">
        {meals.map(meal => {
          let videoLink = meal.strYoutube.replace("watch?v=", "embed/");

          return (
            <div key={meal.idMeal} className="mealpage-wrapper">
               <p className="meal-history">{meal.strCategory}/{meal.strMeal}</p>
               <h1>{meal.strMeal}</h1>
               <img src={meal.strMealThumb} alt="meal" />

               <div className="meal-description-container">
                <h2>Ingredients</h2>
                <div className="meal-ingredients">
                  <p><span>{meal.strMeasure1}</span> {meal.strIngredient1}</p>
                  <p><span>{meal.strMeasure2}</span> {meal.strIngredient2}</p> 
                  <p><span>{meal.strMeasure3}</span> {meal.strIngredient3}</p> 
                  <p><span>{meal.strMeasure4}</span> {meal.strIngredient4}</p> 
                  <p><span>{meal.strMeasure5}</span> {meal.strIngredient5}</p> 
                  <p><span>{meal.strMeasure6}</span> {meal.strIngredient6}</p> 
                  <p><span>{meal.strMeasure7}</span> {meal.strIngredient7}</p> 
                  <p><span>{meal.strMeasure8}</span> {meal.strIngredient8}</p> 
                  <p><span>{meal.strMeasure9}</span> {meal.strIngredient9}</p> 
                  <p><span>{meal.strMeasure10}</span> {meal.strIngredient10}</p>
                  <p><span>{meal.strMeasure11}</span> {meal.strIngredien11}</p>
                  <p><span>{meal.strMeasure12}</span> {meal.strIngredient12}</p> 
                  <p><span>{meal.strMeasure13}</span> {meal.strIngredient13}</p> 
                  <p><span>{meal.strMeasure14}</span> {meal.strIngredient14}</p> 
                  <p><span>{meal.strMeasure15}</span> {meal.strIngredient15}</p> 
                  <p><span>{meal.strMeasure16}</span> {meal.strIngredient16}</p> 
                  <p><span>{meal.strMeasure17}</span> {meal.strIngredient17}</p> 
                  <p><span>{meal.strMeasure18}</span> {meal.strIngredient18}</p> 
                  <p><span>{meal.strMeasure19}</span> {meal.strIngredient19}</p> 
                  <p><span>{meal.strMeasure20}</span> {meal.strIngredient20}</p>
                </div>
               </div>

               <div className="meal-instruction-container">
                  <h2>Meal Instructions</h2>
                  <p> {meal.strInstructions}</p>
               </div>
               <iframe src={videoLink} title="youTube" frameBorder="0"></iframe>
            </div>
          )
        })}
      </div>
      <div className="save-for-later">
        <button className={saveStatus === "Saved"? "disabled": ""} onClick={saveMeal}>{saveStatus}</button>
      </div>
      <Footer/>
    </section>
  )
}