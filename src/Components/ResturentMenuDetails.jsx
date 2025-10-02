import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ResturentMenuDetails = () => {
  let { id } = useParams();

  const [TopRestaurant, setTopRestaurant] = useState();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        let response = await fetch("http://localhost:3000/api/all-products");
        let json = await response.json();

        // Filter only restaurants and find by id
        let res = json.find(item => item.type === "restaurant"  && item.id === parseInt(id));
        setTopRestaurant(res);
      } catch (err) {
        console.error("Error fetching restaurant:", err);
      }
    };

    fetchRestaurant();
  }, [id]);
  

  if (!TopRestaurant) {
    return <div className='mt-20'>Loading...</div>;
  }

  return (
    <div className='mt-20 w-[80%] mx-auto p-5 border rounded-lg shadow-md'>

      <div >  {/* TopResturent */}

        <h1 className='text-2xl font-bold mb-2'>{TopRestaurant.name}</h1>
      <div className='mb-2'>
        <span className='text-green-600 font-semibold'>{TopRestaurant.rating} ({TopRestaurant.ratingCount || "500+"} ratings)</span> · 
        <span className='ml-2'>₹{TopRestaurant.avgCost || 600} for two</span>
      </div>
      <div className='mb-2'>
        <span className='text-orange-500 cursor-pointer'>{TopRestaurant.name}</span>
      </div>
      <div className='mb-2'>
        <span>Outlet: {TopRestaurant.place}</span>
      </div>
      <div className='mb-2'>
        <span>{TopRestaurant.minTime}-{TopRestaurant.maxTime} mins</span>
      </div>
      <div className='mb-2'>
        <span>{TopRestaurant.distance || 4.0} km | ₹{TopRestaurant.deliveryFee || 70} Delivery fee will apply</span>
      </div>

      </div>



    </div>
  );
};

export default ResturentMenuDetails;
