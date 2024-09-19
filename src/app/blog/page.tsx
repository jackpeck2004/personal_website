import { getBlogPosts } from "@/data/blog-posts"

export default async function Blog() {
    const x = await getBlogPosts();
    return (
        <>
        </>
    )
}
