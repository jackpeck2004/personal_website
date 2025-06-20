import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  }
}
 
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkFrontmatter, // Parses frontmatter
      [remarkMdxFrontmatter, { name: 'meta' }] // Exports frontmatter as 'meta'
    ],
    rehypePlugins: [],
  },
});
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
