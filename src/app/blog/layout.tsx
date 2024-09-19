import Link from "next/link";
import { ReactNode } from "react";

export default function BlogContainer({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gray-100 min-h-screen">
        <nav className="container h-16 mx-auto flex items-center">
            <Link href="/">Giacomo Pasin - Blog</Link>
            <div className="ml-auto">
                <Link href="/" className="hover:text-blue-500">Back to the main site</Link>
            </div>
        </nav>
            {children}
        </div>
    )
}
