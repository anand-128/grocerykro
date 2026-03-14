import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import MiniBoxes from "./components/MiniBoxes";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { useOutletContext } from "react-router-dom";

const App = () => {
  const {item, setItem, price,setPrice} = useOutletContext()
  const [data, setData] = useState([ ]);

  let fetchdata = async ()=>{
    let respons = await fetch("http://localhost:3000/products")
    let result = await respons.json()
    setData(result)
  }
  fetchdata()

  return (
    <div className="w-full min-h-screen">

      <section className="px-24 ">
        {/* Banner  */}
        <div className="w-full h-[40vh] mx-5 mt-5 mb-5 rounded-2xl object-cover overflow-hidden">
          <img
            src="https://i.pinimg.com/1200x/79/25/e6/7925e6f7a1ade77c60e9b95173683859.jpg"
            alt=""
            className="h-full w-full object-cover "
          />
        </div>

        {/* three-box  */}

        <div className="w-full h-48 overflow-hidden rounded-2xl pl-6 flex gap-10">
          <Box img="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" />
          <Box img="https://i.pinimg.com/1200x/e3/ee/0a/e3ee0a1d3798685c434b3aebd2e4c2b6.jpg" />
          <Box img="https://i.pinimg.com/1200x/5e/f3/ea/5ef3ea7bc3966f0bfac346df7c3193aa.jpg" />
        </div>

        {/* Mini-boxes  */}

        <div className="w-full h-80 ml-8 mt-8 flex gap-6 flex-wrap overflow-hidden ">
          {[
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2025-11/Slice-7-1_0.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-19.png",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png",
          ].map((val) => {
            return <MiniBoxes img={val} />;
          })}
        </div>

        {/* Cards  */}
        <div className="w-full flex flex-col">
          {data.map((val) => {
            return <Layout cate={val} item={item} setItem={setItem} price={price} setPrice={setPrice} />;
          })}
        </div>
      </section>

      {/* Footer  */}
    </div>
  );
};

export default App;
