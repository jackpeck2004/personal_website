import { getBlogPosts } from "@/data/blog-posts"
import Link from "next/link";

export default async function Blog() {
    const blogPosts = await getBlogPosts();
    
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            <div className="grid gap-6 md:gap-8">
                {sortedPosts.map((post, index) => (
                    <article 
                        key={index}
                        className="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                        <time className="text-sm text-gray-500">
                            {post.date}
                        </time>
                        <h2 className="text-xl font-semibold mt-2 mb-2">
                            {post.title}
                        </h2>
                        <div className="flex items-center mt-4">
                            <Link className="text-gray-600 hover:text-gray-900 transition-colors" href={post.url}>
                                Read more →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
