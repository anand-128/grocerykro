import React, { useState } from "react";
import Cards from "../components/Cards";
import { FiArrowLeftCircle } from "react-icons/fi";
import { redirect, useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  let cateId = JSON.parse(localStorage.getItem("cate_id"));
  // console.log(cateId)

  const [category, setCategory] = useState({});

  let fetchData = async () => {
    let responce = await fetch("http://localhost:3000/products/" + cateId);
    let result = await responce.json();
    // console.log(result)
    setCategory(result);
  };
  fetchData();

  let redirect = useNavigate()

  return (
    <div className="px-20 py-8" >
      <FiArrowLeftCircle className="text-3xl" onClick={()=>(redirect("/"))}/>
      <div className="font-semibold text-2xl mt-6 ">{category.title}</div>
      <div className="grid grid-cols-6 gap-5 mt-8 justify-start">
        {category?.products ? (
          category.products.map((val, index) => {
            return <Cards key={index} data={val} />;
          })
        ) : (
          <> </>
        )}
      </div>
      <div className="text-center text-2xl mt-7 text-neutral-400">No more result...</div>
    </div>
  );
};

export default CategoriesPage;
