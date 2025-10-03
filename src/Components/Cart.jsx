import React, { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import { FaDatabase } from 'react-icons/fa6';
import { IoMdStar } from "react-icons/io";

const Cart = () => {
    const [resturent, setResturent] = useState([]);
    // let [scroll, setScroll] = useState(0);

    useEffect(() => {

        let fetchResturentData = async () => {
            let res = await fetch("http://localhost:3000/api/menus");
            let json = await res.json();

            setResturent(json);
        }

        fetchResturentData();

    }, [])


    return (

        <>

                <div className='flex flex-col w-full'>

                    <div className="w-full mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {resturent.map((data, index) => (
                                <div 

                                    key={index}
                                    className="  bg-white rounded-2xl shadow-md hover:scale-97 transition-transform duration-300 ease-in-out
                                                 cursor-pointer overflow-hidden border border-gray-200"
                                >
                                    <div className="relative w-full h-56 group overflow-hidden rounded-t-2xl ">
                                        <img
                                            src={`http://localhost:3000${data.img}`}
                                            alt={data.name}
                                            className="w-full h-full object-cover  "
                                        />

                                        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-t-2xl"></div> */}
                                        
                                        <h1 className="absolute bottom-3 left-3 text-white text-sm font-bold 
                                                        bg-black/50 px-2 py-1 rounded">
                                            ₹ {data.price}
                                        </h1>
                                    </div>

                                    <div className="px-4 py-3 flex flex-col">
                                        <p className="text-lg font-semibold text-gray-800 capitalize ">
                                        {data.name}
                                        </p>

                                        <p className="flex text-sm text-black/50 mt-1 ">
                                            <IoMdStar className="flex items-center text-yellow-400 mr-1 " size={18} />
                                            {data.rating} | ⏱ {data.minTime}–{data.maxTime} min
                                        </p>

                                        <h3 className="font-medium mt-2 text-black">{data.place}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                </div>

        </>
    )
}

export default Cart
