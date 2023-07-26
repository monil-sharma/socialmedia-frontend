import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper p-5">
        <div className="shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] rounded-md w-full p-2 pb-8">
          <div className="upperHalf flex">
            <img
              src="assets/person/1.jpeg"
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
          <div className="lowerHalf flex justify-between pl-3 pr-3 items-center">
            <div className="options flex justify-around w-4/5">
              <div className="option cursor-pointer">
                <PermMedia className="optionIcon text-lg text-orange-500" />
                <span
                  className="optionText text-sm"
                  style={{ fontWeight: 500 }}
                >
                  {" "}
                  Photo or Video
                </span>
              </div>
              <div className="option cursor-pointer">
                <Label className="optionIcon text-lg text-blue-600" />
                <span
                  className="optionText text-sm"
                  style={{ fontWeight: 500 }}
                >
                  Tag
                </span>
              </div>
              <div className="option cursor-pointer">
                <Room className="optionIcon text-lg  text-red-600" />
                <span
                  className="optionText text-sm"
                  style={{ fontWeight: 500 }}
                >
                  Location
                </span>
              </div>
              <div className="option cursor-pointer">
                <EmojiEmotions className="optionIcon text-lg text-[#daa520]" />
                <span
                  className="optionText text-sm"
                  style={{ fontWeight: 500 }}
                >
                  Feelings
                </span>
              </div>
            </div>
            <div className="share">
              <button
                className="rounded-md pt-1 pb-1 pr-2 pl-2 cursor-pointer bg-blue-500 text-white"
                style={{ fontWeight: 500 }}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
