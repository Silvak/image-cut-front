import { useState } from "react";
import { useField } from "../../Hooks/useField";

//
//
function Form() {
  const [image, setImage] = useState(null);
  const rows = useField({ init: 1, type: "number" });
  const cols = useField({ init: 1, type: "number" });
  const filename = useField({ init: "name", type: "text" });
  const format = useField({ init: "png", type: "text" });

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("rows", rows.value);
    formData.append("cols", cols.value);
    formData.append("filename", filename.value || image.name);
    formData.append("format", format.value);

    const response = await fetch("http://localhost:4000/image", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 w-full h-[520px] py-9 px-8 bg-white rounded-sm"
    >
      <div className="max-w-[600px]">
        <h2 className="text-xl font-bold">Envia tu imagen</h2>

        <div className="flex gap-4 w-full">
          <label className="w-full">
            <span className="text-[14px]">Filas</span>
            <input
              required
              min="1"
              {...rows}
              className="bg-gray-200/80 rounded-sm h-[32px] px-[4px] w-full"
            />
          </label>
          <label className="w-full">
            <span className="text-[14px]">Columnas</span>
            <input
              required
              min="1"
              {...cols}
              className="bg-gray-200/80 rounded-sm h-[32px] px-[4px] w-full"
            />
          </label>
        </div>

        <label className="w-full">
          <span className="text-[14px]">Filename</span>
          <input
            required
            {...filename}
            className="bg-gray-200/80 rounded-sm h-[32px] px-[4px] w-full"
          />
        </label>

        <label className="flex justify-center w-full pt-4 pb-10 ">
          Extensión
          <select
            {...format}
            className="bg-green-400 ml-3 rounded-sm px-3 h-[32px] "
          >
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
          </select>
        </label>

        <div className="flex justify-center items-center bg-gray-200 w-full h-40 rounded-md">
          <label>
            Imagen
            <input
              required
              accept="image/png, image/jpg"
              type="file"
              onChange={handleImageChange}
            />
          </label>
        </div>

        <button
          className="mt-8 bg-green-400 w-full text-white rounded-sm  h-[32px]"
          type="submit"
        >
          Cortar
        </button>
      </div>
    </form>
  );
}

export default Form;
