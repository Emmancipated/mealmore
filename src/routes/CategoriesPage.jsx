import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCategoryNames } from "../queries/queries";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

  //query for list of categories
  const categoryListQuery = (id) => ({
    queryKey: ["categories", "cat", id],
    queryFn: async () => fetchCategoryNames(id),
  })


export const loader = 
  (queryClient) => //receives queryClent as argument
  async ({params}) => {
    const query = categoryListQuery(params) //calls the query using param as the argument

    return (
      queryClient.getQueryData(query.queryKey) ?? //returns data from cache if yes, or fetches the data
      (await queryClient.fetchQuery(query))
    )
  }
 
 
export const CategoriesPage = () => {
  const params = useParams()
  const  { data: categoryObject }  = useQuery(categoryListQuery(params));
  const {data : categoriesWrapper} = categoryObject;
  const {categories} = categoriesWrapper;
  const [expandedPosts, setExpandedPosts] = useState({});

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      const truncated = text.slice(0, maxLength);
      const lastSpaceIndex = truncated.lastIndexOf(" ");
      return `${truncated.slice(0, lastSpaceIndex)}...`;
    } else {
      return text;
    }
  }

  const toggleExpanded = (postId) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return ( <>
    <section id="CategoriesPage">
      <div className="categoriespage-container">
        <h1 className="categories-header">Categories</h1>
          <div className="categoriespage-wrapper">
          {categories.map(category => {

            let maxLength = 150;
            let displayedText = truncateText(category.strCategoryDescription, maxLength);

            return (
              <div className="category" key={category.idCategory}>
                <Link to={category.strCategory}>
                  <h1 key={category.idCategory}>{category.strCategory}</h1>
                  <motion.img 
                  src={category.strCategoryThumb} alt=""
                  whileHover={{ scale: [1.1,] }}
                  transition={{ duration: 0.9, type: "spring", bounce: .75}}
                  initial={{scale: 1}}
                  />
                </Link>
                <p>
                  {expandedPosts[category.idCategory]
                    ? category.strCategoryDescription
                    : displayedText}
                </p>
                <button onClick={() => toggleExpanded(category.idCategory)}>{expandedPosts[category.idCategory] ? "Read less" : "Read more"}</button>
              </div>
            )
          }
          )}
        </div>
      </div>
    </section>
    
    <Footer />
  </>
  );
}

// export default CategoriesPage;

