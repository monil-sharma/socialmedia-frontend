import birthdayImg from "../../assets/gift.png";
import adImg from "../../assets/ad.png";
import friendImg from "../../assets/person/3.jpeg";
export default function Rightbar() {
  return (
    <div className="flex-4">
      <div className="rightbarWrapper p-5">
        <div className="p-2">
          <div className="birthday flex items-center">
            <img src={birthdayImg} alt="" className="h-10 w-10" />
            <span className="text-sm" style={{ fontWeight: 300 }}>
              <b>Steve Rogers</b> and <b>4 others</b> have birthday today.
            </span>
          </div>
          <img src={adImg} alt="" className="ad rounded-md w-full mt-5" />

          <h4 className="mt-5" style={{ fontWeight: 500 }}>
            Online Friends
          </h4>
          <ul className="friendlist mt-1">
            <li className="friend flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img
                  src={friendImg}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover mr-2"
                />
                <span>Dummy Name</span>
              </div>
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            </li>
            <li className="friend flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img
                  src={friendImg}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover mr-2"
                />
                <span>Dummy Name</span>
              </div>
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            </li>
            <li className="friend flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img
                  src={friendImg}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover mr-2"
                />
                <span>Dummy Name</span>
              </div>
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
