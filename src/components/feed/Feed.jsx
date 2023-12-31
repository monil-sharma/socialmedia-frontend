import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
export default function Feed() {
  return (
    <div className="flex-6">
      <div className="feedWrapper">
        {" "}
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
