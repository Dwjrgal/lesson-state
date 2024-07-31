import React from "react";

const UserCard = ({ userImg, firstName, CloseIcon }) => {
  return (
    <div className="flex items-center p-5 border rounded justify-between">
      <img className="h-10 w-10 rounded-full" src={userImg} alt="" />
      
       <h1>{firstName}</h1>
       
    </div>
  );
};

export default UserCard;
