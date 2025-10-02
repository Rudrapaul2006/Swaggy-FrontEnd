import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

import { IoIosArrowDown } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { RiBarChartBoxFill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";

import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    let [open, setOpen] = useState(false);
    let [openSearch, setOpenSearch] = useState(false);
    let [signIn, setSignIn] = useState(false);

    // const navigate = useNavigate()


            let navItem = [
                {
                    name: "Swiggy Corporate",
                    icon: <RiBarChartBoxFill />
                },
                {
                    name: "Offer's",
                    icon: <BiSolidOffer />,
                    sup: "NEW"
                },
                {
                    name: "Help",
                    icon: <FaHandsHelping />
                },
                // {   
                //     name: "Sign In",
                //     icon: <FaSignInAlt />
                // },
                {
                    name: "Cart",
                    icon: <IoCartSharp />
                }
            ]

return (
    <>


        {/* Toggle :  */}
        <div
            className={` fixed top-[80px] left-0 w-[350px] h-[88.5vh] bg-white shadow-lg
                transform transition-transform duration-400 ease-in-out z-50 border  border-black-100
                ${open ? "translate-x-0" : "-translate-x-full"}`}

        >
            <div className='w-full'>
                <button onClick={() => setOpen(false)} className='mt-1 ml-[313px] hover:text-[#ff5200] cursor-pointer'>
                    <GrFormClose className='text-red' size={35} />
                </button>
            </div>

            <div  >
                <button>
                    Other
                </button>
            </div>
        </div>

        {/* Sign In */}
        <div
            className={`fixed  pb-[90px] top-[80px] right-0 w-[300px] h-[88.5vh] bg-white shadow-lg
                            transform transition-transform duration-500 ease-in-out z-50 border  border-black-100
                        ${signIn ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="w-full">
                <button
                    onClick={() => setSignIn(false)}
                    className="mt-1 "
                >
                    <GrFormClose className="hover:text-[#ff5200] cursor-pointer text-red" size={35} />
                    sign in
                </button>
            </div>
        </div>


        {/* Nav */}
        <header className='fixed top-0 flex justify-between h-[80px] w-full shadow-xl bg-white z-50'>

            {/* Logo & Other */}
            <div className=' flex items-center w-[90%] h-[70%]  mt-3 my-auto mx-auto '>
               <Link to={"/"}> <img className='rounded-full h-[55px] cursor-pointer ' src="logo.png.webp" alt="" /></Link>

                <div onClick={() => setOpen(true)} className='flex items-center  hover:text-[#ff5200] transition-all duration-300'>
                    <div className=' ml-5 border-b-[2px] cursor-pointer font-medium '>
                        <div >Other</div>
                    </div>

                    <button >
                        <IoIosArrowDown className='inline ml-2 flex justify-center items-center text-[orange] ' size={20} />
                    </button>
                </div>

                {/* Search */}
                <div className="flex items-center ml-20 ">
                    <div
                        className={`flex items-center overflow-hidden border border-gray-300 rounded-2xl bg-white shadow-sm 
                                        transition-all duration-300 ease-in-out 
                                        ${openSearch ? "w-[18rem] px-4 py-2 opacity-100" : "w-0 px-0 py-0 opacity-0"}
                            `}
                    >
                        <div className=' flex  py-1 px-1 bg-red-200 hover:bg-[#ff5200]/40 transition-all duration-300 rounded-full'>
                            <button onClick={() => setOpenSearch(false)}><FaArrowLeft size={18} /></button>
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full ml-2  text-semibold bg-transparent outline-none text-gray-700 placeholder-gray-400 rounded-md px-2"
                        />
                    </div>

                    <div className="flex items-center justify-center ml-3">
                        <button
                            onClick={() => setOpenSearch(true)}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 
                                                    hover:bg-[#ff5200]/30 transition-all duration-300"
                        >
                            <CiSearch
                                className="text-gray-600  transition-colors duration-200"
                                size={22}
                            />
                        </button>
                    </div>
                </div>

                {/* Nav-items */}
                <div className='flex  gap-7 mx-auto cursor-pointer'>
                    {navItem.map((item, index) => (
                        <div className='flex items-center hover:text-[#ff5200]  transition-all duration-300' key={index}>
                            <div className='inline'>
                                {item.icon}
                            </div>

                            <div className='ml-2 hover:text-[#ff5200] font-semibold transition-all duration-300'>
                                {item.name} <sup className='text-[orange]'>{item.sup}</sup>
                            </div>

                        </div>
                    ))}

                    <div onClick={() => setSignIn(true)} className='flex items-center gap-2 font-semibold hover:text-[#ff5200] transition-all duration-300'>
                        <FaSignInAlt />
                        <button className='ml-1.8 flex items-center cursor-pointer '>Sign In</button>
                    </div>


                </div>

                {/* Login Button */}
                <button className="bg-orange-500 text-white font-semibold mx-3 px-4 py-2 rounded-xl shadow-md 
                                        hover:bg-[#ff5200] active:scale-82 transition-all duration-400 cursor-pointer">
                    Sign Up
                </button>


            </div>

        </header>





        <Outlet />
    </>
)
}

export default Header
