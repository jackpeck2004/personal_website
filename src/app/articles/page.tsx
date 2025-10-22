import { getBlogPosts } from "@/data/blog-posts"
import BlogSearch from "./_components/blog-search";
import { Suspense } from 'react';

export default async function Blog() {
    const blogPosts = await getBlogPosts();
    
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogSearch initialPosts={sortedPosts} />
        </Suspense>
    );
}
