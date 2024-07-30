import UserCard from "@/components/user-card";
import { Input } from "postcss";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-8">
      <h1 className="text-3xl text-gray-950 "> user find application</h1>
     <div className="flex flex-col gap-5 mt-6">
      <Input />
      <UserCard/>
     </div>
    </main>
  );
}
