import React from "react";

// const Button = ({ children, light }) => {
//   return (
//     <div
//       className={`px-9 py-4 rounded-md font-bold cursor-pointer ${
//         light
//           ? "bg-violet/10 text-violet hover:bg-violet/[0.35]"
//           : "bg-violet text-white hover:bg-light-violet"
//       }`}
//     >
//       {children}
//     </div>

//   );
// };

const Button = ({ children, light, className, ...props }) => {
  return (
    <button
      className={`px-9 py-4 rounded-md font-bold cursor-pointer ${
        light
          ? "bg-violet/10 text-violet hover:bg-violet/[0.35]"
          : "bg-violet text-white hover:bg-light-violet"
      } ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
