import React, { useState } from "react";

const Input = ({ handleChange }) => {
  return (
    <>
      <input
        className="border border-green-800 rounded p-1 "
        type="text"
        onChange={handleChange}
      ></input>
      {/* <p className="text-center"> Search value: {searchValue}</p> */}
    </>
  );
};

export default Input;
