import Online from "../online/Online";
import { Users } from "../../dummyData.jsx";
export default function Rightbar() {
  return (
    <div className="flex-4 z-[-999]">
      <div className="rightbarWrapper p-5 pl-0">
        <div className="p-2">
          <div className="birthday flex items-center">
            <img src="assets/gift.png" alt="" className="h-10 w-10" />
            <span className="text-sm" style={{ fontWeight: 300 }}>
              <b>Steve Rogers</b> and <b>4 others</b> have birthday today.
            </span>
          </div>
          <img
            src="assets/ad.png"
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
        </div>
      </div>
    </div>
  );
}
