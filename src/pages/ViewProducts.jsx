"use client";
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import pro from '../images/Navbar/profile.webp'
import { FaCircleCheck } from "react-icons/fa6";

const ViewProducts = () => {



    return (
        <>

            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /
                            <span className='text-gray font-semibold'>Products /</span>
                            <span className='text-gray font-semibold'>View Products</span>
                        </div>
                    </div>

                    {/* ----------Start View---------*/}

                        <div className=" ">

                            <div className=" mt-[2rem]  md:mt-0 border shadow-md md:p-2 bg-white rounded-md antialiased ">

                                <div className="flex items-center justify-between  p-1  ">

                                    <div className="md:flex  w-full justify-between ">

                                        <div className="p-2 text-xl font-semibold">Products</div>


                                    </div>




                                </div>

                                <hr className='my-2' />
                                {/* ---------------------------------------------------- */}


                                {/* ------------------------------- */}
                                <div className="p-3 grid md:grid-cols-2 sm:grid-cols-1 md:gap-5 xl:grid-cols-2 w-fit ms-auto space-y-3 md:space-y-0  ">

<div className="px-3  flex justify-around w-fit gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
    <FaCircleCheck  className=' ' />
    <button type="submit" >
        Save
    </button>
</div>

<div className="px-3  flex justify-around w-fit gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
    <FaCircleCheck  className=' ' />
    <button type="submit" >
        Save
    </button>
</div>

</div>



 


                                <div className="flex  justify-between  my-1 p-1  ">

                                    <div className="mt-[2rem]  text-justify grid md:grid-cols-2 md:gap-2 space-y-3 xl:grid-cols-3   w-full  gird-rows-auto gap-2 md:mt-0 border shadow-md md:p-5 bg-white rounded-md antialiased">


<div className=''><span>Image: </span>
<div className="mt-1"><img src={pro} alt="image" srcset="" className='border w-24 h-24 p-2 rounded'/></div>
</div>
<div><span>Name: </span>Name</div>
<div><span>SKU: </span>SKU</div>
<div><span>Buying Price:</span>Buying Price</div>
<div><span>Selling Price: </span>Selling Price</div>
<div><span>Category: </span>Category</div>
<div><span>Brand: </span>Brand</div>
<div><span>Barcode: </span>Barcode</div>
<div><span>Tax: </span>Tax</div>
<div><span>Unit: </span>Unit</div>
<div><span>Status: </span>Status</div>
<div><span>Can Purchasable: </span>Can Purchasable</div>
<div><span>Show Stock Out: </span>Show Stock Out</div>
<div><span>Refundable: </span>Refundable</div>
<div><span>Description: </span>Description</div>
</div>





                                </div>



                                {/* -----------From End-------------------- */}


                            </div>

                        </div>

                    {/* ----------End View---------- */}

                </div>

            </section>

        </>
    )
}

export default ViewProducts
