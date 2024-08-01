import React from "react";
import { IoClose } from "react-icons/io5";

const UserCard = ({ userImg, firstName, CloseIcon, userId }) => {
  return (
    <div className="flex items-center p-5 border rounded justify-between">
      <div className="flex items-center gap-5">
        <img className="h-10 w-10 rounded-full" src={userImg} alt="" />
        <h1>{firstName}</h1>
      </div>
      <button onClick={() => removeCard(userId)}>
        <IoClose />
      </button>
    </div>
  );
};

export default UserCard;
