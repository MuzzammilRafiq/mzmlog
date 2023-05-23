import React from "react";
import SidebarComponents from "./SidebarComponents";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const SideBar: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-blue-950 bg-darkblue1 w-fit px-5 pt-10">
      <div className="bg-blue-800 p-3 mb-5 rounded-lg hover:bg-blue-700 cursor-pointer text-center items-center flex">
        <img
          src={session?.user?.image as string}
          alt="profile"
          className="h-10 mr-3 rounded-lg"
        />
        {session?.user?.name}
      </div>
      <div className="bg-pink-700 p-3 mb-5 rounded-lg hover:bg-pink-600 cursor-pointer text-center">
        Add Post
      </div>
      <SidebarComponents />
      <SidebarComponents />
      <SidebarComponents />
      <button
        className="bg-pink-600 p-3 mb-5 rounded-lg hover:bg-pink-600 cursor-pointer"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SideBar;
