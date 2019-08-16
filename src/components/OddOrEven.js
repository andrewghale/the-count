import React from 'react';


const OddOrEven = ({ count }) => {
    switch(count) {
      case (count === 0):
        return <span>"Zero"</span>;
      case (count % 2 === 0):
        return <span>"Even"</span>;
      default:
        return <span>"Odd"</span>;
    }
}

// const OddOrEven = ({count}) => {
//     // console.log("working");
//     if (count === 0) {
//         return ("Zero");
//     } else {
//         if (count % 2 === 0) {
//             // console.log("even");
//             return ("Even");
//         } else {
//             // console.log("odd");
//             return ("Odd");
//         }
//     }
// }

export default OddOrEven;