import { createReducer } from "@reduxjs/toolkit";
import { 
    AddMeal,
    RemoveMeal,
 } from "../actions";

//The initial state of the app
const initialState = {
    meals: {
        items: [],
    }
}

//The product reducer
export const MealReducer = createReducer(initialState.meals.items, (builder) => {
    builder
    .addCase(AddMeal, (state, action) => {
        const items = state.find((meal) => meal.id === action.payload.id); //check state if we have any as same as payload id
        if (items) {
            items.quantity += action.payload.quantity; //if found, increase its quantity
        } else {
            state.push(action.payload); //if not, add the the item to state
        }
    })
    .addCase(RemoveMeal, (state, action) => {
    //returns the items in state except the clicked item
    return state.filter(product => product.id !== action.payload);
    })
});
