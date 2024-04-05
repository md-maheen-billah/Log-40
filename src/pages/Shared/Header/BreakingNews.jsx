import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex gap-6 p-4 bg-[#F3F3F3] mt-7">
      <button className="btn text-xl bg-[#D72050] text-white rounded-none px-6">
        Latest
      </button>
      <Marquee>
        <Link className="mr-6" to="/">
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link className="mr-6" to="/">
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link className="mr-6" to="/">
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
