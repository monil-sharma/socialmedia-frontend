import { Person, Chat, Notifications, Search } from "@mui/icons-material";
import signoutImg from "../assets/person/1.jpeg";

export default function Topbar() {
  return (
    <div className="p-3 h-12 bg-smBlue flex  items-center w-full mx-auto">
      <div className="left flex-3">
        <div className="logo text-white text-xl ">The Social Network</div>
      </div>
      <div className="center  flex-5">
        <div className="search h-7 flex items-center bg-white w-full rounded-2xl">
          <Search className="m-1 !text-xl" />
          <input
            type="text"
            placeholder="Search for friends, post or videos"
            className="searchBar w-4/5"
          />
        </div>
      </div>
      <div className="right flex-4 flex justify-end">
        <div className="links flex items-center">
          <div className="link">Homepage</div>
          <div className="link">Timeline</div>
        </div>
        <div className="icons flex items-center">
          <div className="icon">
            <Person />1
          </div>
          <div className="icon">
            <Chat /> 2
          </div>
          <div className="icon">
            <Notifications /> 3
          </div>
        </div>
        <div className="signout">
          <img
            src={signoutImg}
            alt="user Image"
            className="rounded-full w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
}
