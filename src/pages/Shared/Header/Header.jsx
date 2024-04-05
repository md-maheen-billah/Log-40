import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-12">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-lg mt-5 mb-[10px] text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium">
        {moment().format("dddd,")}
        <span className="text-[#706F6F]">
          {moment().format(" MMMM D, YYYY")}
        </span>
      </p>
    </div>
  );
};

export default Header;
