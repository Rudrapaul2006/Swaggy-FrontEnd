import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import TopResturent from './TopResturent';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Content = () => {
  let [increase, setIncrease] = useState(0);
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:3000/api/all-products");
      let json = await response.json();

      let foods = json.filter(item => item.type === "food");
      setData(foods);
    };

    fetchData();
  }, []);

  const prevMenu = () => {
    setIncrease((prev) => Math.max(prev - 3, 0))
  };

  const nextMenu = () => {
    setIncrease((prev) => Math.min(prev + 3, data.length - 1.8))
  };

  return (


    <div className=' flex flex-col w-[90%] mt-5 mx-auto pt-[85px]'>

      <div className=' flex justify-between items-center mt-6 mb-8'>
        <h1 className='text-[25px] font-semibold '>What's on your mind : </h1>

        <div className="flex items-center  mx-13 gap-10">
          <button onClick={prevMenu}>
            <FaAngleLeft
              size={30}
              className="flex items-center  bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-500  transition-colors"
            />
          </button>
          <button onClick={nextMenu}>
            <FaAngleRight
              size={30}
              className="flex items-center bg-orange-400 rounded-xl cursor-pointer hover:bg-orange-500  transition-colors"
            />
          </button>
        </div>

      </div>


      <div className="overflow-hidden">
        <div
          className="rounded-full flex gap-9 transition-transform duration-700 ease-out "
          style={{
            transform: `translateX(-${increase * 8}%)`
          }}
        >
          {data.map((category, index) => (
            <Link to={`/resturentMenuDetails/${category.id}`} key={index}>
              <div
                className="rounded-full group flex-shrink-0 flex flex-col items-center p-2 w-40 text-center"
              >
                <img
                  src={`http://localhost:3000${category.image}`}
                  alt={category.name}
                  className="mx-5 w-42 h-36 object-cover rounded-full "
                />
                <div className=' rp mt-2 font-semibold capitalize font-bold group-hover:text-orange-500 duration-300'>{category.name}</div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <hr className='mt-10 mb-10' style={{
        border: "1px solid slategray"
      }} />

      <div>
        <TopResturent />
      </div>

      <hr className='mt-10 mb-10' style={{
        border: "1px solid slategray"
      }} />

      <div>
        <Cart />
      </div>

    </div>

  );
};

export default Content;
