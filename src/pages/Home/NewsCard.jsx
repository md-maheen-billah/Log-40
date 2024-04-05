import { FaStar } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
const NewsCard = ({ nNews }) => {
  return (
    <div className="mb-7">
      <div className="flex gap-6 p-4 bg-[#f3f3f3] rounded-t-xl">
        <img className="w-[50px] rounded-full" src={nNews.author.img} alt="" />
        <div>
          <h2 className="leading-7 font-semibold">{nNews.author.name}</h2>
          <p className="text-sm">{nNews.author.published_date}</p>
        </div>
      </div>
      <div className="px-5 py-4 border-b-2 border-r-2 border-l-2 rounded-md">
        <h2 className="mb-5 text-xl font-bold leading-9">{nNews.title}</h2>
        <img src={nNews.image_url} alt="" />

        {nNews.details.length > 250 ? (
          <p className="mt-8 leading-7 text-[#706F6F]">
            {nNews.details.slice(0, 250)}...
          </p>
        ) : (
          <p className="mt-8 leading-7 text-[#706F6F]">{nNews.details}</p>
        )}

        <Link
          to={`/news/${nNews._id}`}
          className="text-[#fe8949] font-semibold leading-7"
        >
          Read More
        </Link>
        <hr className="my-5" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex text-[#FF8C47]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>{nNews.rating.number}</p>
          </div>
          <div className="flex items-center gap-3">
            <IoEye></IoEye>
            <p>{nNews.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
