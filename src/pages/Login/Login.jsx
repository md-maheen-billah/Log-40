import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="max-w-[752px] mx-auto mt-24 mb-24">
        <div className="mx-auto bg-[#F3F3F3] px-24 py-16">
          <div className="">
            <h2 className="text-[35px] font-semibold mb-4 text-center">
              Login your account
            </h2>
            <hr className="mb-11 mt-8" />
            <form
              onSubmit={handleLogin}
              className="w-full  items-center justify-center"
            >
              <div>
                <label className="text-xl font-semibold" htmlFor="email">
                  Email address:
                </label>
                <br />
                <input
                  className="px-4 py-4  mb-6 mt-4 w-full"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
                <br />
                <label className="text-xl font-semibold" htmlFor="password">
                  Password:
                </label>
                <br />
                <div className="relative">
                  <input
                    className=" px-4 py-4  mt-4 w-full"
                    type={showPass ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    className="absolute top-9 right-2 hover:cursor-pointer"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <IoEyeOff /> : <IoEye />}
                  </span>
                </div>
              </div>
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
              <br />
              <div className="mt-5">
                <input
                  className="rounded-lg hover:duration-300 hover:cursor-pointer hover:bg-slate-600 bg-[#403F3F] text-white w-full py-6"
                  type="submit"
                  name="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center">
              <p className="mt-6 font-semibold">
                Don&#39;t Have An Account?
                <Link to="/register" className="text-[#F75B5F]">
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
