import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const BestRestForEating = () => {
    let [showMore, setShowMore] = useState(false);

    let buttons = [
        { id: 1, name: "Best Resturent In Kolkata" },
        { id: 2, name: "Best Resturent In Bengalore" },
        { id: 3, name: "Best Resturent In Pune" },
        { id: 4, name: "Best Resturent In Hydrabad" },
        { id: 5, name: "Best Resturent In Chennai" },
        { id: 6, name: "Best Resturent In Chandigarh" },
        { id: 7, name: "Best Resturent In Delhi" },
        { id: 8, name: "Best Resturent In Jaipur" },
        { id: 9, name: "Best Resturent In Nagpur" },
        { id: 10, name: "Best Resturent In Amedabad" },
    ];

    let buttons2 = [
        { id: 1, name: "Best Resturent In Howrah" },
        { id: 2, name: "Best Resturent In Sodhpur" },
        { id: 3, name: "Best Resturent In Belgharia" },
        { id: 4, name: "Best Resturent In Sealdah" },
        { id: 5, name: "Best Resturent In Dam Dam" },
        // { id: 6, name: "Best Resturent In Danlop" },
    ];

    return (
        <div className="flex flex-col items-center">

            <div className="mb-10 w-[100%]">
                <h1 className="text-[25px] font-bold">Best Places to Eat Across Cities : </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {buttons.map((b) => (
                    <div key={b.id}>
                        <button className="border border-gray-200 px-10 py-5 rounded-xl hover:bg-gray-100 transition cursor-pointer">
                            {b.name}
                        </button>
                    </div>
                ))}

                <button
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center justify-center gap-2 border border-gray-200 px-3 py-4 rounded-xl hover:bg-gray-100 transition cursor-pointer col-span-2 md:col-span-5"
                >
                    {showMore ? "Show Less" : "Show More"}
                    <span
                        className={`mt-1 transform transition-transform ${showMore ? "rotate-180" : "rotate-0"}`}
                    >
                        <IoIosArrowDown size={18} style={{ color: "orange" }} />
                    </span>
                </button>
            </div>

            <div
                className={`grid grid-cols-2 md:grid-cols-5 gap-8 overflow-hidden transition-all duration-500 ease-in-out ${showMore ? "max-h-[1000px] mt-6 opacity-100" : "max-h-0 opacity-0"}`}
            >
                {buttons2.map((b) => (
                    <div key={b.id}>
                        <button className="border border-gray-200 px-10 py-5 rounded-xl hover:bg-gray-100 transition cursor-pointer">
                            {b.name}
                        </button>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default BestRestForEating;
