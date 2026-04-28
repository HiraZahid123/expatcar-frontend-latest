import React from 'react';
import type { Metadata } from 'next';
import ValuationForm from '@/components/valuation-form/ValuationForm';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

export const metadata: Metadata = {
    title: 'Free Car Valuation in Dubai, UAE | Expat Car Buyers',
    description: 'Get a free, fast & accurate car valuation in Dubai, UAE—online or at your home. No obligations. Book now & get paid instantly with all paperwork done!',
};

export default function EvaluateMyCarPage() {
    return (
        <main className="overflow-x-hidden">
            {/* ══════════════════════════════════════════════
                HERO SECTION (Exact Replica Style)
            ══════════════════════════════════════════════ */}
            <section className="landing-hero">
                <div className="landing-hero-blob" />
                
                <div className="landing-hero-container">
                    {/* Left Side: Car Image & Text */}
                    <div className="landing-hero-content relative">
                        <div className="wow fadeInLeft" data-wow-delay="0.1s">
                            <span className="text-[#f24026] font-bold text-sm uppercase tracking-widest mb-4 block">
                                No. 1 Website for
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
                                Car Valuation in <br />
                                <span className="text-[#f24026]">Dubai, UAE</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
                                People trust us because we provide Fast, easy and honest service.
                            </p>
                        </div>
                        
                        <div className="relative mt-8 md:mt-0 wow zoomIn" data-wow-delay="0.3s">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f24026]/5 rounded-full blur-3xl -z-10" />
                            <img
                                src="/front/images/X5.webp"
                                alt="Car Valuation UAE"
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10"
                            />
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
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
                MAIN CONTENT SECTION
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="space-y-8 mb-20 max-w-4xl">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Selling your car is quite complicated than just driving it around your city. You may have to undertake some necessary processes to get your car ready for sale, and one of the many essential ones is evaluating your car. That’s where car valuation Dubai services can truly make a difference.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            There are several benefits to evaluating your car before you decide to sell. Not having accurate information on the market value of your car may see you settle for a lesser deal. Since the goal of getting your car valued is to have a good bargain when selling your car, car valuation is a necessary step. You can simply arrange an appointment with our team at Expat Car Buyers. Our team will have an appointment booked with you at your place of convenience, come over to evaluate your car within 10 minutes, and offer you the best value for your car on the spot.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Also, it is important to know that car valuation online isn’t always the best. And that’s because most of these online car valuation websites only collect a few data from you to arrive at a market value for your old car. Without a proper assessment of the condition of your used car, it may be difficult to come up with the correct value for your car.
                        </p>
                    </div>

                    {/* Benefits Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="bg-[#FCF5F2] p-10 rounded-[2.5rem] border-2 border-[#FFD0C9]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Benefit of Using Our Evaluation Service</h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Saves You Time', desc: 'It’s a lot of trying to prepare your car for sale. You have to put everything in place... However, the Expat Car Buyer provides an unparalleled service of checking the in and out of your car.' },
                                    { title: 'It’s Free', desc: 'We provide this car valuation service for free, all expenses paid when you choose to sell your car with us.' },
                                    { title: 'Best Value', desc: 'Our technicians’ process to evaluate your car is transparent. We will have your car inspected and valued better than many dealers.' },
                                    { title: 'Immediate Paperwork', desc: 'We are accredited by the RTA and Tasjeel and can finish all the paperwork without going to the RTA Center.' }
                                ].map(item => (
                                    <div key={item.title}>
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#f24026]" />
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">What does your car value depend on?</h2>
                            <p className="text-gray-600">Here are some of the key components that determine the value of your used car:</p>
                            <div className="space-y-6">
                                {[
                                    { title: 'Make, Model, and Year', desc: 'Brand value and depreciation are major factors we consider.' },
                                    { title: 'Features Available', desc: 'Functional equipment like leather seats or custom sound systems increase value.' },
                                    { title: 'Mileage History', desc: 'The more miles your car has travelled, the lesser it’s worth.' },
                                    { title: 'Car Condition', desc: 'Overall condition can influence the value of your car by up to 30%!' },
                                    { title: 'Service History', desc: 'A complete service record increases the lifespan and value of the car.' },
                                    { title: 'Regional Specifications', desc: 'Non-GCC spec cars have significantly lower values in the UAE.' }
                                ].map(item => (
                                    <div key={item.title} className="border-b border-gray-100 pb-4 last:border-0">
                                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                TESTIMONIALS
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-[#FCF5F2]">
                <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">
                        Trusted by <span className="text-[#f24026]">Thousands</span> of Sellers
                    </h2>
                    <TestimonialCarousel />
                </div>
            </section>
        </main>
    );
}
