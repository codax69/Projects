"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ star }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleHover = (ID) => {
    setHover(ID);
  };
  const handleClick = (ID) => {
    setRating(ID);
  };

  const handleExit = () => {
    setHover();
  };

  return (
    <>
      <div className="flex justify-center pt-10">
        {[...Array(star)].map((_, index) => {
          const starIndex = index + 1;
          return (
            <FaStar
              key={starIndex}
              size={50}
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => handleHover(starIndex)}
              onMouseLeave={handleExit}
              className={`${starIndex <= (rating || hover) ? 'fill-amber-500' : "fill-white"}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Rating;
