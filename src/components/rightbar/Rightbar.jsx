import birthdayImg from "../../assets/gift.png";
import adImg from "../../assets/ad.png";
import friendImg from "../../assets/person/3.jpeg";
import friendImg1 from "../../assets/person/4.jpeg";
import friendImg2 from "../../assets/person/5.jpeg";
export default function Rightbar() {
  return (
    <div className="flex-4">
      <div className="rightbarWrapper p-5 pl-0">
        <div className="p-2">
          <div className="birthday flex items-center">
            <img src={birthdayImg} alt="" className="h-10 w-10" />
            <span className="text-sm" style={{ fontWeight: 300 }}>
              <b>Steve Rogers</b> and <b>4 others</b> have birthday today.
            </span>
          </div>
          <img src={adImg} alt="" className="ad rounded-md w-full mt-5" />

          <h4 className="mt-5" style={{ fontWeight: 600 }}>
            Online Friends
          </h4>
          <ul className="friendlist p-0 m-0 mt-1">
            <li className="friend flex items-center mb-2">
              <div className="imgContainer flex items-center relative">
                <img
                  src={friendImg}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="w-3 h-3 bg-green-600 rounded-full absolute right-0 top-[-2px]"></span>
              </div>
              <span className="ml-2" style={{ fontWeight: 500 }}>
                Wakanda Forever
              </span>
            </li>
            <li className="friend flex items-center mb-2">
              <div className="imgContainer flex items-center relative">
                <img
                  src={friendImg1}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="w-3 h-3 bg-green-600 rounded-full absolute right-0 top-[-2px]"></span>
              </div>
              <span className="ml-2" style={{ fontWeight: 500 }}>
                BTS
              </span>
            </li>
            <li className="friend flex items-center mb-2">
              <div className="imgContainer flex items-center relative">
                <img
                  src={friendImg2}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="w-3 h-3 bg-green-600 rounded-full absolute right-0 top-[-2px]"></span>
              </div>
              <span className="ml-2" style={{ fontWeight: 500 }}>
                Brunette Model
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
