import React, { useState } from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleClick = (e) => {
    console.log("clicked");
  };

  return (
    <>
      <input
        className="border border-gray-400"
        type="text"
        onChange={handleChange}
      ></input>
      <p> Search value: {searchValue}</p>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Input;
