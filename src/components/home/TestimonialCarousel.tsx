"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: "Irina",
        date: "2022-01-12",
        text: "Amazing service. If u want to experience the hassle free way of selling car, this is the best place to go. Been to other companies in past and I must say their service is exceptional.. cheers",
        image: "/front/images/Irina.webp"
    },
    {
        name: "Omar Saeed",
        date: "2022-01-12",
        text: "I visited several car buying companies in same area but Expat car buyers offered the most competitive prices whilst also offering a comprehensive and professional service to enable a smooth transaction. Great customer service. Would highly recommend",
        image: "/front/images/Omar.webp"
    },
    {
        name: "Ajith Kumar",
        date: "2022-01-12",
        text: "I visited several car buying companies in same area but Expat car buyers offered the most competitive prices whilst also offering a comprehensive and professional service to enable a smooth transaction. Great customer service. Would highly recommend",
        image: "/front/images/Ajith.webp"
    },
    {
        name: "Lucy Komolka",
        date: "2022-01-12",
        text: "Highly recommend selling your car with the Expat Car Buyers. Fast, genuine service. Very helpful guys. My experience was great and wouldn't go to any other place in Dubai.",
        image: "/front/images/Lucy.webp"
    },
    {
        name: "Shafqat Ali",
        date: "2022-01-12",
        text: "It was very easy as in one stop shop. Transfer of car and cash payment on the spot. The whole thing took under 30 mins and that's what I needed. Thank you guys.",
        image: "/front/images/Shafqat.webp"
    },
    {
        name: "Thomas Buchner",
        date: "2022-01-12",
        text: "Could sell my car in very short time and got a fair price. Thank you for the excellent service!",
        image: "/front/images/Thomas.webp"
    },
];

const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 48 48">
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    </svg>
);

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);
    const [perPage, setPerPage] = useState(3);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setPerPage(1);
            else if (window.innerWidth < 1024) setPerPage(2);
            else setPerPage(3);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - perPage);
    const next = () => setIndex(i => Math.min(i + 1, maxIndex));
    const prev = () => setIndex(i => Math.max(i - 1, 0));
    const cardWidth = 100 / perPage;

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * cardWidth}%)` }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 px-3"
                            style={{ width: `${cardWidth}%` }}
                        >
                            <div className="review-card flex flex-col justify-between" style={{ minHeight: '300px' }}>
                                <div>
                                    <div className="mb-3">
                                        <img src="/front/images/5stars.png" alt="5 stars" width={100} style={{ opacity: 0.85 }} />
                                    </div>
                                    <p className="text-[#626161] text-[0.9375rem] leading-relaxed mb-5" style={{ minHeight: '100px' }}>
                                        {t.text}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FFD0C9]">
                                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm mb-0">{t.name}</h4>
                                            <div className="text-xs text-[#626161]">{t.date}</div>
                                        </div>
                                    </div>
                                    <GoogleIcon />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2.5 rounded-full transition-all duration-200 ${i === index ? 'bg-[#f24026] w-6' : 'bg-gray-300 w-2.5'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex justify-center gap-3 mt-4">
                <button
                    onClick={prev}
                    disabled={index === 0}
                    className="w-10 h-10 rounded-full border-2 border-[#f24026] text-[#f24026] flex items-center justify-center hover:bg-[#f24026] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={next}
                    disabled={index === maxIndex}
                    className="w-10 h-10 rounded-full border-2 border-[#f24026] text-[#f24026] flex items-center justify-center hover:bg-[#f24026] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
