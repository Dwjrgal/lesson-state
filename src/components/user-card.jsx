import React from "react";

const UserCard = ({ userImg, firstName, CloseIcon }) => {
  return (
    <div className="flex items-center gap-4 p-5 border rounded">
      <img className="h-10 w-10 rounded-full" src={userImg} alt="" />
      <h1>{firstName}</h1>
      <p> {CloseIcon}</p>
    </div>
  );
};

export default UserCard;
