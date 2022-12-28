import Link from "next/link";

export const DownloadCVButton = () => (
  <Link href="https://drive.google.com/file/d/1Am6XV7o2WYUwAV-ZoyWt28ygB_jk0IOT/view?usp=share_link">
    <a
      className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg drop-shadow-2xl lowercase lg:capitalize"
      target="_blank"
    >
      Download my CV
    </a>
  </Link>
);
