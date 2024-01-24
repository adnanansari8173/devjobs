import React from "react";

const Checkbox = ({ checked, ...props }) => {
  return (
    <div className="w-6 h-6 relative" {...props}>
      <input
        type="checkbox"
        className="appearance-none w-full h-full rounded bg-very-dark-blue/10 dark:bg-white/10  shrink-0 peer checked:bg-violet dark:checked:bg-violet cursor-pointer transition-all"
        checked={checked}
      />
      <svg
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 hidden peer-checked:inline"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="12"
        viewBox="0 0 15 12"
        fill="none"
      >
        <path
          d="M1 6.56948L4.57248 10.142L13.7144 1"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export default Checkbox;
