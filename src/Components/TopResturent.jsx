import React, { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';


const TopResturent = () => {
    const [resturent, setResturent] = useState([]);
    let [scroll, setScroll] = useState(0);

    useEffect(() => {

        let fetchResturentData = async () => {
            let response = await fetch("http://localhost:3000/api/all-products");
            let json = await response.json();

            let resturentD = json.filter(item => item.type === "restaurant");
            setResturent(resturentD);
        }

        fetchResturentData();

    }, [])

    const prevMenu = () => {
        setScroll((prev) => Math.max(prev - 2, 0))
    };

    const nextMenu = () => {
        setScroll((prev) => Math.min(prev + 2, resturent.length - 3.8))
    };


    return (
        <>
            <div className=''>

                <div className=' flex justify-between items-center  mb-8'>
                    <h1 className='text-[25px] font-semibold '>Top Dishes : </h1>

                    <div className="flex items-center  mx-13 gap-10">
                        <button onClick={prevMenu} >
                            <FaAngleLeft
                                size={30}
                                className="flex items-center bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-500  transition-colors"
                            />
                        </button>
                        <button onClick={nextMenu} >
                            <FaAngleRight
                                size={30}
                                className="flex items-center bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-500  transition-colors"
                            />
                        </button>
                    </div>

                </div>

                <div className="overflow-hidden h-[390px] ">
                    <div
                        className=" flex h-90 gap-8 transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${scroll * 18}%)`,
                        }}
                    >
                        {resturent.map((category, index) => (
                            <Link to={`/resturentMenuDetails/${category.id}`} key={index}>
                                <div
                                    className=" flex-shrink-0 w-64 h-auto flex flex-col items-center text-center group shadow-xl rounded-2xl cursor-pointer"
                                >

                                    <div className="">

                                        <div className=' relative w-full h-56 overflow-hidden rounded-xl'>
                                            <img
                                                src={`http://localhost:3000${category.img}`}
                                                className="w-full h-full object-cover rounded-2xl 
                                                transition-transform duration-300 ease-in-out 
                                                group-hover:scale-105 shadow-md"
                                            />
                                            <div className="absolute inset-0 rudra rounded-2xl"></div>
                                            <h1 className="absolute bottom-5 left-3 text-white text-[16px] font-bold 
                                                    bg-transeparent px-2 py-1 rounded">
                                                {category.offer}
                                            </h1>
                                        </div>

                                    </div>


                                    <div className='flex items-center'>
                                        <div className='flex-flex-start'>
                                            <p className="mt-3 mb-3 text-lg font-semibold capitalize text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                                                {category.name}
                                            </p>

                                            <p className="flex text-sm text-gray-600">
                                                <IoMdStar className='inline ' size={19} style={{ color: "#d6d625ff" }} /> {category.rating} | ⏱ {category.minTime}–{category.maxTime} min <br />
                                            </p> <br />

                                            <h3 className="mt-2 text-gray-700 font-medium" >{category.place}</h3>
                                        </div>
                                    </div>


                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopResturent
