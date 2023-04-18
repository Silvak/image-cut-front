import { Link, useLocation } from "react-router-dom";

function NavBtn({ text, url, icon }) {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  return (
    <Link to={url || "/"}>
      <li
        className={`flex items-center justify-center h-[42px] w-[42px] sm:w-[110px] rounded-[4px] border border-white text-sm duration-100 ${
          currentPath == url
            ? "bg-[#55D791] text-white"
            : "hover:border-gray-200"
        }`}
      >
        <span className="">{icon}</span>
        <span className="hidden sm:flex ml-1 ">{text}</span>
      </li>
    </Link>
  );
}

export default NavBtn;
