import "./App.css";
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineCalendar,
  AiOutlineUsergroupAdd,
  AiOutlineLogout,
  AiOutlineLogin,
} from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import {
  IoSettingsOutline,
  IoGlobeOutline,
  IoCheckmarkDoneCircleOutline,
} from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { CgCalendarNext, CgTag } from "react-icons/cg";
import { RiSurroundSoundLine, RiGalleryLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiPaintBrushLight, PiLightning } from "react-icons/pi";
import { LiaBookSolid } from "react-icons/lia";
import { GoTrash } from "react-icons/go";
import { ImCopy } from "react-icons/im";
import img1 from "./images/Observing.jpeg";
import img2 from "./images/Cooking.jpeg";
import img3 from "./images/Self_Caring.jpeg";
import img4 from "./images/Singing.jpeg";
import img5 from "./images/Reading.jpeg";

function App() {
  return (
    <div className="flex">
      <div className="w-1/5 pd-2 bg-orange-300 h-screen ">
        {/* Left side content */}
        <div className="flex">
          <div className=" w-1/4 ml-3 rounded my-5 ms-5 bg-orange-200 h-screen">
            <div>
              <AiOutlineHome className="fill-black ml-2 mt-3" size={20} />
              <AiOutlineAppstore className="fill-black ml-2 mt-3" size={20} />
              <AiOutlineCalendar className="fill-black ml-2 mt-3" size={20} />
              <AiOutlineUsergroupAdd
                className="fill-black ml-2 mt-3 mb-80"
                size={20}
              />
            </div>
            <div>
              <BiBell className="fill-black ml-2 mt-3" size={20} />
              <IoSettingsOutline className="fill-black ml-2 mt-3" size={20} />
              <AiOutlineLogout className="fill-black ml-2 mt-3" size={20} />
            </div>
          </div>
          <div className="w-3/4  rounded my-5  bg-white h-screen">
            <div className="flex">
              <SlCalender className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">All day</span>
            </div>

            <div className="flex">
              <AiOutlineLogin className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Today</span>
            </div>
            <div className="flex">
              <CgCalendarNext className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Tomorrow</span>
            </div>
            <div className="flex">
              <RiSurroundSoundLine className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Next 7 days</span>
            </div>
            <div className="flex">
              <RiGalleryLine className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Inbox</span>
            </div>
            <div className="flex mt-2 ml-4 font-medium">Lists</div>
            <div className="flex">
              <MdOutlineWorkOutline
                className="fill-black ml-2 mt-3"
                size={15}
              />
              <span className="text-sm ml-2 mt-2">Work</span>
            </div>
            <div className="flex">
              <PiPaintBrushLight className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Freelance</span>
            </div>
            <div className="flex">
              <PiLightning className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Workout</span>
            </div>
            <div className="flex">
              <IoGlobeOutline className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Learning</span>
            </div>
            <div className="flex">
              <LiaBookSolid className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Reading</span>
            </div>
            <div className="flex mt-2 ml-4 font-medium">Tags</div>
            <div className="flex">
              <CgTag
                className="fill-black ml-2 mt-3 text-purple-700"
                size={15}
              />
              <span className="text-sm ml-2 mt-2">Work.....</span>
            </div>
            <div className="flex">
              <CgTag className="fill-black ml-2 mt-3 text-blue-700" size={15} />
              <span className="text-sm ml-2 mt-2">uxresearch</span>
            </div>
            <div className="flex">
              <CgTag className="fill-black ml-2 mt-3 text-pink-600" size={15} />
              <span className="text-sm ml-2 mt-2">inspiration</span>
            </div>
            <div className="flex">
              <CgTag
                className="fill-black ml-2 mt-3 text-orange-600"
                size={15}
              />
              <span className="text-sm ml-2 mt-2">meeting</span>
            </div>
            <div className="flex">
              <CgTag
                className="fill-black ml-2 mt-3 text-green-600"
                size={15}
              />
              <span className="text-sm ml-2 mt-2">designteam</span>
            </div>
            <div className="flex">
              <IoCheckmarkDoneCircleOutline
                className="fill-black ml-2 mt-3"
                size={15}
              />
              <span className="text-sm ml-2 mt-2">Completed</span>
            </div>
            <div className="flex">
              <GoTrash className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Trash</span>
            </div>
            <div className="flex">
              <ImCopy className="fill-black ml-2 mt-3" size={15} />
              <span className="text-sm ml-2 mt-2">Summary</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 bg-orange-100 h-screen">
        {/* Right side content */}
        <div className="flex">
          <div className=" w-3/4 rounded my-5 bg-slate-100	 h-screen">
            <form class="max-w-2xl mt-3 mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 h-5 text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />

                {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
              </div>
              <div className="flex gap-12">
                <div className="relative">
                  <div className="text-xl font-semibold mt-5">
                    Todays Activities
                  </div>
                  <div className="text-sm">
                    Manage your habits, reminders, events, acitivies.
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    id="defaut-text"
                    defaultValue="+ New Activity"
                    class="block w-40 p-4 ps-10 h-5 text-sm mt-3 ml-20  text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="text-md mt-3 py-4 font-medium">Your Habits </div>
              <div className="flex gap-6 flex-direction-column">
                <div className="relative bg-white px-2 py-2 roundrd">
                  <div>
                    <img src={img1} alt="Observing" />
                  </div>
                  <div className="text-center font-normal text-sm mt-1">
                    Observing
                  </div>
                  <div className="text-center font-normal text-xs text-gray-400">
                    07:00-07:30
                  </div>
                </div>

                <div className="relative bg-white px-2 py-2 roundrd-s">
                  <div>
                    <img src={img2} alt="Cooking" />
                  </div>
                  <div className="text-center font-normal text-sm mt-1">
                    Cooking
                  </div>
                  <div className="text-center font-normal text-xs text-gray-400">
                    09:00-10:00
                  </div>
                </div>

                <div className="relative bg-white px-2 py-2 roundrd-xl">
                  <div>
                    <img src={img3} alt="Self Caring" />
                  </div>
                  <div className="text-center font-normal text-sm mt-1">
                    Self Caring
                  </div>
                  <div className="text-center font-normal text-xs text-gray-400">
                    11:00-12:00
                  </div>
                </div>

                <div className="relative bg-white px-2 py-2 roundrd-s">
                  <div>
                    <img src={img4} alt="Singing" />
                  </div>
                  <div className="text-center font-normal text-sm mt-1">
                    Singing
                  </div>
                  <div className="text-center font-normal text-xs text-gray-400">
                    14:00-14:30
                  </div>
                </div>

                <div className="relative bg-white px-2 py-2 roundrd-s">
                  <div>
                    <img src={img5} alt="Reading" />
                  </div>
                  <div className="text-center font-normal text-sm mt-1">
                    Reading
                  </div>
                  <div className="text-center font-normal text-xs text-gray-400">
                    16:00-17:30
                  </div>
                </div>
              </div>

              <div className="text-md mt-3 py-4 font-medium">Reminders</div>
              <div className="flex grid grid-cols-3 divided-x gap-6">
                <div className="flex bg-white px-2 py-2 roundrd">
                  <div>
                    <input
                      type="text"
                      id="defaut-text"
                      defaultValue="work"
                      class="block w-16 p-4 h-1 text-xs mt-3 ml-2 bg-fuchsia-200  text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="flex">
                    <MdOutlineWorkOutline
                      className="fill-black ml-2 mt-6"
                      size={15}
                    />
                    <span className="text-sm ml-3 mt-3">Work</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      :
                    </button>
                  </div>
                </div>

                <div>2</div>

                <div>3</div>
              </div>
            </form>
          </div>

          <div className="w-1/4 rounded my-5 mr-3 bg-white h-screen"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
