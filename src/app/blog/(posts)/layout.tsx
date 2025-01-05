import Link from "next/link";
import { ReactNode } from "react";

export default function BlogPostContainer({ children }: {children: ReactNode}) {
    return (
        <>
        <div className="container mx-auto text-gray-500">
            <Link href="/blog" className="hover:text-blue-500">All posts</Link>
        </div>
        <main>
        <article className="container mx-auto mt-8 prose prose-h1:font-serif prose-h1:text-blue-600 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-serif prose-lg">
            {children}
        </article>
        </main>
        </>
    )
}
