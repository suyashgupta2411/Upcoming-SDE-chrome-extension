"use client";

import Calender from "./components/Calender";
import SearchBar from "./components/SearchBar";
import Heading from "./components/Heading";
import SDEsheet from "./components/SDEsheet";
import GoogleIconsBar from "./components/GoogleIconsBar";
import MusicPlayer from "./components/MusicPlayer";
export default function Home() {
  return (
    <div className="h-screen overflow-hidden p-3 bg-[url('/bg-image.jpg')] bg-cover">
      <div className="h-full w-full border border-gray-300 box-border rounded-md shadow-[0_0_7px_rgba(0,0,0,1)]  shadow-gray-300">
        {/* Grid Layout */}
        <div className="grid grid-cols-8 grid-rows-7 gap-2 h-full">
          {/* Heading */}
          <div
            id="heading"
            className="row-start-1 row-end-2 col-start-4 col-end-6  rounded-md flex items-center justify-center"
          >
            <Heading />
          </div>

          {/* Calendar */}
          <div
            id="calendar"
            className="row-start-1 row-end-3 col-start-1 col-end-3 rounded-md flex items-center justify-center w-full h-full"
          >
            <Calender />
          </div>

          {/* Info */}
          <div
            id="info"
            className="row-start-1 row-end-2 col-start-7 col-end-9  rounded-md flex items-center justify-center"
          >
            Info
          </div>

          {/* Gemini Search Bar */}
          <div
            id="gemini-search-bar"
            className="row-start-2 row-end-3 col-start-3 col-end-7  rounded-md flex items-center justify-center"
          >
            <SearchBar />
          </div>

          {/* LinkedIn */}
          <div
            id="linkedin"
            className="row-start-2 row-end-4 col-start-7 col-end-9  rounded-md flex items-center justify-center"
          >
            LinkedIn
          </div>

          {/* Job Portal */}
          <div
            id="job-portal"
            className="row-start-3 row-end-7 col-start-3 col-end-7  rounded-md flex items-center justify-center"
          >
            Job Portal
          </div>

          {/* LeetCode */}
          <div
            id="leetcode"
            className="row-start-3 row-end-5 col-start-1 col-end-3  rounded-md flex items-center justify-center"
          ></div>

          {/* YouTube Playlist */}
          <div
            id="youtube-playlist"
            className="row-start-4 row-end-5 col-start-7 col-end-9  rounded-md flex items-center justify-center"
          ></div>

          {/* CodeChef */}
          <div
            id="codechef"
            className="row-start-5 row-end-7 col-start-1 col-end-3  rounded-md flex items-center justify-center"
          >
            CodeChef
          </div>

          {/* SDE Sheet */}
          <div
            id="sde-sheet"
            className="row-start-5 row-end-6 col-start-7 col-end-9  rounded-md flex items-center justify-center"
          >
            <SDEsheet />
          </div>

          {/* Music Player */}
          <div
            id="music-player"
            className="row-start-6 row-end-8 col-start-7 col-end-9  rounded-md flex items-center justify-center"
          >
            <MusicPlayer />
          </div>

          {/* Decoration */}
          <div
            id="decoration"
            className="row-start-7 row-end-8 col-start-1 col-end-3  rounded-md flex items-center justify-center"
          >
            Decoration
          </div>

          {/* Google Icons Bar */}
          <div
            id="google-icons-bar"
            className="row-start-7 row-end-8 col-start-3 col-end-7 rounded-md flex items-center justify-center"
          >
            <GoogleIconsBar />
          </div>
        </div>
      </div>
    </div>
  );
}
