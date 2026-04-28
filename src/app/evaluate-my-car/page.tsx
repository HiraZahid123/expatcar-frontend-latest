import React from 'react';
import type { Metadata } from 'next';
import ValuationForm from '@/components/valuation-form/ValuationForm';
import { ShieldCheck, Star, Clock, Car, Hash, Search, Zap, Banknote, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free Car Valuation in Dubai, UAE | Expat Car Buyers',
    description: 'Get a free, fast & accurate car valuation in Dubai, UAE—online or at your home. No obligations. Book now & get paid instantly with all paperwork done!',
};

const valuationFactors = [
    {
        title: 'Make, Model, and Year',
        desc: 'Market resale trends for your specific vehicle based on its brand and age.',
        icon: Car
    },
    {
        title: 'Features',
        desc: 'Value-additions like sunroofs, leather seats, and premium sound systems.',
        icon: Star
    },
    {
        title: 'Mileage History',
        desc: 'Lower mileage vehicles generally command a significantly higher market price.',
        icon: Hash
    },
    {
        title: 'Car Condition',
        desc: 'Both physical and mechanical state can influence the value by up to 30%.',
        icon: ShieldCheck
    },
    {
        title: 'Service History',
        desc: 'Well-maintained vehicles with full service records are more desirable.',
        icon: Clock
    },
    {
        title: 'Supply and Demand',
        desc: 'Current market popularity and availability of your specific model in the UAE.',
        icon: Search
    },
    {
        title: 'Regional Specifications',
        desc: 'GCC specs are valued higher than Non-GCC imports due to regional adaptations.',
        icon: Zap
    },
];

const testimonials = [
    {
        name: 'Irina',
        image: '/front/images/Irina.webp',
        text: 'The process was incredibly smooth. I got a fair price for my car and the payment was instant. Highly recommend!',
        rating: 5
    },
    {
        name: 'Omar Saeed',
        image: '/front/images/Omar.webp',
        text: 'Professional service from start to finish. They came to my home for inspection which saved me so much time.',
        rating: 5
    },
    {
        name: 'Ajith Kumar',
        image: '/front/images/Ajith.webp',
        text: 'I was worried about the paperwork but they handled everything. Very honest and transparent valuation.',
        rating: 5
    }
];

export default function EvaluateMyCarPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900 text-white min-h-[700px] flex items-center">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f24026]/10 -skew-x-12 translate-x-1/4" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="lg:pt-8">
                            <div className="inline-flex items-center gap-2 bg-[#f24026]/20 text-[#FFD0C9] text-sm font-bold px-4 py-2 rounded-full mb-8">
                                <Star className="w-4 h-4" /> No. 1 Website for Car Valuation
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                                No. 1 Website for Car Valuation in <span className="text-[#f24026]">Dubai, UAE</span>
                            </h1>
                            <p className="text-2xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                                People trust us because we provide <span className="text-white font-bold">Fast, Easy and Honest</span> service.
                            </p>
                            <div className="hidden lg:block relative mt-8">
                                <img 
                                    src="/front/images/X5.webp" 
                                    alt="Car Valuation Dubai" 
                                    className="w-full max-w-lg object-contain drop-shadow-[0_20px_50px_rgba(242,64,38,0.3)] transform -scale-x-100"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-[2.5rem] shadow-2xl p-2 max-w-xl mx-auto lg:mr-0 border border-gray-800/50">
                            <ValuationForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Get Your Car Value Instantly with <span className="text-[#f24026]">Expat Car Buyers</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Whether you are at home or in the office, our professional inspectors come to you. We offer immediate payment options via Cash, Cheque, or Bank Transfer.
                    </p>
                </div>
            </section>

            {/* Factors Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            What Does Your Car <span className="text-[#f24026]">Value Depend On?</span>
                        </h2>
                        <p className="text-lg text-gray-600">Understand the key factors that influence your vehicle&apos;s market price.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valuationFactors.map((factor, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                                <div className="w-14 h-14 bg-[#FCF5F2] text-[#f24026] rounded-2xl flex items-center justify-center mb-6">
                                    <factor.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{factor.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Our Happy <span className="text-[#f24026]">Customers</span>
                        </h2>
                        <p className="text-lg text-gray-600">Join over 12,000 satisfied sellers across the UAE.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 relative">
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star key={j} className="w-5 h-5 fill-[#f24026] text-[#f24026]" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">&quot;{t.text}&quot;</p>
                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                                    <div>
                                        <p className="font-bold text-gray-900">{t.name}</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">Verified Seller</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Banner */}
            <section className="py-20 bg-[#f24026]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">100% Secure & Authorized</h3>
                                <p className="text-[#FFD0C9]">Official RTA authorized car buying service</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                <Banknote className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Instant Payments</h3>
                                <p className="text-[#FFD0C9]">Cash, Cheque or Bank Transfer same day</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">30-Min Process</h3>
                                <p className="text-[#FFD0C9]">From inspection to cash in hand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
                        Ready to Get Your <span className="text-[#f24026]">Free Valuation?</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of happy customers and find out the true value of your car today. No obligation, no stress.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a 
                            href="tel:+971561774555" 
                            className="px-12 py-5 bg-[#f24026] text-white font-extrabold rounded-2xl hover:bg-[#d6351f] transition-all shadow-xl shadow-red-500/30 text-xl"
                        >
                            Call +971 56 177 4555
                        </a>
                        <a 
                            href="https://wa.me/971561774555" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-12 py-5 bg-[#25d366] text-white font-extrabold rounded-2xl hover:bg-[#1ebe5d] transition-all text-xl shadow-xl shadow-green-500/20"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
