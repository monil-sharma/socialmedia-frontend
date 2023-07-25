import userImg from "../../assets/person/1.jpeg";
import postImg from "../../assets/post/1.jpeg";
import like from "../../assets/like.png";
import heart from "../../assets/heart.png";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper p-5">
        <div className="shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] rounded-md w-full p-2 pb-8">
          <div className="postTop flex justify-between mb-3">
            <div className="topLeft flex items-center">
              <img
                src={userImg}
                className="dp rounded-full w-8 h-8 object-cover"
                alt=""
              />
              <span
                className="postUsername ml-2 text-sm"
                style={{ fontWeight: 500 }}
              >
                Dummy User
              </span>
              <span className="postDate text-xs ml-2">6 mins ago</span>
            </div>
            <div className="topRight flex items-center">
              <MoreVert className="cursor-pointer" />
            </div>
          </div>
          <div className="postCenter">
            <span>A random post</span>
            <img
              src={postImg}
              alt=""
              className="w-full max-h-[500px] object-contain"
            />
          </div>
          <div className="postBottom mt-3 flex justify-between items-center">
            <div className="bottomLeft flex items-center">
              <img
                src={like}
                alt=""
                className="rounded-full h-6 w-6 mr-1 object-cover cursor-pointer"
              />
              <img
                src={heart}
                alt=""
                className="rounded-full h-6 w-6 mr-1 object-cover cursor-pointer"
              />
              <span className="text-sm">69 people liked this</span>
            </div>
            <div className="bottomRight">
              <span className="border-b border-dashed cursor-pointer border-gray-600 text-sm">
                11 comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
