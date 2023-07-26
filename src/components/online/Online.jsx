export default function Online(props) {
  const user = props.user;
  console.log(user);
  return (
    <li className="friend flex items-center mb-2">
      <div className="imgContainer flex items-center relative">
        <img
          src={user.profilePicture}
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="w-3 h-3 bg-green-600 rounded-full absolute right-0 top-[-2px]"></span>
      </div>
      <span className="ml-2" style={{ fontWeight: 500 }}>
        {user.username}
      </span>
    </li>
  );
}
