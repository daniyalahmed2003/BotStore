import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Ratings = ({ value, text, color = "text-yellow-500" }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center" aria-label={`Rating: ${value}`}>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className={`ml-1 ${color}`} />
      ))}

      {hasHalfStar && <FaStarHalfAlt className={`ml-1 ${color}`} />}

      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className={`ml-1 ${color}`} />
      ))}

      {text && <span className="ml-3 text-gray-600 text-sm">{text}</span>}
    </div>
  );
};

export default Ratings;



// import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// const Ratings = ({ value, text, color }) => {
//   const fullStars = Math.floor(value);
//   const halfStars = value - fullStars > 0.5 ? 1 : 0;
//   const emptyStar = 5 - fullStars - halfStars;

//   return (
//     <div className="flex items-center">
//       {[...Array(fullStars)].map((_, index) => (
//         <FaStar key={index} className={`text-${color} ml-1`} />
//       ))}

//       {halfStars === 1 && <FaStarHalfAlt className={`text-${color} ml-1`} />}
//       {[...Array(emptyStar)].map((_, index) => (
//         <FaRegStar key={index} className={`text-${color} ml-1`} />
//       ))}

//       <span className={`rating-text ml-{2rem} text-${color}`}>
//         {text && text}
//       </span>
//     </div>
//   );
// };

// Ratings.defaultProps = {
//   color: "yellow-500",
// };

// export default Ratings;
