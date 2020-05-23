import React from "react";

const Home = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="20"
         fill="none"
         viewBox="0 0 24 24">
      <path d="M12 9.185l7 6.514v6.301h-14v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h18v-9.172l-9-8.375zm2 14.547h-4v-6h4v6zm10-8.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z"
            fill={fill}/>
    </svg>
)};

export default Home;
