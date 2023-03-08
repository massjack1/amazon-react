import React from 'react'
import Image from "next/image";
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter"
import { addToBasket, removeFromBasket } from '@/slices/basketSlice';
import { useDispatch } from "react-redux";


function CheckoutProduct({ 
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime, 
}) {

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id,
        title,
        price,
        rating,
        description,
        category,
        image,
        hasPrime,
      })
    );
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className='grid grid-cols-5'>
        <Image src ={image} height={200} width={200} object-fit="contain"
        />
        {/*Middle*/}
        <div className='col-span-3 mx-5'>
          <p>{title}</p>
          <div className="flex">
            {Array(rating).fill().map((_,i)=> (
                <StarIcon key={i} className="h-5 text-yellow-500"/>
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>
          {description}
        </p>
        <Currency quantity={price} currency="USD" />

        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img 
            loading="lazy"
            className='w-12'
            src="https://links.papareact.com/fdw" 
            alt="" />
            <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
          </div>
        )} 
        </div>

          {/* Right add/remove buttons */}
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
          <button className='button' onClick={addItemToBasket}>Add to Cart</button>
          <button className='button' onClick={removeFromBasket}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct