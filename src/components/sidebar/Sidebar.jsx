import {
  RssFeed,
  Chat,
  Bookmark,
  Group,
  PlayCircleFilledOutlined,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import friendImg from "../../assets/person/2.jpeg";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="overflow-y-scroll flex-3 h-[calc(100vh-3rem)]">
      <div className="sidebarWrapper p-5">
        <ul className="sidebarList m-0 p-0">
          <li className="sidebarListItem flex items-center mb-5">
            <RssFeed />
            <span className="sidebarListItemText ml-4">Feed</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Chat />
            <span className="sidebarListItemText ml-4">Chats</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <PlayCircleFilledOutlined />
            <span className="sidebarListItemText ml-4">Videos</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Group />
            <span className="sidebarListItemText ml-4">Groups</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Bookmark />
            <span className="sidebarListItemText ml-4">Bookmarks</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <HelpOutline />
            <span className="sidebarListItemText ml-4">Questions</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <WorkOutline />
            <span className="sidebarListItemText ml-4">Jobs</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Event />
            <span className="sidebarListItemText ml-4">Events</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <School />
            <span className="sidebarListItemText ml-4">Courses</span>
          </li>
        </ul>
        <button className="w-4/6 p-2 h-fit bg-gray-200">Show more</button>
        <hr className="w-full mt-6 mb-6" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
          <li className="sidebarFriend mb-4 flex items-center">
            <img
              src={friendImg}
              alt=""
              className="sideBarFriendImg rounded-full object-cover h-8 w-8"
            />
            <span className="sidebarFriendName ml-2">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
