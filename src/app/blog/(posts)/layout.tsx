import { ReactNode } from "react";
import Link from 'next/link';
export default function BlogPostContainer({ children }: {children: ReactNode}) {
    return (
        <main>
        <article className="container mx-auto mt-8 prose prose-h1:font-serif prose-h1:text-blue-600 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-serif prose-lg">
            {children}
        </article>
        </main>
    )
}
