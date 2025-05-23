import { getBlogPosts } from "@/data/blog-posts"
import BlogSearch from "./_components/blog-search";

export default async function Blog() {
    const blogPosts = await getBlogPosts();
    
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return <BlogSearch initialPosts={sortedPosts} />;
}
