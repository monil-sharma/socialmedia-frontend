import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer flex w-full">
        {/* <div>Home Page</div> */}
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
