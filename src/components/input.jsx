import React from "react";

const input = () => {
  const [searchValue, setSearchValue] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input
        className="border border-gray-400"
        type="text"
        onChange={handleChange}
      ></input>
      <p> Search value: </p>
    </>
  );
};

export default input;
