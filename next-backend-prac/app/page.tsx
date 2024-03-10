import axios from "axios";
import Image from "next/image";

async function getUserData() {
  const response = await axios.get("https://localhost:3000/api/user/1");
  return response.data;
}

//async component
export default async function Home() {
  const userData = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.email}
        </div>
      </div>
    </div>
  );
}
