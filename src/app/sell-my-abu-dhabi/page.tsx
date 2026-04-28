import React from 'react';
import type { Metadata } from 'next';
import ValuationForm from '@/components/valuation-form/ValuationForm';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

export const metadata: Metadata = {
    title: 'Sell My Car Abu Dhabi | Get Best Price for Your Used Car',
    description: 'We Guarantee to Offer You the Highest Price in Abu Dhabi. Sell any car fast with 100% transparency and secure procedure.',
};

export default function AbuDhabiPage() {
    return (
        <main className="overflow-x-hidden">
            {/* ══════════════════════════════════════════════
                HERO SECTION
            ══════════════════════════════════════════════ */}
            <section className="landing-hero">
                <div className="landing-hero-blob" style={{ background: '#FFD0C9' }} />
                
                <div className="landing-hero-container">
                    <div className="landing-hero-content relative">
                        <div className="wow fadeInLeft" data-wow-delay="0.1s">
                            <span className="text-[#f24026] font-bold text-sm uppercase tracking-widest mb-4 block">
                                Highest Price Guarantee
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
                                Sell My Car in <br />
                                <span className="text-[#f24026]">Abu Dhabi</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
                                We Guarantee to Offer You the Highest Price in Abu Dhabi. Sell your car in any condition for fast cash.
                            </p>
                        </div>
                        
                        <div className="relative mt-8 md:mt-0 wow zoomIn" data-wow-delay="0.3s">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f24026]/5 rounded-full blur-3xl -z-10" />
                            <img
                                src="/front/images/Mustang.webp" 
                                alt="Sell My Car Abu Dhabi"
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
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 uppercase tracking-wider">HOW DOES IT WORK?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: 'Have an appointment', desc: 'Virtually or visiting our office.' },
                            { title: 'Bring your vehicle', desc: 'At the scheduled time and we\'ll inspect it.' },
                            { title: 'Get the desired quote', desc: 'As per the car\'s condition and market price.' },
                            { title: 'Price delights you?', desc: 'Now, say okay & ignite the selling phase.' }
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
                MAIN CONTENT - ABU DHABI SPECIFIC
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-[#FCF5F2]">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">How to Sell a Car in <span className="text-[#f24026]">Abu Dhabi</span></h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    With so many options, you need to stand out from the crowd of other sellers in Abu Dhabi who also sell similar cars. At the end of the day, you have to decide whether to sell privately or take the easiest route and accept a dealer&apos;s price. You can sell a car in Abu Dhabi privately in various ways. You might find several websites if you search &lsquo;sell car Abu Dhabi&rsquo; or &lsquo;sell my car Abu Dhabi&rsquo; online.
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">Cash Your Car in Abu Dhabi at the Right Price</h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Expat Car Buyers aims to provide you with the quickest, simplest, and most straightforward approach to finish the deal reasonably and on time. We are the only company in the market that will buy any car in any condition so that you can sell any car to us for a fast cash offer.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Simple approach', 'Fully secure', '100% transparency', 'Definite purchase'].map(g => (
                                        <div key={g} className="flex items-center gap-3 font-bold text-gray-800 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#f24026]" /> {g}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-[#FFD0C9]">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">The Selling Procedure</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Entirely free valuation and Quote', desc: 'We assign you a custom quote according to the current market price and the vehicle\'s actual condition.' },
                                        { title: 'Transfer ownership', desc: 'If you proceed with the offer, we\'ll take the ownership from you.' },
                                        { title: 'Payment clearance', desc: 'Most importantly, we also clear vehicle debt and set it with a reasonable margin.' },
                                        { title: 'Super-fast payment', desc: 'We will go with any of your choice, a bank transfer, cheque, etc. in a maximum of 30minutes.' }
                                    ].map(p => (
                                        <div key={p.title}>
                                            <h5 className="font-bold text-[#f24026] text-sm mb-1">{p.title}</h5>
                                            <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">&ldquo;Why should I choose Expat Car Buyers in Abu Dhabi?&rdquo;</h2>
                                <p className="text-gray-600 mb-6">
                                    We often offer the highest price on the market because we respect the seller&apos;s time and want to buy their car. Additionally, we can settle your mortgage with your bank or another lender.
                                </p>
                                <TestimonialCarousel />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                ISSUES SECTION
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 uppercase">What Common Issues do you Face?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="bg-[#FCF5F2] p-8 rounded-3xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Unfair Price</h3>
                            <p className="text-gray-600">
                                Remember that it differs from one showroom to another. Here at Expat Car Buyers, you can rest assured that your car will get a fair and ideal price compared to any other used car dealer in Abu Dhabi.
                            </p>
                        </div>
                        <div className="bg-[#FCF5F2] p-8 rounded-3xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">They Don&apos;t Buy Your Particular Car</h3>
                            <p className="text-gray-600">
                                Finding a buyer for your car brand can be challenging. However, at Expat Car Buyers, we buy all makes and models of vehicles, considering condition, model year, and mileage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
