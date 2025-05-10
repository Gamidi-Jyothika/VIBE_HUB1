/*import { useDisclosure } from "@chakra-ui/hooks";
import React, { useEffect, useRef, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { mainu } from "./SidebarConfig";
import "./Sidebar.css";
import SearchComponent from "../SearchComponent/SearchComponent";
import { useSelector } from "react-redux";
import CreatePostModal from "../Post/Create/CreatePostModal";
import CreateReelModal from "../Create/CreateReel";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Home");
  const excludedBoxRef = useRef(null);
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((store) => store);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isCreateReelModalOpen, setIsCreateReelModalOpen] = useState(false);

  // ✅ Unified Handle Tab Click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const lowerTab = tab.toLowerCase();

    if (lowerTab === "profile") {
      navigate(`/${user.reqUser?.username}`);
    } else if (lowerTab === "home") {
      navigate("/");
    } else if (lowerTab === "create") {
      onOpen();
    } else if (lowerTab === "reels") {
      navigate("/reels");
    } else if (lowerTab === "create reels") {
      setIsCreateReelModalOpen(true);
    }

    setIsSearchBoxVisible(lowerTab === "search");
  };

  // ✅ Dropdown Toggle
  const handleClick = () => {
    setShowDropdown((prev) => !prev);
  };

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // ✅ Handle Modal Close
  const handleCloseCreateReelModal = () => {
    setIsCreateReelModalOpen(false);
  };

  return (
    <div className="sidebar-container sticky top-0 h-[100vh] pb-10 flex">
      <div
        className={`${
          activeTab === "Search" ? "px-3" : "px-10"
        } flex flex-col justify-between h-full w-[250px]`}
      >
        <div className="pt-10">
          {!isSearchBoxVisible && (
            <img className="w-40" src="vibepic.png" alt="VibePic Logo" />
          )}
          <div className="mt-10">
            {mainu.map((item) => (
              <div
                key={item.title}
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p
                  className={`ml-3 ${
                    activeTab === item.title ? "font-bold" : "font-semibold"
                  } ${isSearchBoxVisible ? "hidden" : "block"}`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        */

       /* {/* More Dropdown */
       /* <div className="relative">
          <div onClick={handleClick} className="flex items-center cursor-pointer">
            <IoReorderThreeOutline className="text-2xl" />
            {!isSearchBoxVisible && <p className="ml-5">More</p>}
          </div>
          {showDropdown && (
            <div className="absolute bottom-20 left-0 w-[200px] bg-white shadow-md border rounded-md">
              <p className="py-2 px-4 cursor-pointer hover:bg-gray-100">
                Switch Appearance
              </p>
              <p className="py-2 px-4 cursor-pointer hover:bg-gray-100">
                Saved
              </p>
              <p
                onClick={handleLogout}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100 text-red-500"
              >
                Log out
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Search Box */
      /*{isSearchBoxVisible && (
        <div className="w-full px-5">
          <SearchComponent setIsSearchVisible={setIsSearchBoxVisible} />
        </div>
      )}

      {/* Create Post Modal */
    /*  <CreatePostModal onClose={onClose} isOpen={isOpen} onOpen={onOpen} />

     /* {/* Create Reel Modal */
    /*  <CreateReelModal
        onClose={handleCloseCreateReelModal}
        isOpen={isCreateReelModalOpen}
        onOpen={() => setIsCreateReelModalOpen(true)}
      />
    </div>
  );
};

export default Sidebar;
*/
import { useDisclosure } from "@chakra-ui/hooks";
import React, { useRef, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { mainu } from "./SidebarConfig";
import "./Sidebar.css";
import SearchComponent from "../SearchComponent/SearchComponent";
import { useSelector } from "react-redux";
import CreatePostModal from "../Post/Create/CreatePostModal";
import CreateReelModal from "../Create/CreateReel";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Home");
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((store) => store);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isCreateReelModalOpen, setIsCreateReelModalOpen] = useState(false);

  // ✅ Unified Handle Tab Click
  const handleTabClick = (tab) => {
  setActiveTab(tab);
  const lowerTab = tab.toLowerCase();

  if (lowerTab === "profile") {
    navigate(`/${user.reqUser?.username}`);
  } else if (lowerTab === "home") {
    navigate("/");
  } else if (lowerTab === "create") {
    onOpen();
  } else if (lowerTab === "reels") {
    navigate("/reels");
  } else if (lowerTab === "create reels") {
    setIsCreateReelModalOpen(true);
  } else if (lowerTab === "messages") {
    navigate("/messages");
  } else if (lowerTab === "notifications") {
    navigate("/notifications");
  }

  setIsSearchBoxVisible(lowerTab === "search");
  // Inside handleTabClick function:
const handleTabClick = (tab) => {
  console.log("Clicked Tab:", tab); // Log which tab was clicked
  setActiveTab(tab);
  const lowerTab = tab.toLowerCase();
  
  if (lowerTab === "profile") {
    console.log("Navigating to Profile");
    navigate(`/${user.reqUser?.username}`);
  } else if (lowerTab === "home") {
    console.log("Navigating to Home");
    navigate("/");
  } else if (lowerTab === "create") {
    console.log("Opening Create Post Modal");
    onOpen();
  } else if (lowerTab === "reels") {
    console.log("Navigating to Reels");
    navigate("/reels");
  } else if (lowerTab === "create reels") {
    console.log("Opening Create Reel Modal");
    setIsCreateReelModalOpen(true);
  } else if (lowerTab === "messages") {
    console.log("Navigating to Messages");
    navigate("/messages");
  } else if (lowerTab === "notifications") {
    console.log("Navigating to Notifications");
    navigate("/notifications");
  }

  setIsSearchBoxVisible(lowerTab === "search");
  console.log("Search Box Visibility:", isSearchBoxVisible);
};

// In the render method, to see if the items are rendering properly
console.log("Sidebar Rendered");

};
  


  // ✅ Dropdown Toggle with Animation
  const handleClick = () => {
    setShowDropdown((prev) => !prev);
  };

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  
  };
  // ✅ Handle Modal Close
  const handleCloseCreateReelModal = () => {
    setIsCreateReelModalOpen(false);
  };

  return (
    <div className="sidebar-container sticky top-0 h-[100vh] pb-10 flex">
      <div
        className={`${
          activeTab === "Search" ? "px-3" : "px-10"
        } flex flex-col justify-between h-full w-[250px]`}
      >
        <div className="pt-10">
          {!isSearchBoxVisible && (
            <img className="w-40" src="vibepic.png" alt="VibePic Logo" />
          )}
          <div className="mt-10">
            {mainu.map((item) => (
              <div
                key={item.title}
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p
                  className={`ml-3 ${
                    activeTab === item.title ? "font-bold" : "font-semibold"
                  } ${isSearchBoxVisible ? "hidden" : "block"}`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* More Dropdown with Animation */}
        <div className="relative">
          <div
            onClick={handleClick}
            className="flex items-center cursor-pointer"
          >
            <IoReorderThreeOutline className="text-2xl" />
            {!isSearchBoxVisible && <p className="ml-5">More</p>}
          </div>
          <div
            className={`absolute bottom-20 left-0 w-[200px] bg-white shadow-md border rounded-md transition-transform duration-300 transform ${
              showDropdown ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            } origin-top`}
          >
            <p className="py-2 px-4 cursor-pointer hover:bg-gray-100">
              Switch Appearance
            </p>
            <p className="py-2 px-4 cursor-pointer hover:bg-gray-100">
              Saved
            </p>
            <p
              onClick={handleLogout}
              className="py-2 px-4 cursor-pointer hover:bg-gray-100 text-red-500"
            >
              Log out
            </p>
          </div>
        </div>
      </div>

      {/* Search Box */}
      {isSearchBoxVisible && (
        <div className="w-full px-5">
          <SearchComponent setIsSearchVisible={setIsSearchBoxVisible} />
        </div>
      )}

      {/* Create Post Modal */}
      <CreatePostModal onClose={onClose} isOpen={isOpen} onOpen={onOpen} />

      {/* Create Reel Modal */}
      <CreateReelModal
        onClose={handleCloseCreateReelModal}
        isOpen={isCreateReelModalOpen}
        onOpen={() => setIsCreateReelModalOpen(true)}
      />
    </div>
  );
}

export default Sidebar;

