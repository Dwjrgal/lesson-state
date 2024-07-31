import UserCard from "@/components/user-card";
import Input from "@/components/input";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const profiles = [
  {
    id: 1,
    firstName: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    phone: "99011090",
    jobTitle: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    icon: <IoClose />,
  },
  {
    id: 2,
    firstName: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    address: "456 Oak St, Springfield, IL",
    phone: "99011091",
    jobTitle: "Project Manager",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    icon: <IoClose />,
  },
  {
    id: 3,
    firstName: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    address: "789 Pine St, Springfield, IL",
    phone: "99011092",
    jobTitle: "UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    icon: <IoClose />,
  },
  {
    id: 4,
    firstName: "Bob Brown",
    age: 35,
    email: "bob.brown@example.com",
    address: "101 Maple St, Springfield, IL",
    phone: "99011093",
    jobTitle: "Product Owner",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: <IoClose />,
  },
  {
    id: 5,
    firstName: "Charlie Davis",
    age: 22,
    email: "charlie.davis@example.com",
    address: "202 Elm St, Springfield, IL",
    phone: "99011094",
    jobTitle: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    icon: <IoClose />,
  },
];

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John Doe",
      age: 25,
      email: "john.doe@example.com",
      address: "123 Main St, Springfield, IL",
      phone: "99011090",
      jobTitle: "Software Engineer",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      firstName: "Jane Smith",
      age: 30,
      email: "jane.smith@example.com",
      address: "456 Oak St, Springfield, IL",
      phone: "99011091",
      jobTitle: "Project Manager",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      firstName: "Alice Johnson",
      age: 28,
      email: "alice.johnson@example.com",
      address: "789 Pine St, Springfield, IL",
      phone: "99011092",
      jobTitle: "UX Designer",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      firstName: "Bob Brown",
      age: 35,
      email: "bob.brown@example.com",
      address: "101 Maple St, Springfield, IL",
      phone: "99011093",
      jobTitle: "Product Owner",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      firstName: "Charlie Davis",
      age: 22,
      email: "charlie.davis@example.com",
      address: "202 Elm St, Springfield, IL",
      phone: "99011094",
      jobTitle: "Marketing Specialist",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ]);

  const handleChange = (text) => {
    setSearchValue(text.target.value);
    const findUser = profiles.filter((user) =>
      user.firstName.toLowerCase().includes(text.target.value.toLowerCase())
    );
    setUsers(findUser);
  };

  const handleClick = () => {
    setUsers([]);
  };
  const showClick = () => {
    setUsers(profiles);
  };

  const removeCard = (userIndex) =>{
    const card = profiles.splice(userIndex,1)
    setUsers(card=[])
  }
  return (
    <main className="flex flex-col items-center py-8">
      <h1 className="text-3xl text-gray-950 "> user find application</h1>
      <div className="flex flex-col gap-5 mt-6">
        <Input handleChange={handleChange} />
        <div className="flex gap-3">
          <button
            className="border border-orange-500 rounded w-40"
            onClick={handleClick}
          >
            clear
          </button>
          <button
            className="border border-indigo-500 rounded w-40"
            onClick={showClick}
          >
            view
          </button>
          <button onClick={removeCard}>{CloseIcon}</button>
        </div>

        {/* <p> Search value: {searchValue}</p> */}
        {users?.map((user) => {
          return (
            <UserCard
              userImg={user.imageUrl}
              firstName={user.firstName}
              CloseIcon={user.icon}
            />
          );
        })}
        {!profiles && <p>Empty</p>}
      </div>
    </main>
  );
}
