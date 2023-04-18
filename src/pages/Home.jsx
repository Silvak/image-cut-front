import React from "react";
import Footer from "../components/Footer";
import { useState } from "react";

function Home() {
  return (
    <div className="flex flex-col">
      {/* Description */}
      <article className="w-full p-5 sm:p-4">
        <div className=" bg-white p-4 border-l-4 border-l-green-400 rounded-sm ">
          <h2 className="text-2xl">Description</h2>
          <p className="pt-4 pb-2 text-sm text-gray-600">
            Una pequeña descripción de lo qie es esta imagen{" "}
          </p>
        </div>
      </article>

      <article className="grid grid-clos-1 sm:grid-cols-3 gap-4 p-5 sm:p-4">
        <div className="flex items-center bg-white p-4 border-l-4 border-l-blue-400 rounded-sm ">
          <h2 className="text-2xl">Documentos totaltes</h2>
          <p className="text-2xl font-bold pl-5 text-gray-600">14</p>
        </div>

        <div className="flex items-center bg-white p-4 border-l-4 border-l-red-400 rounded-sm ">
          <h2 className="text-2xl">Imagenes editadas</h2>
          <p className="text-2xl font-bold pl-5 text-gray-600">5</p>
        </div>

        <div className="flex items-center bg-white p-4 border-l-4 border-l-purple-400 rounded-sm ">
          <h2 className="text-2xl">Descargas </h2>
          <p className="text-2xl font-bold pl-5 text-gray-600">2</p>
        </div>
      </article>

      <article className="w-full p-5 sm:p-4">
        <div className="w-full h-72 bg-white p-4 rounded-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ullam
            voluptatum excepturi amet qui necessitatibus obcaecati sint tenetur,
            ipsum rem voluptas reiciendis error sit odio suscipit, accusantium
            quasi hic soluta!
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default Home;
