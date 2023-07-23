import { Person, Chat, Notifications, Search } from "@mui/icons-material";
import signoutImg from "../../assets/person/1.jpeg";

export default function Topbar() {
  return (
    <div className="p-3 h-12 bg-smBlue flex  items-center w-full sticky top-0">
      <div className="left flex-3">
        <div className="logo m-1 text-white text-xl font-bold cursor-pointer hover:text-slate-200">
          The Social Network
        </div>
      </div>
      <div className="center  flex-5">
        <div className="searchBar h-[1.875rem] flex items-center bg-white w-full rounded-2xl">
          <Search className="m-2 !text-xl" />
          <input
            type="text"
            placeholder="Search for friends, post or videos"
            className="searchInput w-4/5 focus:outline-none"
          />
        </div>
      </div>
      <div className="right flex-4 flex justify-around text-white items-center">
        <div className="links cursor-pointer flex items-center m-2">
          <div className="link text-sm m-1">Homepage</div>
          <div className="link text-sm m-1">Timeline</div>
        </div>
        <div className="icons flex items-center hover:cursor-pointer">
          <div className="icon relative mr-4">
            <Person className="" />
            <span
              className="iconBadge h-4 w-4 bg-red-600 rounded-full absolute text-xs text-center"
              style={{ top: -5, right: -5 }}
            >
              1
            </span>
          </div>
          <div className="icon relative mr-4">
            <Chat />{" "}
            <span
              className="iconBadge h-4 w-4 bg-red-600 rounded-full absolute text-xs text-center"
              style={{ top: -5, right: -5 }}
            >
              2
            </span>
          </div>
          <div className="icon relative mr-4 ">
            <Notifications />{" "}
            <span
              className="iconBadge h-4 w-4 bg-red-600 rounded-full absolute text-xs text-center"
              style={{ top: -5, right: -5 }}
            >
              3
            </span>
          </div>
        </div>
        <div className="signout">
          <img
            src={signoutImg}
            alt="user Image"
            className="rounded-full w-8 h-8 object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
