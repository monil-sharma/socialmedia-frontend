import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

export default function Post(props) {
  const post = props.post;

  // console.log(post);
  // console.log("1");

  const currUser = Users.filter((user) => {
    return user.id === post?.userID;
  });

  // console.log(currUser[0].username);

  return (
    <div className="post">
      <div className="postWrapper p-5">
        <div className="shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] rounded-md w-full p-2 pb-8">
          <div className="postTop flex justify-between mb-3">
            <div className="topLeft flex items-center">
              <img
                src={currUser[0].profilePicture}
                className="dp rounded-full w-8 h-8 object-cover"
                alt=""
              />
              <span
                className="postUsername ml-2 text-sm"
                style={{ fontWeight: 500 }}
              >
                {currUser[0].username}
              </span>
              <span className="postDate text-xs ml-2">{post.date}</span>
            </div>
            <div className="topRight flex items-center">
              <MoreVert className="cursor-pointer" />
            </div>
          </div>
          <div className="postCenter">
            <span>{post?.desc}</span>
            <img
              src={post.photo}
              alt=""
              className="w-full max-h-[500px] object-contain"
            />
          </div>
          <div className="postBottom mt-3 flex justify-between items-center">
            <div className="bottomLeft flex items-center">
              <img
                src="assets/like.png"
                alt=""
                className="rounded-full h-6 w-6 mr-1 object-cover cursor-pointer"
              />
              <img
                src="assets/heart.png"
                alt=""
                className="rounded-full h-6 w-6 mr-1 object-cover cursor-pointer"
              />
              <span className="text-sm">{post.like} people liked this</span>
            </div>
            <div className="bottomRight">
              <span className="border-b border-dashed cursor-pointer border-gray-600 text-sm">
                {post.comment} comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
