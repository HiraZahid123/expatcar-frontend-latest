import React from 'react';
import { Metadata } from 'next';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Star } from 'lucide-react';
import api from '@/lib/api';

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    try {
        const { slug } = await params;
        const res = await api.get(`/blogs/${slug}`);
        const post = res.data.data;
        return {
            title: `${post.title} | ExpatCarBuyers Blog`,
            description: post.excerpt || post.title,
        };
    } catch (e) {
        return { title: 'Blog | ExpatCarBuyers' };
    }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    let post = null;
    try {
        const { slug } = await params;
        const res = await api.get(`/blogs/${slug}`);
        post = res.data.data;
    } catch (e) {
        return <div className="min-h-screen flex items-center justify-center">Article not found.</div>;
    }

    return (
        <main className="min-h-screen bg-gray-50 pb-24">
            {/* Blog Article Hero */}
            <article>
                <header className="bg-white border-b border-gray-100 pt-32 pb-20">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <a href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all">
                            <ChevronLeft className="w-5 h-5" /> Back to Blog
                        </a>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                                {post.category?.name || 'Guides'}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500 text-sm flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-8">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-between py-8 border-y border-gray-50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                    ECB
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">ExpatCarBuyers Editorial</div>
                                    <div className="text-sm text-gray-500">Expert Auto Analyst</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Article Body */}
                <div className="container mx-auto px-6 max-w-4xl mt-16">
                    <div className="bg-white p-8 lg:p-16 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100">
                        {post.cover_image && (
                            <div className="rounded-[2rem] overflow-hidden mb-12 shadow-lg">
                                <img src={post.cover_image} alt={post.title} className="w-full h-auto" />
                            </div>
                        )}

                        <div
                            className="prose prose-lg lg:prose-xl prose-blue max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-img:rounded-3xl prose-p:leading-relaxed prose-p:text-gray-600"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 bg-blue-600 rounded-[3rem] p-12 text-white overflow-hidden relative shadow-2xl shadow-blue-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                            <div className="flex-1">
                                <h2 className="text-3xl font-extrabold mb-4">Ready to sell your car?</h2>
                                <p className="text-blue-100 text-lg">Don't wait months for a private buyer. Get your free valuation and immediate cash today.</p>
                            </div>
                            <a href="/" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-gray-100 hover:scale-105 transition-all shadow-xl whitespace-nowrap">
                                Evaluate My Car Now
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            {/* Recommended Posts Placeholder */}
            <section className="container mx-auto px-6 max-w-5xl mt-24">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
                    <Star className="w-6 h-6 text-blue-600 fill-current" /> Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-50 grayscale">
                    <div className="h-48 bg-white border border-gray-100 rounded-3xl animate-pulse"></div>
                    <div className="h-48 bg-white border border-gray-100 rounded-3xl animate-pulse"></div>
                </div>
            </section>
        </main>
    );
}
