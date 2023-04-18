import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiImageLine } from "react-icons/ri";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { v4 as uuid } from "uuid";

const FilesList = () => [
  { title: "File 1", url: "1" },
  { title: "File 2", url: "2" },
  { title: "File 3", url: "3" },
  { title: "File 4", url: "4" },
  { title: "File 5", url: "5" },
  { title: "File 6", url: "6" },
];

//
const ImageLink = ({ url, title, open }) => {
  const location = useLocation();
  const currentId = location.pathname.split("/")[2];

  return (
    <Link to={`/pick/${url}` || "/"}>
      <li
        className={`flex justify-start items-center gap-1 text-gray-600 rounded-[4px] border border-white duration-100 pl-[11px] ${
          currentId == url ? "bg-[#55D791] text-white" : "hover:border-gray-200"
        } ${open ? "h-[42px] w-full " : "h-[42px] w-[42px]"}`}
      >
        <span className="w-[10%]">
          <RiImageLine
            className={` text-lg
          ${
            currentId == url
              ? "bg-[#55D791] text-white"
              : "hover:border-gray-200"
          }`}
          />
        </span>
        <span
          className={`ml-1 text-sm duration-100 ${
            currentId == url ? " text-white" : "hover:border-gray-200"
          } ${open ? "flex" : "hidden"} `}
        >
          {title}
        </span>
      </li>
    </Link>
  );
};

// -------------------- SIDBAR--------------------------
function Sidebar() {
  const [open, setOpen] = useState(true);
  const [found, setFound] = useState([]);
  const [search, setSearch] = useState("");

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleSerach = (e) => {
    e.preventDefault();
    if (open == false) {
      setOpen(true);
    }
    //filter
    if (search != "") {
      const filterFiles = found.filter((file) => {
        if (file.title.toUpperCase().includes(search.toUpperCase()))
          return true;
        return false;
      });
      setFound(filterFiles);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFound(FilesList);
  }, []);

  useEffect(() => {
    setFound(FilesList);
  }, [search]);

  return (
    <aside
      className={`fixed sm:relative h-screen bg-white border-r border-gray-300 duration-150 ${
        open == true ? "w-[320px] sm:w-[380px]" : "w-[68px]"
      }`}
    >
      <div id="Sidebar" className="flex flex-col h-[600px] mt-[78px] px-3">
        {/* Serach input */}
        <div id="Search" className="flex pt-3">
          <input
            id="search-file"
            type="text"
            placeholder="file..."
            value={search}
            onChange={handleChange}
            className={`bg-[#F5F6F7] h-[42px] rounded-sm pl-2 outline-none duration-150 ${
              open ? "w-[86%]" : "hidden"
            }`}
          />
          <button
            htmlFor="search-file"
            className="flex items-center justify-center w-[42px] h-[42px] text-[12px] bg-[#dadada] rounded-[4px] hover:bg-gray-200"
            onClick={handleSerach}
          >
            <span>
              <FiSearch className="text-xl text-gray-800" />
            </span>
          </button>
        </div>

        {/* Image list */}
        <ul className="flex flex-col mt-8 gap-[8px]">
          {found.map((file) => (
            <ImageLink
              key={uuid()}
              title={file.title}
              url={file.url}
              open={open}
            />
          ))}
        </ul>
      </div>

      {/* Button close/Open */}
      <button
        className="absolute w-[24px] h-[30px] top-[48%] -right-[12px] bg-white border border-gray-200 rounded-[4px]"
        onClick={handleOpen}
      >
        <span className="flex justify-center items-center text-xl text-gray-600 duration-100">
          {open ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}
        </span>
      </button>
    </aside>
  );
}

export default Sidebar;
