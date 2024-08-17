import React, { useState } from 'react'


const Settings = () => {

    const [activeTab, setActiveTab] = useState('Company');

    return (
        <>

            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /  <span className='text-gray font-semibold'>Settings / </span>
                            <span className='text-gray font-semibold'>{`${activeTab}`} </span>
                        </div>

                    </div>
                    {/* ----------Start---------- */}

                    <div className=" ">


                        <div className="md:flex bg-white p-5 shadow-md">
                            {/* Sidebar */}
                            <div className="md:w-1/4 p-4 w-full md:border-r">
                                <ul className="space-y-2">
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Company' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Company')}
                                    >
                                        Company
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded  p-2 ${activeTab === 'Mail' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Mail')}
                                    >
                                        Mail
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Location Setup' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Location Setup')}
                                    >
                                        Location Setup
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Currencies' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Currencies')}
                                    >
                                        Currencies
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Product Categories' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Product Categories')}
                                    >
                                        Product Categories
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Product Attributes' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Product Attributes')}
                                    >
                                        Product Attributes
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Product Brands' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Product Brands')}
                                    >
                                        Product Brands
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Suppliers' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Suppliers')}
                                    >
                                        Suppliers
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Units' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Units')}
                                    >
                                        Units
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Taxes' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Taxes')}
                                    >
                                        Taxes
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Role & Permissions' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Role & Permissions')}
                                    >
                                        Role & Permissions
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'License' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('License')}
                                    >
                                        License
                                    </li>
                                </ul>
                            </div>

                            {/* Content Area */}
                            <div className="w-3/4 p-4">
                                {activeTab === 'Company' && <div>Company Information goes here.</div>}
                                {activeTab === 'Mail' && <div>Mail settings and configurations.</div>}
                                {activeTab === 'Location Setup' && <div>Location setup and management.</div>}
                                {activeTab === 'Currencies' && <div>Manage different currencies here.</div>}
                                {activeTab === 'Product Categories' && <div>Product categories information.</div>}
                                {activeTab === 'Product Attributes' && <div>Set product attributes.</div>}
                                {activeTab === 'Product Brands' && <div>Product brands details.</div>}
                                {activeTab === 'Suppliers' && <div>Manage your suppliers.</div>}
                                {activeTab === 'Units' && <div>Unit configuration and settings.</div>}
                                {activeTab === 'Taxes' && <div>Tax setup and configuration.</div>}
                                {activeTab === 'Role & Permissions' && <div>Manage roles and permissions here.</div>}
                                {activeTab === 'License' && <div>License details and management.</div>}
                            </div>
                        </div>




                        {/* <div className=" mt-[2rem]  md:mt-0 text-justify md:p-2  rounded-md antialiased ">

                            <div className="grid md:grid-cols-3 gap-3  ">

                                <div className="col-span-1 w-full rounded bg-white p-2 justify-between ">

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis laudantium voluptatum, quod dignissimos non provident obcaecati error? Tenetur possimus odit ipsa laudantium eligendi ipsam, molestiae magnam eum praesentium odio necessitatibus!

                                </div>

                                <div className="col-span-2 w-full bg-white p-2 justify-between ">

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis laudantium voluptatum, quod dignissimos non provident obcaecati error? Tenetur possimus odit ipsa laudantium eligendi ipsam, molestiae magnam eum praesentium odio necessitatibus!

                                </div>




                            </div>

                        </div> */}

                    </div>
                    {/* ----------End---------- */}

                </div>
            </section>

        </>
    )
}

export default Settings
