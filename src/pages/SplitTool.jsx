import React from "react";
import Form from "../components/Form/Form";

function SplitTool() {
  const lines = [1, 2, 3, 4];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-5 sm:p-4 gap-4">
      {/* Title  */}
      <article className="bg-white col-span-2 p-4 border-l-4 border-l-green-400 rounded-sm ">
        <h2 className="text-2xl">Description</h2>
        <p className="pt-4 pb-2 text-sm text-gray-600">
          Una pequeña descripción de lo qie es esta imagen{" "}
        </p>
      </article>
      {/* Form */}
      <div className="col-span-2 md:col-span-1">
        <Form />
      </div>

      {/* Ac */}
      <div className="col-span-2 md:col-span-1 ">
        <div className="relative bg-white rounded-sm w-full h-[520px] p-4">
          sds
        </div>
      </div>
    </div>
  );
}

export default SplitTool;

/*

      
      <div className="col-span-2 md:col-span-1 ">
        <div className="relative bg-white rounded-sm w-full h-[520px] p-4">
          {lines.map((lines, index) => (
            <div
              key={index}
              top="20"
              className={`absolute h-full w-[1px] bg-red-500`}
            >
              {""}
            </div>
          ))}
          <div className=" h-full w-full rounded-md bg-gray-200">
            <img src="./" />
          </div>
        </div>
      </div>

*/
