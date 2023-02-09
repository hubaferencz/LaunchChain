import React from "react";
import { Route, Routes } from "react-router-dom";

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";

const App = () => {
  return (
    <>
      <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>

        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          </Routes>
        </div>
      </div>

      <footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 ">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          built by{" "}
          <u>
            <a href="https://hubaferencz.com/" target={"_blank"}>
              Huba Ferencz
            </a>
          </u>
        </span>
      </footer>
    </>
  );
};

export default App;
