import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { v4 as uuid } from "uuid";

//List of images
const spritePath = [
  { filename: "0" },
  { filename: "1" },
  { filename: "2" },
  { filename: "3" },
  { filename: "4" },
  { filename: "5" },
  { filename: "6" },
  { filename: "7" },
  { filename: "8" },
];

//
const Sprite = ({ url }) => {
  return (
    <div className="flex justify-center items-center bg-gray-200 max-w-[20vh] h-auto cursor-pointer overflow-hidden rounded-sm">
      <img src={url} />
    </div>
  );
};

//
function PickImage() {
  const location = useLocation();
  const currentId = location.pathname.split("/")[2];
  const imgPath = `/images/result/tile-`;
  const vector = ["3", "3"];

  return (
    <div className="flex flex-col">
      {/* Description */}
      <article className="w-full p-5 sm:p-4  ">
        <div className=" bg-white p-4 border-l-4 border-l-green-400 rounded-sm ">
          <h2 className="text-2xl">Description</h2>
          <p className="pt-4 pb-2 text-sm text-gray-600">
            Una pequeña descripción de lo qie es esta imagen{" "}
          </p>
        </div>
      </article>

      {/* Tile Grid */}
      <article className="flex justify-center p-5 sm:p-4 ">
        <div
          className={`grid grid-cols-${vector[0]} max-w-fit gap-1 bg-white rounded-sm p-4 borderborder-gray-200`}
        >
          {spritePath.map((file) => (
            <Sprite key={uuid()} url={`${imgPath}${file.filename}.png`} />
          ))}
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default PickImage;
