import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export const DownloadCVButton = () => (
  <Link
    href="/GiacomoPasin_CV.pdf"
    className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
    target="_blank"
  >
    <FiDownload /> Download CV
  </Link>
);
