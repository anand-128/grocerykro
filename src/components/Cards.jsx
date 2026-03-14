import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Cards = ({data,item, setItem, price,setPrice}) => {

  let redirect = useNavigate()

  const [count, setCount] = useState(0)

  let add = ()=>{
    setItem(item+1)
    setCount(count+1)
    setPrice(Number(price)+ Number(data.amount))
  }
  let minus = ()=>{
    setItem(item-1)
    setCount(count-1)
    setPrice(Number(price)- Number(data.amount))
  }

  return (
    <div className="w-52 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md overflow-hidden cursor-pointer flex flex-col justify-evenly">
      {/* Image */}
      <div onClick={()=>{redirect("/product")}} className="h-40 flex items-center justify-center overflow-hidden ">
        <img src={data.img} alt="" className="h-full scale-125 object-contain p-4 hover:scale-[1.35] transition-all" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Time */}
        <div className=" flex items-center text-xs bg-gray-100 w-fit px-2 py-1 rounded-md text-gray-800">
          <IoMdStopwatch />
          <p>{data.time}</p>
        </div>

        {/* Title */}
        <h5 className="text-sm font-semibold leading-snug">
          {data.productName.slice(0,35)}...
        </h5>

        {/* Quantity */}
        <p className="text-gray-500 text-sm">{data.quantity}</p>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-2">
          <h6 className="font-bold text-base">₹{data.amount}</h6>

          {count > 0 ? <button className="border flex items-center gap-2 border-green-500 px-1 py-1 text-green-600 rounded-lg text-sm hover:bg-green-500 hover:text-white transition">
            <FaMinus onClick={minus} />
            {count}
            <FaPlus onClick={add}/>
          </button> :

           <button onClick={add} className="border border-green-500 px-4 py-1 text-green-600 rounded-lg text-sm hover:bg-green-500 hover:text-white transition">
            ADD
          </button>}
          
        </div>
      </div>
    </div>
  );
};

export default Cards;
