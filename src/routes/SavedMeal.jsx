import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RemoveMeal } from "../redux/actions";
import { Trash } from "../components/Svgs";
import { NavLink } from "react-router-dom";

export const SavedMeals = () => {
  const dispatch = useDispatch();
  const savedMealsItems = useSelector(state => state.meals);

  const deleteMeal = (e) => {
    dispatch(RemoveMeal(e));
  }

  
  return (
    <section id="SavedMeal">
      <div className="savedmeal-container">
        {savedMealsItems.map(meal => (
          <div className="savedmeal" key={meal.id}>
            <h2>{meal.name}</h2>
             <div> <NavLink to={{ pathname: `/categories/${meal.category}/${meal.id}`}}> <img src={meal.image} alt="meal" /> </NavLink> </div> 
            <div onClick={() => deleteMeal(meal.id)}> <Trash /> </div>
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  )
}