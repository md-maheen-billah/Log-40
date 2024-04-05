import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
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
              Register your account
            </h2>
            <hr className="mb-11 mt-8" />
            <form
              onSubmit={handleRegister}
              className="w-full  items-center justify-center"
            >
              <div>
                <label className="text-xl font-semibold" htmlFor="name">
                  Your Name:
                </label>
                <br />
                <input
                  className="px-4 py-4  mb-6 mt-4 w-full"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
                <label className="text-xl font-semibold" htmlFor="photo">
                  Photo URL:
                </label>
                <br />
                <input
                  className="px-4 py-4  mb-6 mt-4 w-full"
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Enter your photo URL"
                  required
                />
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
              <div>
                <input type="checkbox" name="terms" id="terms" required />
                <label className="ml-2" htmlFor="terms">
                  Accept our{" "}
                  <a href="">
                    <span className="font-semibold">Terms & Conditions</span>
                  </a>
                </label>
              </div>
              <div className="mt-5">
                <input
                  className="rounded-lg hover:duration-300 hover:cursor-pointer hover:bg-slate-600 bg-[#403F3F] text-white w-full py-6"
                  type="submit"
                  name="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
