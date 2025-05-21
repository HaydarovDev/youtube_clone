import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import {
  IoIosNotificationsOutline,
  IoIosSearch,
  IoMdAdd,
} from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import avatar from "../../assets/img/avatar.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="logo flex items-center gap-3">
        <button className="text-2xl cursor-pointer hover:bg-gray-200">
          <FiMenu />
        </button>
        <a
          href=""
          className="cursor-pointer flex gap-1 items-center"
          title="YouTube Home"
        >
          <FaYoutube className="text-red-600 text-3xl" />
          <h1 className=" youTubeFont text-2xl">YouTube</h1>
        </a>
      </div>

      <div className="flex items-center gap-2">
        <label
          htmlFor=""
          className="flex border border-gray-500 items-center rounded-[50px] overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search"
            className="pl-2 w-[450px] outline-0 py-2"
          />
          <IoIosSearch
            className="w-[55px] h-[40px] bg-gray-100 border-l border-gray-500 py-2 cursor-pointer"
            title="Search"
          />
        </label>
        <button className="relative flex justify-center items-end group rounded-[50px]">
          <MdKeyboardVoice className="w-[40px] h-[40px] bg-gray-100 cursor-pointer p-2 rounded-[50%]" />
          <span className="hidden absolute min-w-[150px] rounded py-2 top-12 group-hover:block text-[14px] bg-gray-200">
            Search with your voice
          </span>
        </button>
      </div>

      <div className="flex gap-4 text-2xl items-center">
        <button className="flex text-[15px] rounded-[50px] bg-gray-100 items-center p-2">
          <IoMdAdd />
          Create
        </button>
        <button>
          <IoIosNotificationsOutline className="cursor-pointer" />
        </button>
        <img className="w-[35px] h-[35px] cursor-pointer" src={avatar} alt="" />
      </div>
    </header>
  );
};

export default Header;
