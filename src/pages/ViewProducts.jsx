"use client";
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';



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

                    {/* ----------Start Form---------*/}
                    <form action="" method="post">

                        <div className=" ">

                            <div className=" mt-[2rem]  md:mt-0 border shadow-md md:p-2 bg-white rounded-md antialiased ">

                                <div className="flex items-center justify-between  p-1  ">

                                    <div className="md:flex  w-full justify-between ">

                                        <div className="p-2 text-xl font-semibold">Products</div>


                                    </div>




                                </div>

                                <hr className='my-2' />
                                {/* ---------------------------------------------------- */}


                                {/* -----------From-------------------- */}

                                <div className="flex  justify-between  my-1 p-1  ">

                                    <div className="mt-[2rem]  text-justify grid mx-auto w-full  gird-rows-auto gap-2 md:mt-0 border shadow-md md:p-2 bg-white rounded-md antialiased">

<div className=''><span>Name: </span>Name</div>
<hr /><div><span>SKU: </span>SKU</div>
<hr /><div><span>Buying Price:</span>Buying Price</div>
<hr /><div><span>Selling Price: </span>Selling Price</div>
<hr /><div><span>Category: </span>Category</div>
<hr /><div><span>Brand: </span>Brand</div>
<hr /><div><span>Barcode: </span>Barcode</div>
<hr /><div><span>Tax: </span>Tax</div>
<hr /><div><span>Unit: </span>Unit</div>
<hr /><div><span>Status: </span>Status</div>
<hr /><div><span>Can Purchasable: </span>Can Purchasable</div>
<hr /><div><span>Show Stock Out: </span>Show Stock Out</div>
<hr /><div><span>Refundable: </span>Refundable</div>
<hr /><div><span>Description: </span>Description</div>





                                    </div>
                                </div>



                                {/* -----------From End-------------------- */}


                            </div>

                        </div>
                    
                    </form>
                    {/* ----------End Form---------- */}

                </div>

            </section>

        </>
    )
}

export default ViewProducts
