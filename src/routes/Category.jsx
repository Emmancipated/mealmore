import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchCategoryItems } from "../queries/queries";
import Footer from "../components/Footer";


//query for category name with list of meals under it
const categoryNameItems = (id) => ({
  queryKey: ["categories", "category", id],
  queryFn: async () => fetchCategoryItems(id)
});


export const loader = 
  (queryClient) => //receives queryClent as argument
  async ({params}) => {
    const query = categoryNameItems(params.categoryName) //calls the query using param as the argument

    return (
      queryClient.getQueryData(query.queryKey) ?? //returns data from cache if yes, or fetches the data
      (await queryClient.fetchQuery(query))
    )
  }

export const Category = () => {
  const params = useParams();
  const { data: categoryNameObject } = useQuery(categoryNameItems(params.categoryName));
  const { data: categoryNameWrapper } = categoryNameObject;
  const { meals } = categoryNameWrapper;
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = meals.slice(pageSize * (currentPage - 1), pageSize * currentPage);//start from the first index and slice 6 items
  const maximumPage = (Math.ceil(meals.length / pageSize));

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  }
  
  return (
    <section id="Category">
      <div className="category-container">
        <h1 className="category-header">{params.categoryName} category</h1>
          <div className="category-wrapper">
          {currentPageItems.map(meal => (
            <div className="category" key={meal.idMeal}>
                <Link to={meal.idMeal}>
                  <motion.img 
                    className="category-meal-image" 
                    src={meal.strMealThumb} alt="" 
                    // style={{ width: "100%" }}
                    // whileHover={{ objectFit: "none", objectPosition: "60%" }}
                    whileHover={{ scale: [1.1,] }}
                    transition={{ duration: 0.9, type: "spring", bounce: .75}}
                    initial={{scale: 1}}
                  />
                  <h2 key={meal.strMeal}>{meal.strMeal}</h2>
                </Link>
                {/* <button onClick={() => toggleExpanded(category.idCategory)}>{expandedPosts[category.idCategory] ? "Read less" : "Read more"}</button> */}
            </div>
            )
          )}
        </div>

        <button 
          className={currentPage === 1 ? "hide" : ""} 
          onClick={handlePrev}
        >
          Prev
        </button>

        <button 
        className={maximumPage === currentPage ? "hide" : ""} 
        onClick={handleNext}
        >
          Next
        </button>
      </div>
      <Footer />
    </section>

  )
}
