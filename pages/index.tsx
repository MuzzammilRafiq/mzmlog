import MainView from "@/components/MainView";
import SideBar from "@/components/SideBar";
import { useSession, signIn } from "next-auth/react";
import React from "react";

const Home: React.FC = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <div className="bg-sky-950 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <h1 className="bg-white p-2 px-4 rounded-md text-blue-900 w-fit m-auto">
            Loading
          </h1>
        </div>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div className="bg-sky-950 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-md text-blue-900"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <main className="min-h-screen min-w-full flex">
      <SideBar />
      <MainView />
    </main>
  );
};

export default Home;
