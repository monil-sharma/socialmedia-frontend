import Online from "../online/Online";
import { Users } from "../../dummyData.jsx";
export default function Rightbar({ profile }) {
  // console.log(props);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday flex items-center">
          <img src="assets/gift.png" alt="" className="h-10 w-10" />
          <span className="text-sm" style={{ fontWeight: 300 }}>
            <b>Steve Rogers</b> and <b>4 others</b> have birthday today.
          </span>
        </div>
        <img
          src="assets/adv.png"
          alt=""
          className="ad rounded-md w-full mt-5"
        />

        <h4 className="mt-5" style={{ fontWeight: 600 }}>
          Online Friends
        </h4>
        <ul className="friendlist p-0 m-0 mt-1">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle text-lg mb-2" style={{ fontWeight: 500 }}>
          User Information
        </h4>
        <div className="rightbarInfo mb-7">
          <div className="infoItem mb-2">
            <span
              className="infoKey mr-4 text-[#555]"
              style={{ fontWeight: 500 }}
            >
              City:
            </span>
            <span className="infoKeyValue" style={{ fontWeight: 300 }}>
              New York
            </span>
          </div>
          <div className="infoItem mb-2">
            <span
              className="infoKey mr-4 text-[#555]"
              style={{ fontWeight: 500 }}
            >
              From:
            </span>
            <span className="infoKeyValue" style={{ fontWeight: 300 }}>
              Amsterdam
            </span>
          </div>
          <div className="infoItem mb-2">
            <span
              className="infoKey mr-4 text-[#555]"
              style={{ fontWeight: 500 }}
            >
              Relationship:
            </span>
            <span className="infoKeyValue" style={{ fontWeight: 300 }}>
              Single
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle text-lg mb-2" style={{ fontWeight: 500 }}>
          User friends
        </h4>
        <div className="followings flex flex-wrap justify-between">
          <div className="following mb-5">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="followingImg w-[100px] h-[100px] object-cover rounded"
            />
            <span className="followingName">Peter Griffin</span>
          </div>
          <div className="following mb-5">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="followingImg w-[100px] h-[100px] object-cover rounded"
            />
            <span className="followingName">Peter Griffin</span>
          </div>
          <div className="following mb-5">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="followingImg w-[100px] h-[100px] object-cover rounded"
            />
            <span className="followingName">Peter Griffin</span>
          </div>
          <div className="following mb-5">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="followingImg w-[100px] h-[100px] object-cover rounded"
            />
            <span className="followingName">Peter Griffin</span>
          </div>
          <div className="following mb-5">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="followingImg w-[100px] h-[100px] object-cover rounded"
            />
            <span className="followingName">Peter Griffin</span>
          </div>
          <div className="following mb-5">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="followingImg w-[100px] h-[100px] object-cover rounded"
            />
            <span className="followingName">Peter Griffin</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flex-4 z-[-999]">
      <div className="rightbarWrapper p-5 pl-0">
        <div className="p-2">
          {/* <HomeRightbar /> */}
          {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    </div>
  );
}
