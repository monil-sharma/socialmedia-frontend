export default function CloseFriends(props) {
  const user = props.user;

  return (
    <li className="sidebarFriend mb-4 flex items-center">
      <img
        src={user.profilePicture}
        alt=""
        className="sideBarFriendImg rounded-full object-cover h-8 w-8"
      />
      <span className="sidebarFriendName ml-2">{user.username}</span>
    </li>
  );
}
