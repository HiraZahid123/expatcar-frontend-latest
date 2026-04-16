"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const faqs: FAQItem[] = [
    {
        question: "How do I sell my car in UAE?",
        answer: (
            <>
                <p>With our fast car selling steps you can easily sell your car in UAE and walk away with cash payment in 30 minutes! </p>
                <p>All you need to do is drop by our office located in the UAE to schedule an appointment.</p>
                <p>Choose the date and time that suits you best for selling your car in Dubai. On that day, bring your car for valuation to be conducted by our highly skilled experts. </p>
                <p>Once your car’s inspection is completed, we will then evaluate your car within minutes and offer best price in market with no obligations.</p>
                <p>You can complete the transaction then and there. If you accept our offer and decide to sell your car to us, we will handle all paperwork and Instant cash will be paid to you.</p>
                <p>Selling your car in UAE has never been easier!</p>
            </>
        )
    },
    {
        question: "What are your payment options?",
        answer: <p>You have the option to receive your payment via check, cash or bank transfer when you decide to sell your car with us.</p>
    },
    {
        question: "What documents do I need to bring?",
        answer: (
            <p>The documents you must bring are:
                <ul className="ps-4">
                    <li>Valid UAE ID.</li>
                    <li>Valid Car Registration.</li>
                    <li>Service history (if applicable).</li>
                </ul>
            </p>
        )
    },
    {
        question: "I have a bank loan or unpaid car fines. Can I still sell?",
        answer: (
            <>
                <p>Yes, the amount will be deducted from the offer we make for your car, and we will take care of all the paperwork.</p>
                <p>In addition to taking care of the loan, we will buy a bank-financed car. You will receive a balanced amount after we pay off the loan.</p>
            </>
        )
    }
];

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="accordion w-100" id="faqAccordion">
            {faqs.map((faq, index) => (
                <div key={index} className="accordion-item card mb-2 border-0 shadow-sm rounded-lg overflow-hidden">
                    <div 
                        className="card-head p-4 cursor-pointer d-flex justify-content-between align-items-center bg-white"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <h4 className="m-0 h5 text-dark fw-bold">{faq.question}</h4>
                        {openIndex === index ? <ChevronUp className="theme-color" /> : <ChevronDown className="text-secondary" />}
                    </div>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-white"
                            >
                                <div className="accordion-body card-body p-4 pt-0 border-top-0">
                                    <div className="text text-muted" style={{ lineHeight: '1.8' }}>
                                        {faq.answer}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
