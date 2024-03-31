import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { URL } from "../Utils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Login = () => {
  const userRef = useRef(null);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.trim().length === 0 || pwd.trim().length === 0) {
      //TODO add toast
      setErrMsg("Invalid Entry");
      return;
    }

    await axios
      .post(`${URL}/login`, {
        username: user,
        password: pwd,
      })
      .then((res) => {
        if (res.status === 200) {
          handleLogin(res.data);
          navigate("/");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full grid place-content-center bg-white">
        <section className="text-[1.5rem] py-14 px-2 sm:px-10 border border-gray-400 bg-zinc-100 max-w-screen-md">
          <h1 className="font-bold text-[2rem] text-blue-800 mb-8">
            Login
            <br />
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label htmlFor="username" className="flex items-center">
              Username:
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              className="outline-none border border-gray-400 pl-2"
            />
            <label htmlFor="password" className="flex items-center">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              className="outline-none border border-gray-400 pl-2"
            />
            <button className={`bg-black cursor-pointer text-white mt-8 btn`}>
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
