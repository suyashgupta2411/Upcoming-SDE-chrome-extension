import { SiGooglemeet } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { SiGooglephotos } from "react-icons/si";
import { SiYoutube } from "react-icons/si";

export default function GoogleIconsBar() {
  return (
    <div className="w-full flex px-8 py-2">
      <div className="flex-1" />
      <div className="flex gap-12 items-center">
        <a
          href="https://calendar.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <SlCalender className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <SiYoutube className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://meet.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <SiGooglemeet className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <SiGmail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://drive.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <FaGoogleDrive className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <SiGooglemaps className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://photos.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <SiGooglephotos className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </a>
      </div>
      <div className="flex-1" />
    </div>
  );
}
