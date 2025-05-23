'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Fuse from 'fuse.js';

interface BlogPost {
    title: string;
    date: string;
    url: string;
}

interface BlogSearchProps {
    initialPosts: BlogPost[];
}

export default function BlogSearch({ initialPosts }: BlogSearchProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

    // Configure Fuse.js for fuzzy searching
    const fuse = useMemo(() => {
        return new Fuse(initialPosts, {
            keys: ['title', 'date'],
            threshold: 0.3, // Lower threshold = more strict matching
            includeScore: true,
        });
    }, [initialPosts]);

    // Filter posts based on search query
    const filteredPosts = useMemo(() => {
        if (!searchQuery.trim()) {
            return initialPosts;
        }
        
        const results = fuse.search(searchQuery);
        return results.map(result => result.item);
    }, [searchQuery, fuse, initialPosts]);

    // Update URL when search query changes
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (searchQuery.trim()) {
            params.set('q', searchQuery);
        } else {
            params.delete('q');
        }
        
        const newUrl = params.toString() ? `?${params.toString()}` : '/blog';
        router.replace(newUrl, { scroll: false });
    }, [searchQuery, router, searchParams]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            
            {/* Search Input */}
            <div className="mb-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search blog posts..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                {searchQuery && (
                    <p className="mt-2 text-sm text-gray-600">
                        {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} found for &quot;{searchQuery}&quot;
                    </p>
                )}
            </div>

            {/* Blog Posts */}
            <div className="grid gap-6 md:gap-8">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
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
                    ))
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No blog posts found matching your search.</p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-4 text-blue-600 hover:text-blue-800 underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

