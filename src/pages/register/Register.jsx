export default function Register() {
  return (
    <div className="login flex items-center justify-center w-screen h-screen bg-[#f0f2f5]">
      <div className="loginWrapper h-3/4 w-3/4 flex">
        <div className="left flex-1 flex flex-col justify-center">
          <div
            className="Logo text-5xl text-[#1775ee]"
            style={{ fontWeight: 800 }}
          >
            The Social Network
          </div>
          <span className="desc text-2xl">
            Connect with friends, family and world!
          </span>
        </div>
        <div className="right flex-1 flex flex-col justify-center">
          <div className="loginBox h-[420px] p-5 flex flex-col rounded-xl bg-white">
            <input
              placeholder="Username"
              className="loginInput pl-5 m-2 h-14 rounded-xl border border-gray-500 text-lg focus:outline-none"
            ></input>
            <input
              placeholder="Email"
              className="loginInput pl-5 m-2 h-14 rounded-xl border border-gray-500 text-lg focus:outline-none"
            ></input>
            <input
              placeholder="Password"
              className="loginInput pl-5 m-2 h-14 rounded-xl border border-gray-500 text-lg focus:outline-none"
            ></input>
            <input
              placeholder="Password Again"
              className="loginInput pl-5 m-2 h-14 rounded-xl border border-gray-500 text-lg focus:outline-none"
            ></input>
            <button
              className="loginButton m-2 h-14 border-none rounded-xl bg-[#1775ee] text-white text-xl cursor-pointer"
              style={{ fontWeight: 500 }}
            >
              Sign Up
            </button>

            <button
              className="regButton m-2 w-1/2 self-center h-14 border-none rounded-xl bg-[#42b72a] text-white text-xl cursor-pointer"
              style={{ fontWeight: 500 }}
            >
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
