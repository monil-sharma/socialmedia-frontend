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
export default function Sidebar() {
  return (
    <div className="flex-3 h-[calc(100vh-3rem)] bg-yellow-400">
      <div className="sidebarWrapper p-5">
        <ul className="sidebarList m-0 p-0">
          <li className="sidebarListItem flex items-center mb-5">
            <RssFeed />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Chat />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <PlayCircleFilledOutlined />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Group />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Bookmark />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <HelpOutline />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <WorkOutline />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Event />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <School />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
