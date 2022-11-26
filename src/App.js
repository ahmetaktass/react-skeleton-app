import React, { useEffect, useState } from 'react'

import SkeletonProducts from "./skeletons/SkeletonProducts"

import './index.css'

function App() {
  const [products, setproducts] = useState(null)

  // useEffect(()=>{
  //   setTimeout(async() => {
  //     const res = await fetch('https://fakestoreapi.com/products');
  //     const data = await res.json();
  //     setproducts(data)
  //   }, 5000);
  // },[])

  useEffect(() => {
    setTimeout(()=>{
      fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setproducts(data))
    },5000)
  }, [])
  console.log(products)
  return (
    <div className="container mx-auto  flex  items-center flex-col ">
      <h1 className=" text-3xl  text-center my-5">
        React Skeleton
      </h1>
      {/* <input
        type="text"
        placeholder="Search item"
        className=" w-1/2  h-7 rounded-full border-2 border-gray-300 outline-none p-5 my-5 "
      ></input> */}
    
      <div className=" w-full h-full flex flex-wrap gap-3 justify-around  ">
     
       { products && products.map(
        product => (
          <div
          key={product.id}
          className=" flex flex-col items-center justify-between  w-80   bg-white border border-gray-300 rounded-md my-5 p-5"
        >
          <img
            src={product.image}
            alt=""
            className=" w-40  flex items-center"
          />
          <h1 className="font-bold text-justify text-lg ">
            {product.title}
          </h1>
          <h2 className="font-light text-right text-sm ">
            {product.category}
          </h2>
   
          <span className="text-right text-red-500">{product.price} $ </span>
        </div>
        )
       )}
        { ! products && [1,2,3,4,5,6,7,8].map((n)=> <SkeletonProducts key={n} /> ) }
        {/* {products.map((products) => (
          <div
            key={products.id}
            className=" flex flex-col items-center justify-between  w-80   bg-white border border-gray-300 rounded-md my-5 p-5"
          >
            <img
              src={products.image}
              alt=""
              className=" w-40  flex items-center"
            />
            <h1 className="font-bold text-justify text-lg ">
              {products.title}
            </h1>
            <h2 className="font-light text-right text-sm ">
              {products.category}
            </h2>
         
            <span className="text-right text-red-500">{products.price} $ </span>
          </div>
    
      
        ))} */}
        
      </div>
    </div>
  )
}

export default App
