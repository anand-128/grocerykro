import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/grocerykaro.png";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

const Navbar = ({ item, price }) => {
  let redirect = useNavigate();
  return (
    <div className="w-full h-20 bg-[#EBB3A7] flex border-b border-black/20 sticky top-0 z-50">
      <div className="w-[35%] h-full flex">
        <div
          onClick={() => {
            redirect("/");
          }}
          className="w-[50%] h-full object-cover cursor-pointer"
        >
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[50%] h-full pl-6 border-l border-black/20">
          <h1 className="font-bold text-lg pt-2">Delivery in 9 minutes </h1>
          <p>Shastri Nagar,Jabalpur,India</p>
        </div>
      </div>
      <div className="w-[65%] h-full  flex items-center">
        <div
          onClick={() => {
            redirect("/search");
          }}
          className="w-[70%] h-full  flex items-center justify-center p-2.5"
        >
          <div className="w-full h-14 flex items-center justify-center  rounded-lg bg-[#F8F8F8] border">
            <FiSearch className="text-3xl pl-2" />
            <input
              type="search"
              placeholder="Search your product..."
              id=""
              className="w-full h-12 p-2 text-lg outline-none "
            />
          </div>
        </div>
        <div className="w-[30%] h-full flex items-center justify-evenly">
          <button onClick={()=>{redirect("/login")}} className="pt-2 pb-2 pl-4 pr-4  rounded-lg cursor-pointer flex items-center justify-center gap-1">
            <FaUser/>
            Login
          </button>
          <div
            onClick={() => {
              redirect("/cart");
            }}
            className={`pt-2 pb-2 pl-4 pr-4  flex items-center justify-center gap-1.5 rounded-lg text-white ${price===0 ? "bg-neutral-700" : "bg-[#195E41]"} cursor-pointer`}
          >
            <MdOutlineAddShoppingCart className="text-xl" />
            <div className="flex flex-col justify-center items-center text-xs">
              <div className="flex gap-2 items-center justify-center">My Cart <span className="bg-white rounded-full px-1.5 text-[#195E41]">{item}</span> </div>
                <div className="text-sm"> {price > 0 ? price+"/-" : <></>} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
