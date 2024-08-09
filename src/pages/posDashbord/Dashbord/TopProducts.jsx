import React, { useState } from 'react'
// import { Rating } from "@material-tailwind/react";
import product from '../../../images/Products/products.avif'
import Rating from '../../../components/Rating';


const TopProducts = () => {

  const Products = [

    {
      id: 1,
      name: "Product Name",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      image: product
    },
    {
      id: 2,
      name: "Product Name",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      image: product
    },
    {
      id: 3,
      name: "Product Name",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      rating: 5,
      image: product
    },
    {
      id: 4,
      name: "Product Name",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      rating: 5,
      image: product
    },
    {
      id: 5,
      name: "Product Name",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      rating: 5,
      image: product
    },
    {
      id: 6,
      name: "Product Name",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      rating: 5,
      image: product
    }
  ]

  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };



  return (
    <>


      <section>
        <div className="p-5 ">

          <div className=" border shadow-md p-2 bg-white rounded-md antialiased ">

            <div className="flex items-center justify-between my-1 p-1  ">


              <div className="">
                <div className=" p-2 text-xl  font-semibold  ">
                  Top Products
                </div>
              </div>



            </div>

            <hr />
            {/* ---------------------------------------------------- */}

            <div className="flex  justify-between  my-1 p-1  ">


            </div>

            <div className=" grid md:grid-cols-2  sm:grid-cols-1  md:gap-5 xl:grid-cols-4  mx-auto  my-1 p-1">

              {
                Products.map((items, index) => (

                  <div key={index} className=" lg:w-64 lg:h-96  mx-auto relative p-2 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                      <img
                        src={items.image}
                        alt="Product"
                        className="lg:h-64 lg:w-64 object-fit object-cover rounded-xl"
                      />
                      <div className="px-4 py-3 lg:w-64">
                        <p className="text-lg font-bold text-black truncate block capitalize">
                          {items.name}
                        </p>

                        <span className=" justify-between   flex  items-center h-2 py-3 text-black ">
                          
                          <Rating  totalStars={5}
        initialRating={rating}
        onRatingChange={handleRatingChange}/>
        <span>{rating}</span>
                        </span>

                        <div className="flex items-center">
                          <p className="text-lg font-semibold text-black cursor-auto my-3">
                            ${items.productPrice}
                          </p>
                          <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">${items.productDiscount}</p>
                          </del>
                          <div className="ml-auto">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              fill="currentColor"
                              className="bi bi-bag-plus"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                              />
                              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className=" absolute top-5 left-5  bg-black text-white rounded-[5rem] p-1 text-center w-[7rem] text-[.9rem] font-medium"> {items.flashSale} </div>
                    </a>
                  </div>


                ))

              }




              {/* ----------------Product End-------------------- */}


            </div>

          </div>

        </div>
      </section>


    </>
  )
}

export default TopProducts
