import React from "react";

const Stories = ({ fill }) => {
  console.log('fill esheche', fill);

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="20"
         fill="none"
         viewBox="0 0 24 24">
      <path d="M22 16v8h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h17v2h-16.505c-1.375 0-1.375 2 0 2h16.505v8h-7c-1.104 0-2 .896-2 2s.896 2 2 2h7zm-8-2c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1z"
            fill={fill}
      />
    </svg>
)};

export default Stories;
