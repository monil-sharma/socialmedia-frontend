import userIMG from "../../assets/person/1.jpeg";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper p-5">
        <div className="shadow-md rounded-md w-full h-48 p-2">
          <div className="upperHalf flex">
            <img
              src={userIMG}
              alt=""
              className="rounded-full mr-2 w-12 h-12 object-cover"
            />
            <input
              type="text"
              placeholder="What's on your mind?"
              className="w-11/12 focus-within:outline-none"
            />
          </div>
          <div className="hr pr-3 pl-3 mt-5 mb-5">
            <hr className="" />
          </div>
          <div className="lowerHalf">
            <div className="options flex justify-around">
              <div className="option">
                <PermMedia className="optionIcon text-orange-500" />
                <span className="optionText">Photo or Video</span>
              </div>
              <div className="option">
                <Label className="optionIcon text-blue-600" />
                <span className="optionText">Tag</span>
              </div>
              <div className="option">
                <Room className="optionIcon  text-red-600" />
                <span className="optionText">Location</span>
              </div>
              <div className="option">
                <EmojiEmotions className="optionIcon text-[#daa520]" />
                <span className="optionText">Feelings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
