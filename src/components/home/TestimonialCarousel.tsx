"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: "Irina",
        date: "2022-01-12",
        text: "Amazing service. If u want to experience the hassle free way of selling car, this is the best place to go. Been to other companies in past and I must say their service is exeptional.. cheers",
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
        text: "Highly recommend selling your car with the Expat Car Buyers. Fast, genuine service. Very helpful guys. My experience was great and wouldn’t go to any other place in Dubai.",
        image: "/front/images/Lucy.webp"
    },
    {
        name: "Shafqat Ali",
        date: "2022-01-12",
        text: "It was very easy as in one stop shop.Transfer of car and cash payment on the spot. The whole thing took under 30 mins and that's what I needed. Thank you guys.",
        image: "/front/images/Shafqat.webp"
    }
];

const TestimonialCarousel = () => {
    const [index, setIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsToShow(1);
            else if (window.innerWidth < 1100) setItemsToShow(2);
            else setItemsToShow(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = () => {
        setIndex((prev) => (prev + 1) % (testimonials.length - itemsToShow + 1));
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + (testimonials.length - itemsToShow + 1)) % (testimonials.length - itemsToShow + 1));
    };

    return (
        <div className="position-relative overflow-hidden py-4">
            <div className="d-flex transition-all duration-500 gap-4 px-2" style={{ transform: `translateX(-${index * (100 / itemsToShow)}%)` }}>
                {testimonials.map((t, i) => (
                    <div key={i} className="userReview bg-white p-4 shadow-sm border-0 flex-shrink-0" style={{ width: `calc(${100 / itemsToShow}% - 24px)` }}>
                        <div className="pb-2">
                            <img src="/front/images/5stars.png" alt="stars" width={100} style={{ opacity: 0.8 }} />
                        </div>
                        <p className="reviewBox mt-3 text-muted" style={{ minHeight: '120px', fontSize: '15px' }}>{t.text}</p>
                        <div className="d-flex align-items-center mt-4">
                            <div className="userProfile overflow-hidden rounded-circle" style={{ width: '50px', height: '50px' }}>
                                <img src={t.image} alt={t.name} className="w-100 h-100 object-cover" />
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 h6 fw-bold">{t.name}</h4>
                                <div className="userDate small text-muted">{t.date}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="d-flex justify-content-center mt-4 gap-2 testimonial-controls">
                <button onClick={prev} className="btn btn-outline-danger btn-sm rounded-circle p-2">
                    <ChevronLeft size={20} />
                </button>
                <button onClick={next} className="btn btn-outline-danger btn-sm rounded-circle p-2">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
