import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import "./index.css";

function App() {
  return (
    <div id="Home" className="w-screen h-screen bg-gray-300/90 overflow-hidden">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <article className="flex justify-center w-full h-[100vh] overflow-y-auto pl-[68px] sm:pl-0 pt-[62px]">
          <div className="max-w-[1400px]">
            <Outlet />
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
