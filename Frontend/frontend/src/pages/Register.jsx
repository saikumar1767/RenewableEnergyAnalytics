import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { URL } from "../Utils";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Regsiter = () => {
  const userRef = useRef(null);
  const errRef = useRef(null);
  const [user, setUser] = useState("");

  const [validName, setValidName] = useState(false);

  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");

  const [validPwd, setValidPwd] = useState(false);

  const [pwdFocus, setPwdFocus] = useState(false);

  const [email, setEmail] = useState("");

  const [validEmail, setValidEmail] = useState(false);

  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);

    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }

    await axios
      .post(`${URL}/register`, {
        username: user,
        email: email,
        password: pwd,
      })
      .then((res) => {
        if (res.status === 201) {
          navigate("/login");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full grid place-content-center bg-white">
        <section className="text-[1.5rem] py-14 px-2 sm:px-10 border border-gray-400 bg-zinc-100 max-w-screen-md">
          {/* <p ref={errRef} className={`font-bold`}></p> */}

          <h1 className="font-bold text-[2rem] text-blue-800 mb-8">
            Register
            <br />
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label htmlFor="username" className="flex items-center">
              Username:
              <span
                className={`${validName ? "visible" : "hidden"} text-green-700`}
              >
                <Icon icon="subway:tick" />
              </span>
              <span
                className={`${
                  validName || !user ? "hidden" : "visible"
                } text-red-700 font-bold`}
              >
                <Icon icon="icomoon-free:cross" />
              </span>
            </label>

            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validPwd ? "false" : "true"}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="outline-none border border-gray-400 pl-2"
            />

            <p
              id="uidnote"
              className={`${
                userFocus && user && !validName ? "" : "hidden"
              } text-[1rem]`}
            >
              <Icon icon="akar-icons:info-fill" className="inline-block" />
              &nbsp; 4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="email" className="flex items-center">
              Email:
              <span
                className={`${
                  validEmail ? "visible" : "hidden"
                } text-green-700`}
              >
                <Icon icon="subway:tick" />
              </span>
              <span
                className={`${
                  validEmail || !email ? "hidden" : "visible"
                } text-red-700 font-bold`}
              >
                <Icon icon="icomoon-free:cross" />
              </span>
            </label>

            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="outline-none border border-gray-400 pl-2"
            />

            <p
              id="uidnote"
              className={`${email && !validEmail ? "" : "hidden"} text-[1rem]`}
            >
              <Icon icon="akar-icons:info-fill" className="inline-block" />
              &nbsp; Enter a valid email.
            </p>

            <label htmlFor="password" className="flex items-center">
              Password:
              <span
                className={`${validPwd ? "visible" : "hidden"} text-green-700`}
              >
                <Icon icon="subway:tick" />
              </span>
              <span
                className={`${
                  validPwd || !pwd ? "hidden" : "visible"
                } text-red-700`}
              >
                <Icon icon="icomoon-free:cross" />
              </span>
            </label>

            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              onFocus={() => setPwdFocus(true)}
              className="outline-none border border-gray-400 pl-2"
              onBlur={() => setPwdFocus(false)}
            />

            <p
              id="pwdnote"
              className={`${
                pwdFocus && pwd && !validPwd ? "visible" : "hidden"
              } text-[1rem] max-w-fit`}
            >
              <Icon icon="akar-icons:info-fill" className="inline-block" />
              &nbsp; 8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters,
              <br /> a number and a special character.
              <br />
              Allowed special characters:
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>
            <button
              disabled={!validName || !validPwd || !validEmail ? true : false}
              className={`${
                validName && validPwd && validEmail
                  ? "bg-black"
                  : " bg-gray-600"
              } text-white mt-8 btn`}
            >
              Register
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Regsiter;
