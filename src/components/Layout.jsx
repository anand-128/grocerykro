import React from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";

const Layout = ({ cate, item, setItem, price, setPrice }) => {
  let redirect = useNavigate();

  return (
    <div className="w-full mt-16 px-6">
      {/* Title Row */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-semibold text-2xl">{cate.title}</h1>
        <div className="flex gap-4 items-center">
          <div className="flex gap-3 text-2xl">
            <LuCircleChevronLeft />
            <LuCircleChevronRight />
          </div>
          <h5
          onClick={() => {
            localStorage.setItem("cate_id", JSON.stringify(cate.id));
            redirect("/categories");
          }}
          className="text-green-600 text-lg cursor-pointer"
        >
          see all
        </h5>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full no-scroll overflow-x-scroll">
        <div className="flex gap-6 w-[250%]"> 
          {cate.products.map((val, index) => (
            <Cards
              key={index}
              data={val}
              item={item}
              setItem={setItem}
              price={price}
              setPrice={setPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
