import Share from "../share/Share";
import Post from "../post/Post";
export default function Feed() {
  return (
    <div className="flex-6">
      <div className="feedWrapper">
        {" "}
        <Share />
        <Post />
      </div>
    </div>
  );
}
