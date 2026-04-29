import React from 'react';
import type { Metadata } from 'next';
import ValuationForm from '@/components/valuation-form/ValuationForm';
import FAQAccordion from '@/components/home/FAQAccordion';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import PriceIncludedSection from '@/components/PriceIncludedSection';

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
                            {/* Static Premium Background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f24026]/5 rounded-full blur-3xl -z-10" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-[#FFD0C9]/40 rounded-[50%_50%_40%_60%] -z-5" />
                            
                            <img
                                src="/front/images/X5.webp" 
                                alt="Sell My Car Abu Dhabi"
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10 scale-110"
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
                THE ENTIRE SELLING PROCEDURE IS EASY, QUICK, AND BENEFICIAL!
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 wow fadeInUp">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight leading-tight">
                            THE ENTIRE SELLING PROCEDURE IS<br/>
                            <span className="text-[#f24026]">EASY, QUICK, AND BENEFICIAL!</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#f24026] mx-auto mt-6 rounded-full" />
                    </div>
                    
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-[#FCF5F2] p-8 md:p-12 wow zoomIn" data-wow-delay="0.2s">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                                    Selling your car shouldn't be a chore. We've optimized every step to save you time and maximize your value.
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    From the moment you request an online valuation to the final payment, our process is designed for transparency. No hidden fees, no complicated paperwork, and no waiting weeks for your money.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <span className="px-6 py-3 bg-white rounded-full text-sm font-bold text-gray-700 shadow-sm border border-gray-50">✓ 30-Minute Process</span>
                                    <span className="px-6 py-3 bg-white rounded-full text-sm font-bold text-gray-700 shadow-sm border border-gray-50">✓ Instant Cash Payment</span>
                                    <span className="px-6 py-3 bg-white rounded-full text-sm font-bold text-gray-700 shadow-sm border border-gray-50">✓ Free RTA Handling</span>
                                </div>
                            </div>
                            <div className="relative">
                                <img 
                                    src="/front/images/selling-procedure.png" 
                                    alt="Selling Procedure Graphic" 
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
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
                SEO CONTENT SECTION
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider">How to Sell Car in Abu Dhabi?</h2>
                            <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                                <p>
                                    Finding a buyer for your car brand can be challenging. However, at Expat Car Buyers, we buy all makes and models of vehicles, considering condition, model year, and mileage.
                                </p>
                                <p>
                                    As an expert car buyer in Abu Dhabi, we offer a seamless selling experience for residents and expats alike. Whether you are looking to sell your car in Abu Dhabi or simply want a quick valuation, our team is here to help.
                                </p>
                                <p>
                                    We provide a free car valuation with every enquiry. Next, we can assist and take charge to organize the Ownership Transfer. With our tie-ups with all banks in UAE, we will clear any debts or outstanding finance on the car and pay the difference. You get the cash, cheque or bank transfer from us in just 30 minutes!
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider">Sell Car in Abu Dhabi at the right price</h2>
                            <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                                <p>
                                    In Abu Dhabi and the surrounding area, Expat Car Buyers pay competitive prices for all types of automobiles. We are the go-to company for reliable services, which is why auto sellers turn to us. 
                                </p>
                                <p>
                                    If your vehicle is old, pre-owned, or even scrap, you can trust us to negotiate the best possible settlement on your behalf. Our process ensures that you get the best market value for your car with minimum hassle.
                                </p>
                                <p>
                                    So, if you are looking to &ldquo;sell any car Abu Dhabi&rdquo; or &ldquo;sell my car online Abu Dhabi,&rdquo; look no further than Expat Car Buyers. Contact us today to get started and sell your car in Abu Dhabi for the best price.
                                </p>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32">
                            <div className="bg-white p-10 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#FFD0C9] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f24026]/5 rounded-bl-full" />
                                <h3 className="text-2xl font-black text-gray-900 mb-10 uppercase tracking-widest border-b border-gray-100 pb-4">
                                    The <span className="text-[#f24026]">Method</span>
                                </h3>
                                <div className="space-y-10">
                                    {[
                                        { title: 'Comprehensive Car Valuation', desc: 'Once you bring your car to one of our showrooms, we will do a comprehensive valuation. Then we price it according to market value.', icon: '01' },
                                        { title: 'Ownership Transfer', desc: 'We will take care of all the ownership transfer documents. You just need to sign our agreement.', icon: '02' },
                                        { title: 'Finance Settlement', desc: 'If your car is under finance, we will be able to settle it in the best possible way. You don’t have to worry about it.', icon: '03' },
                                        { title: 'Get paid in 30 minutes', desc: 'We ensure that you will be paid in cash for the value of your car within just 30 minutes!', icon: '04' }
                                    ].map(p => (
                                        <div key={p.title} className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                                                {p.icon}
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#f24026] text-lg mb-2">{p.title}</h5>
                                                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                PRICE INCLUDED (Red Block)
            ══════════════════════════════════════════════ */}
            <PriceIncludedSection />

            {/* ══════════════════════════════════════════════
                OUR GUARANTEES (4-Column Grid)
            ══════════════════════════════════════════════ */}
            <section className="py-24 bg-[#1a1a1a] text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Our Guarantees</h2>
                        <div className="w-24 h-1 bg-[#f24026] mx-auto rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            'A guaranteed quick and hassle-free sale',
                            'Secure finance settlement',
                            'On the spot cash in hand payment',
                            'Safe, secure and trusted process',
                            'All RTA paperwork taken care of for you',
                            '0 hidden or unforeseen costs',
                            'No obligation No pressure quote',
                            'Free professional car inspection'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#f24026] rounded-full flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="text-sm font-medium leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                TESTIMONIALS SECTION (Full Width)
            ══════════════════════════════════════════════ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight italic uppercase">
                            &ldquo;Why should I choose Expat Car Buyers in <span className="text-[#f24026]">Abu Dhabi?</span>&rdquo;
                        </h2>
                        <div className="w-24 h-1 bg-[#f24026] mx-auto rounded-full" />
                    </div>
                    <TestimonialCarousel />
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
            {/* ══════════════════════════════════════════════
                FAQ SECTION
            ══════════════════════════════════════════════ */}
            <section className="py-24 bg-[#FCF5F2]">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 uppercase tracking-wider">Frequently Asked Questions</h2>
                    <FAQAccordion />
                </div>
            </section>
        </main>
    );
}
