import { FaGoogle, FaGithub } from "react-icons/fa";
import fbicon from "../../../assets/Facebook.svg";
import twicon from "../../../assets/Twitter.svg";
import igicon from "../../../assets/Instagram.svg";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bgr from "../../../assets/bg1.png";
const RightSideNav = () => {
  return (
    <div className="p-1 ">
      <div>
        <h2 className="text-2xl font-semibold mb-5">Login With</h2>
        <button className="btn text-[#406995] mb-2 bg-white border-2 border-[#406995] w-full">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn text-black bg-white border-2 border-black w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="mt-11 w-full">
        <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
        <div className="rounded-lg rounded-b-none bg-white border-2 border-[#E7E7E7]">
          <Link className="flex items-center p-4 gap-4 text-[#706F6F] ">
            <img src={fbicon} alt="" />
            Facebook
          </Link>
        </div>
        <div className="rounded-lg rounded-t-none border-b-0 border-t-0 rounded-b-none bg-white border-2 border-[#E7E7E7]">
          <Link className="flex items-center p-4 gap-4 text-[#706F6F] ">
            <img src={twicon} alt="" />
            Twitter
          </Link>
        </div>
        <div className="rounded-lg rounded-t-none bg-white border-2 border-[#E7E7E7]">
          <Link className="flex items-center p-4 gap-4 text-[#706F6F] ">
            <img src={igicon} alt="" />
            Instagram
          </Link>
        </div>
      </div>
      <div className="mt-5 p-4 bg-[#F3F3F3]">
        <h2 className="text-2xl font-semibold mb-5">Q-Zone</h2>
        <div className="space-y-5">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(180deg, #070211 0%, rgba(7, 2, 17, 0) 100%),
          url(${bgr})`,
          backgroundRepeat: "no-repeat",
          // Adjust the blur value as needed
        }}
        className="mt-5 py-16 px-10 text-center"
      >
        <h2 className="text-[30px]  text-white  font-bold mb-5">
          Create an Amazing Newspaper
        </h2>
        <p className="text-base leading-7 text-white   mb-7">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn text-xl bg-[#D72050] border-[#D72050] text-white rounded-none px-6">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
