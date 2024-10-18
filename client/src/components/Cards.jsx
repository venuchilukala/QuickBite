import React, { useState } from "react";
import {Link} from "react-router-dom"
import {FaHeart} from "react-icons/fa"

const Cards = (props) => {
  const { item } = props;
  const { _id, name, recipe, image, category, price } = item;

  const [isHeartFilled, setIsHeartFilled] = useState(false)

  const handleHeartClick = ()=>{
    setIsHeartFilled(!isHeartFilled)
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
        <div className={`rating gap-1 absolute p-4 right-2 top-2 heartStar bg-green  ${isHeartFilled ? 'text-rose-500' : 'text-white'}`} onClick={handleHeartClick}>
            <FaHeart className="h-5 w-5 cursor-pointer"/>
        </div>
      <Link to={`/menu/${_id}`}>
        <figure>
          <img src={image} alt={name} className="hover:scale-105 transition-all duration-200 md:h-72"/>
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${_id}`}><h2 className="card-title">{name}</h2></Link>
        <p>{recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold flex gap-2">
            <span className="text-sm text-red">$</span>
            {price}
          </h5>
          <button className="btn bg-green text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
