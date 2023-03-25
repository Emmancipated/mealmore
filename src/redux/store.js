import storage from "redux-persist/lib/storage";
import { 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
 } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {MealReducer} from "./reducers";

//Configure persist
const persistConfig = {
    key: 'meals',
    storage: storage,
};

//Reducer combination
const reducers = combineReducers({
    meals: MealReducer, 
});

//Creating persisting Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export default store;