import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { FaFileExport } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Table from '../components/Table';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlinePublishedWithChanges } from "react-icons/md";



const Products = () => {


  const [open, Setopen] = useState(false)

  const toggleFilter = () => {
    Setopen(!open)
  }


  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3'];



  const handleBlur = () => {
    // Delay hiding the dropdown to allow clicking on an option
    setTimeout(() => setIsDropdownOpen(false), 200);
  };

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleClick = (option) => {
    setSearchTerm(option);
    setIsDropdownOpen(false);
  };




  return (
    <>

      <section>
        <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

          <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
            <div className="text-xl md:py-5 py-3">Dashboard /  <span className='text-gray font-semibold'>Products</span></div>
          </div>

          {/* ----------Start---------- */}


          <div className=" ">

            <div className=" mt-[2rem]  md:mt-0  shadow-md md:p-2 bg-white rounded-md antialiased ">

              <div className="flex items-center justify-between  p-1  ">

                <div className="md:flex  w-full justify-between ">

                  <div className="p-2 text-xl font-semibold">Products</div>

                  <div className="md:flex md:space-y-0 space-y-2 mx-auto md:mx-0  gap-4 ">

                    <button type="button" className='px-3 flex md:w-fit w-full justify-around  gap-2 items-center md:py-1.5 py-1  font-larze text-success border border-success  focus:ring-4 focus:outline-none  rounded-md '>
                      <select className="">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="1000">1000</option>
                      </select>
                    </button>


                    <div onClick={toggleFilter} className="px-3 flex justify-around  gap-2 items-center md:py-1.5 py-1  font-larze text-success border border-success  focus:ring-4 focus:outline-none  rounded-md ">
                      <MdFilterListAlt className=' ' />
                      <button type="button" >
                        Filter
                      </button>
                      <FaAngleDown className=' ' />
                    </div>

                    <div className="px-3 flex justify-around  gap-2 items-center md:py-1.5 py-1  font-larze text-success border border-success  focus:ring-4 focus:outline-none  rounded-md ">
                      <FaFileExport className=' ' />
                      <button type="button" >
                        Export
                      </button>
                      <FaAngleDown className=' ' />
                    </div>

                    <Link to="/admin/products/addproducts" className="px-3 flex justify-around bg-success text-white  gap-2 items-center md:py-1.5 py-1 font-larze  border border-success  focus:ring-4 focus:outline-none  rounded-md ">
                      <CiCirclePlus className='text-white ' />
                      <button type="button" >
                        Add Product
                      </button>
                    </Link>

                    <Link to="/admin/products/productsCategory" className="px-3 flex justify-around bg-success text-white  gap-2 items-center md:py-1.5 py-1 font-larze  border border-success  focus:ring-4 focus:outline-none  rounded-md ">
                      <CiCirclePlus className='text-white ' />
                      <button type="button" >
                        Add Category
                      </button>
                    </Link>



                  </div>

                </div>




              </div>

              <hr className='my-2' />
              {/* ---------------------------------------------------- */}


              {/* -----------From-------------------- */}

              {open &&
                <form action="" method="post">
                  <div className="flex  justify-between  my-1 p-1  ">

                    <div className="w-full">

                      <div className="">

                        {/* ---------------Start---------------------- */}

                        <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">

                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Name<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                              ></input>
                            </div>
                          </div>


                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              SKU<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">

                              <div className=' flex justify-around  w-full  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 '>



                                <div className="relative  mx-auto  flex justify-around w-full   ">
                                  <input
                                    type="text"
                                    value={searchTerm}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    placeholder=""
                                    className="w-full p-2 "
                                  />

                                </div>

                                <MdOutlinePublishedWithChanges className="w-5 h-5 m-2 items-center text-gray-500 dark:text-gray-400" />



                              </div>

                            </div>
                          </div>



                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Buying Price<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                className="flex h-10 rounded-md w-full border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                              ></input>
                            </div>
                          </div>


                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Selling Price<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                              ></input>
                            </div>
                          </div>



                        </div>

                        {/* ------------------------------------- */}

                        <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">

                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Category<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                <option selected className='text-gray-400 '>--</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>

                            </div>
                          </div>


                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Brand<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                <option selected className='text-gray-400 '>--</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>


                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Barcode<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                <option selected className='text-gray-400 '>--</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>


                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Tax<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                <option selected className='text-gray-400 '>--</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>



                        </div>

                        {/* ----------------------------------------- */}

                        <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">

                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Unit<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                <option selected className='text-gray-400 '>--</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Status<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                <option selected className='text-gray-400 '>--</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>


                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Purchasable<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                <option selected className='text-gray-400 '>--</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>


                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Show Stock Out<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                <option selected className='text-gray-400 '>--</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>



                        </div>

                        {/* ---------------------------------------------- */}


                        <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">

                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray">
                              {' '}
                              Refundable<span className='text-success px-1'>*</span>
                            </label>
                            <div className="mt-2">
                              <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                <option selected className='text-gray-400 '>--</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>


                        </div>

                        {/* ------------------------End--------------------------------- */}



                        {/* ------------Button----------- */}
                        <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                          <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                            <FaCircleCheck className=' ' />
                            <button type="button" >
                              Save
                            </button>
                          </div>

                          <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                            X
                            <button type="button" >
                              Clear
                            </button>
                          </div>


                        </div>
                        {/* -----------Button End--------------- */}
                      </div>


                    </div>
                  </div>
                </form>
              }

              {/* -----------From End-------------------- */}

              {/* ----------Table---------------- */}
              <div className="flex  justify-between  my-1 p-1  ">

                <div className="w-full">

                  <Table />

                </div>
              </div>
              {/* ----------Table End---------------- */}



            </div>



          </div>

          {/* ----------End-------------------- */}
        </div>


      </section>


    </>
  )
}

export default Products
