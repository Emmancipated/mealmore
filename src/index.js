import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter, 
  Route,
  RouterProvider
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./routes/App.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import HomePage from "./routes/HomePage.jsx";
import {CategoriesPage, loader as categoryList } from "./routes/CategoriesPage.jsx";
import { Category, loader as categoryLoader,} from "./routes/Category.jsx";
import { MealPage, loader as mealLoader } from "./routes/MealPage.jsx";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { SavedMeals } from "./routes/SavedMeal.jsx";


  const queryClient = new QueryClient();
  let persistor = persistStore(store);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<App />}
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route 
            path="categories"
            element={<CategoriesPage /> }
            loader={categoryList(queryClient)} //uses the queryClient as argument and passed to the loader in CategoriesPage component
          />
          <Route 
            path="categories/:categoryName"
            element={ <Category /> }
            loader={categoryLoader(queryClient)}
          />

          <Route 
            path="categories/:categoryName/:mealID"
            element={ <MealPage /> }
            loader={ mealLoader(queryClient) }
          />

          <Route 
            path="savedmeals"
            element={ <SavedMeals /> }
          />
        </Route>
      </Route>
    )
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
