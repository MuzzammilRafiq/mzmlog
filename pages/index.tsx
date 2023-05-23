import MainView from "@/components/MainView";
import SideBar from "@/components/SideBar";
import { ParseArrayMongoDocument } from "@/lib/ParseMongoDocument(s)";
import connectDB from "@/lib/connectDB";
import { BlogInterface } from "@/lib/model";
import Blog from "@/schema/PostModel";
import User from "@/schema/UserModel";
import { GetServerSideProps } from "next";
import { useSession, signIn } from "next-auth/react";
import React from "react";

interface Props {
  data: [BlogInterface];
  response: boolean;
}

const Home: React.FC<Props> = ({ data, response }) => {
  const { status } = useSession();
  if (!response) return <h1>Something went wrong</h1>;
  if (status === "loading") {
    return (
      <div className="bg-sky-950 w-screen h-screen flex items-center">
        <div className="text-center w-full items-center m-auto">
          <h1 className="bg-white p-2 px-4 rounded-md text-blue-900">
            Loading
          </h1>
        </div>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div className="bg-sky-950 w-screen h-screen flex items-center">
        <div className="text-center w-full items-center m-auto">
          <button
            className="bg-white p-2 px-4 rounded-md text-blue-900 cursor-pointer"
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
      <MainView blogs={data} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await connectDB();
    const a = await User.find();
    const blogs: BlogInterface[] = await Blog.find().populate("userId");
    return {
      props: {
        response: true,
        data: ParseArrayMongoDocument(blogs),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        response: false,
        data: "something went wrong",
      },
    };
  }
};
export default Home;
