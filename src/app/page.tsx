"use client";

import Calender from "./components/Calender";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden p-3 bg-black">
      <div className="h-full w-full border border-gray-300 box-border rounded-md">
        {/* Grid Layout */}
        <div className="grid grid-cols-8 grid-rows-7 gap-2 h-full">
          {/* Heading */}
          <div
            id="heading"
            className="row-start-1 row-end-2 col-start-4 col-end-6  rounded-md flex items-center justify-center"
          >
            Heading
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
            Gemini Search Bar
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
          >
            LeetCode
          </div>

          {/* YouTube Playlist */}
          <div
            id="youtube-playlist"
            className="row-start-4 row-end-5 col-start-7 col-end-9  rounded-md flex items-center justify-center"
          >
            YouTube Playlist
          </div>

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
            SDE Sheet
          </div>

          {/* Music Player */}
          <div
            id="music-player"
            className="row-start-6 row-end-8 col-start-7 col-end-9  rounded-md flex items-center justify-center"
          >
            Music Player
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
            className="row-start-7 row-end-8 col-start-3 col-end-7  rounded-md flex items-center justify-center"
          >
            Google Icons Bar
          </div>
        </div>
      </div>
    </div>
  );
}
