import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineScissor } from "react-icons/ai";
import { RiImageLine } from "react-icons/ri";
import NavBtn from "./NavBtn";
import { v4 as uuid } from "uuid";

// Set the fields of the Navbar
export const Menus = [
  { title: "Home", icon: <AiOutlineHome />, url: "home" },
  { title: "Split Tool", icon: <AiOutlineScissor />, url: "split-tool" },
  { title: "Pick Image", icon: <RiImageLine />, url: "pick" },
];

//
function Navbar() {
  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 w-full h-[62px] z-[100] bg-white border-b border-gray-200"
    >
      <div
        id="navbar-container"
        className="flex items-center justify-between w-full h-full px-4"
      >
        {/* logo */}
        <a href="/" id="navbar-logo" className="flex items-center">
          <div className="w-[32px] h-[32px] rounded-[3px]">
            <img
              src={"logo.png"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "default-img.png";
              }}
              alt="logo"
              className="w-[32px] h-[32px]"
            />
          </div>
          <p className="text-md ml-3 text-gray-800">TILEZ</p>
        </a>

        {/* buttons */}
        <div className="flex items-center">
          <ul className="flex gap-1">
            {Menus.map((menu) => (
              <NavBtn
                key={uuid()}
                text={menu.title}
                url={menu.url}
                icon={menu.icon}
              />
            ))}
          </ul>
          <div className="pl-6 sm:pl-8 pr-2">
            <button className="bg-gray-200 h-[42px] w-[42px] rounded-[4px] text-sm">
              us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
