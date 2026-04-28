import React from 'react';
import type { Metadata } from 'next';
import ValuationForm from '@/components/valuation-form/ValuationForm';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

export const metadata: Metadata = {
    title: 'Sell Any Car in Sharjah | Sell Your Car Across Sharjah in 30 Minutes',
    description: 'Do you want to sell your car fast in Sharjah? We can help you with it. Get a no-obligation quote and instant cash within 30 minutes.',
};

export default function SharjahPage() {
    return (
        <main className="overflow-x-hidden">
            {/* ══════════════════════════════════════════════
                HERO SECTION
            ══════════════════════════════════════════════ */}
            <section className="landing-hero">
                <div className="landing-hero-blob" style={{ background: '#E6F0FF' }} />
                
                <div className="landing-hero-container">
                    <div className="landing-hero-content relative">
                        <div className="wow fadeInLeft" data-wow-delay="0.1s">
                            <span className="text-[#f24026] font-bold text-sm uppercase tracking-widest mb-4 block">
                                Sell Fast in Sharjah
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
                                Sell My Car in <br />
                                <span className="text-[#f24026]">Sharjah</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
                                Do you want to sell your car fast in Sharjah? We can help you with it. Get market competitive cash deal for your used car.
                            </p>
                        </div>
                        
                        <div className="relative mt-8 md:mt-0 wow zoomIn" data-wow-delay="0.3s">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f24026]/5 rounded-full blur-3xl -z-10" />
                            <img
                                src="/front/images/X5.webp" 
                                alt="Sell My Car Sharjah"
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10"
                            />
                        </div>
                    </div>

                    <div className="landing-hero-form wow fadeInRight" data-wow-delay="0.2s">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Get a Free Valuation</h3>
                            <p className="text-sm text-gray-500">Takes less than 1 minute</p>
                        </div>
                        <ValuationForm />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                HOW DOES IT WORK
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 uppercase tracking-wider">How does it works?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: 'Schedule appointment', desc: 'You can fill the online form and schedule a date and time for your appointment.' },
                            { title: 'Bring your car', desc: 'You can bring your car to the Expat Car Buyers showroom on the date and time of the appointment.' },
                            { title: 'Get your no-obligation quote', desc: 'We will inspect your car and provide you with a no-obligation quote.' },
                            { title: 'Sell your car', desc: 'If you are happy with the amount we are planning to offer, you can sell your car to us!' }
                        ].map((step, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-16 h-16 bg-[#f24026]/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#f24026] group-hover:text-white transition-colors border border-[#f24026]/10">
                                    <span className="font-black text-xl">{idx + 1}</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                MAIN CONTENT - SHARJAH SPECIFIC
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-[#FCF5F2]">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">How to Sell Car in <span className="text-[#f24026]">Sharjah</span></h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Are you looking to sell your car in Sharjah? Expat Car Buyers can help make the process quick and hassle-free. As one of the leading car buyers in Sharjah, we offer a seamless and transparent process to help you sell your car.
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">Sell Car in Sharjah at the right price</h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Selling your car in Sharjah can be a daunting task, especially if you&apos;re not sure how to get the best price. At Expat Car Buyers, we understand that getting the right price for your car is important.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        'Guaranteed purchase',
                                        'Sell fast minimum hassle',
                                        'Paid within 30 minutes',
                                        'Finance settlement'
                                    ].map(g => (
                                        <div key={g} className="flex items-center gap-3 font-bold text-gray-800 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#f24026]" /> {g}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-[#FFD0C9]">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">THE WHOLE SELLING METHOD</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Comprehensive Car Valuation', desc: 'Once you bring your car to one of our showrooms, we will do a comprehensive valuation. Then we price it according to market value.' },
                                        { title: 'Ownership Transfer', desc: 'We will take care of all the ownership transfer documents. You just need to sign our agreement.' },
                                        { title: 'Finance Settlement', desc: 'If your car is under finance, we will be able to settle it in the best possible way. You don’t have to worry about it.' },
                                        { title: 'Get paid in 30 minutes', desc: 'We ensure that you will be paid in cash for the value of your car within just 30 minutes!' }
                                    ].map(p => (
                                        <div key={p.title}>
                                            <h5 className="font-bold text-[#f24026] text-sm mb-1">{p.title}</h5>
                                            <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">&ldquo;What people are saying in Sharjah?&rdquo;</h2>
                                <TestimonialCarousel />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
