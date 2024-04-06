"use client";
import React from "react";

const Button = () => {
  return (
    <div className="mt-5">
      <button
        className="bg-green-500 text-white rounded-md px-4 py-2"
        onClick={() => console.log("I have click here")}
      >
        Click here
      </button>
    </div>
  );
};

export default Button;
