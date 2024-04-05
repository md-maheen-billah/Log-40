import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold leading-8 mb-2">All Category</h2>
      {categories.map((category, idx) => (
        <Link
          to="/"
          // to={`/category/${category.id}`}
          className="block px-[50px] py-4 text-[#9F9F9F] font-medium text-xl"
          key={idx}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
