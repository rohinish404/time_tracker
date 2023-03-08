import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

function Sidebar() {
  return (
    <div className="border-2 border-black p-4 h-full w-1/4 m-0 fixed top-0 left-0 bottom-0">
      <div>
        <h1 className="text-2xl text-left">5 March 2023</h1>
        <div className="flex flex-col">
          <ul className="mt-4">
            <li className="flex items-center">
              <DescriptionOutlinedIcon />
              <a href="#" className="ml-2">
                10:00-11:00
              </a>
            </li>
            <li className="flex items-center mt-2">
              <DescriptionOutlinedIcon />
              <a href="#" className="ml-2">
                11:00-12:00
              </a>
            </li>
            <li className="flex items-center mt-2">
              <DescriptionOutlinedIcon />
              <a href="#" className="ml-2">
                12:00-13:00
              </a>
            </li>
            <li className="flex items-center mt-2">
              <DescriptionOutlinedIcon />
              <a href="#" className="ml-2">
                13:00-14:00
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl text-left">6 March 2023</h1>
        <div className="flex flex-col">
          <ul className="mt-4">
            <li className="flex items-center">
              <DescriptionOutlinedIcon />
              <a href="#" className="ml-2">
                10:00-11:00
              </a>
            </li>
            <li className="flex items-center mt-2">
              <DescriptionOutlinedIcon />
              <a href="#" className="ml-2">
                11:00-12:00
              </a>
            </li>
            <li className="flex items-center mt-2">
              <DescriptionOutlinedIcon />
              <a href="#" className="ml-2">
                12:00-13:00
              </a>
            </li>
            <li className="flex items-center mt-2">
              <DescriptionOutlinedIcon />
              <a href="#" className="ml-2">
                13:00-14:00
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;