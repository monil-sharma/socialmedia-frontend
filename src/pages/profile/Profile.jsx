import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile flex w-full">
        {/* <div>Home Page</div> */}
        <Sidebar />
        <div className="right flex-10">
          <div className="rightTop ">
            <div className="profileCover relative h-80 z-[-999]">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="w-full h-64 object-cover"
              />
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="h-36 w-36 rounded-full object-cover absolute left-0 right-0 m-auto top-40 border-[3px] border-white"
              />
            </div>
            <div className="profileInfo flex flex-col items-center justify-center">
              <div className="text-2xl">dvfdv</div>
              <div className="" style={{ fontWeight: 300 }}>
                dfvfdv
              </div>
            </div>
          </div>
          <div className="rightBottom flex">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
