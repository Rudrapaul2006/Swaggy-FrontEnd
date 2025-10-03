import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import TopResturent from './TopResturent';
import Cart from './Cart';
import BestRestForEating from './BestRestForEating';

const Content = () => {
  const [data, setData] = useState([]);
  const [increase, setIncrease] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/foods");
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  const prevMenu = () => setIncrease(prev => Math.max(prev - 3, 0));
  const nextMenu = () => setIncrease(prev => Math.min(prev + 3, data.length - 1.8));

  return (
    <div className='flex flex-col w-[90%] mt-5 mx-auto pt-[85px]'>

      {/* Food categories */}
      <div className='flex justify-between items-center mt-6 mb-8'>
        <h1 className='text-[25px] font-semibold'>What's on your mind:</h1>
        <div className="flex items-center gap-10 mx-13">
          <button onClick={prevMenu}>
            <FaAngleLeft size={30} className="bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-500 transition-colors" />
          </button>
          <button onClick={nextMenu}>
            <FaAngleRight size={30} className="bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-500 transition-colors" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-9  transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${increase * 8}%)` }}>
          {data.map((category, index) => (

            <div key={index} className="group flex-shrink-0 flex flex-col items-center p-2 w-40 text-center">
              <img
                src={`http://localhost:3000${category.image}`}
                alt={category.name}
                className="w-36 h-36 object-cover rounded-full"
              />
              <div className='mt-2 font-semibold capitalize group-hover:text-orange-500 transition-colors duration-300'>
                {category.name}
              </div>
            </div>

          ))}
        </div>
      </div>

      <hr className='my-10 border-slate-400' />

      <TopResturent />

      <hr className='my-10 border-slate-400' />

      <div>
        <div className='flex item'>
          <h1 className='text-[25px] font-semibold'>Restaurants with online food delivery in Kolkata :</h1>
        </div>
        <Cart />
      </div>

      <hr className='my-10 border-slate-400' />

      <BestRestForEating />

      <hr className='my-10 border-slate-400' />


    </div>
  );
};

export default Content;
