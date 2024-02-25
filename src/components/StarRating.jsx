import React from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ rating, isDarkMode }) => {
  console.log({ rating, isDarkMode });
  const getStarClass = (index) => {
    return index < rating
      ? `text-yellow-500 ${isDarkMode ? "text-yellow-300" : "text-yellow-500"}`
      : `text-gray-400 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`;
  };

  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          role="img"
          aria-label="star"
          className={getStarClass(index)}
        >
          {index < rating ? <FaStar /> : <FaStar />}
        </span>
      ))}
    </>
  );
};
