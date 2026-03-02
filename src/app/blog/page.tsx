import React from 'react';
import { Metadata } from 'next';
import { Search, ChevronRight, Calendar, User, Clock } from 'lucide-react';
import api from '@/lib/api';

export const metadata: Metadata = {
    title: 'Car Buying Guide & News | ExpatCarBuyers Blog',
    description: 'Stay updated with the latest car trends, selling tips, and market news in UAE. Your ultimate guide to selling cars in Dubai.',
};

export default async function BlogListingPage() {
    let posts = [];
    try {
        const res = await api.get('/blogs');
        posts = res.data.data.data; // Paginated data
    } catch (e) {
        posts = [];
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Blog Hero */}
            <section className="bg-gray-900 py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
                            The UAE <span className="text-blue-500">Auto Hub.</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10">
                            Essential guides, market insights, and expert tips for buying and selling cars in the United Arab Emirates.
                        </p>

                        {/* Search Bar for blogs */}
                        <div className="relative max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:bg-white/20 focus:border-blue-500 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Feed */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.map((post: any) => (
                                <a
                                    href={`/blog/${post.slug}`}
                                    key={post.id}
                                    className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all"
                                >
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        {post.cover_image ? (
                                            <img
                                                src={post.cover_image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                No Image
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                                                {post.category?.name || 'Car Tips'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min read</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed">
                                            {post.excerpt || 'Read our latest insights on the UAE car market and how to get the most value for your vehicle.'}
                                        </p>
                                        <div className="mt-auto flex items-center text-blue-600 font-bold gap-2 group-hover:gap-3 transition-all">
                                            Read More <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                                <Search className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-500">We are currently gathering the latest news for you. Check back later!</p>
                        </div>
                    )}

                    {/* Pagination Placeholder */}
                    <div className="mt-20 flex justify-center gap-2">
                        {[1].map(p => (
                            <button key={p} className="w-12 h-12 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30">
                                1
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Stay in the fast lane.</h2>
                        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">Get the latest UAE car market trends and pricing updates delivered straight to your inbox.</p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 bg-white/20 border border-white/30 rounded-2xl py-4 px-6 text-white placeholder:text-blue-200 outline-none focus:bg-white/30 transition-all"
                            />
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-gray-100 transition-all shadow-xl">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
