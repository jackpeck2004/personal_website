import Link from "next/link";

export const DownloadCVButton = () => (
  <Link
    href="/GiacomoPasin_CV.pdf"
    className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg drop-shadow-2xl lowercase lg:capitalize"
    target="_blank"
  >
    Download my CV
  </Link>
);
