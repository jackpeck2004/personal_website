import Link from "next/link";

export const DownloadCVButton = () => (
  <Link href="https://drive.google.com/open?id=1eircWWFHYO6Gyx8I9Wsw678kjDVkEMLH">
    <a
      className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg drop-shadow-2xl lowercase lg:capitalize"
      target="_blank"
    >
      Download my CV
    </a>
  </Link>
);
