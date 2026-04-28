import React from 'react';
import type { Metadata } from 'next';
import ValuationForm from '@/components/valuation-form/ValuationForm';
import FAQAccordion from '@/components/home/FAQAccordion';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

export const metadata: Metadata = {
    title: 'Sell Your Car in Abu Dhabi | Instant Cash | Expat Car Buyers',
    description: 'Looking to sell your car in Abu Dhabi? Get a free valuation, instant cash in 30 minutes, and professional service. We buy any car in any condition.',
};

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sell My Car Abu Dhabi',
    provider: {
        '@type': 'Organization',
        name: 'ExpatCarBuyers',
        telephone: '+971561774555',
        url: 'https://www.expatcarbuyers.com',
    },
    areaServed: 'Abu Dhabi',
    description: 'Instant cash for cars in Abu Dhabi. Free valuation and same-day payment.',
};

const CheckIcon = () => (
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" className="flex-shrink-0 mt-0.5">
        <path d="M14.5705 29.9617C14.3898 29.9617 14.2087 29.9585 14.0273 29.952C11.8808 29.8714 9.77868 29.3174 7.87133 28.3296C5.96398 27.3417 4.29857 25.9445 2.9943 24.2379C1.69003 22.5314 0.779134 20.5576 0.326805 18.4579C-0.125524 16.3582 -0.108103 14.1844 0.37782 12.0922C0.863742 10 1.80615 8.04112 3.13761 6.35565C4.46907 4.67019 6.15665 3.29985 8.07959 2.34271C10.0025 1.38557 12.1133 0.865289 14.2608 0.819105C16.4083 0.77292 18.5395 1.20197 20.5018 2.07556C20.663 2.14485 20.8088 2.24548 20.9308 2.37158C21.0528 2.49769 21.1485 2.64677 21.2124 2.81017C21.2763 2.97357 21.3071 3.14803 21.303 3.32343C21.2989 3.49883 21.2601 3.67168 21.1887 3.83193C21.1172 3.99219 21.0147 4.13667 20.887 4.25698C20.7593 4.37729 20.6089 4.47103 20.4447 4.53278C20.2805 4.59452 20.1056 4.62303 19.9303 4.61664C19.7549 4.61026 19.5826 4.56912 19.4233 4.4956C17.0745 3.44936 14.4505 3.1903 11.9425 3.75706C9.43449 4.32381 7.17687 5.68602 5.50631 7.64053C3.83575 9.59504 2.84175 12.0372 2.67254 14.6027C2.50333 17.1682 3.16797 19.7197 4.56735 21.8767C5.96689 24.0335 8.02616 25.6803 10.4381 26.5713C12.85 27.4623 15.4853 27.5499 17.9511 26.821C20.4168 26.0921 22.5809 24.5858 24.1206 22.5266C25.6603 20.4674 26.4931 17.9657 26.4948 15.3947V14.1758C26.4948 13.8244 26.6344 13.4874 26.8829 13.239C27.1314 12.9905 27.4684 12.851 27.8198 12.851C28.1712 12.851 28.5082 12.9905 28.7566 13.239C29.0051 13.4874 29.1447 13.8244 29.1447 14.1758V15.3947C29.1431 19.2587 27.6068 22.9638 24.8738 25.6955C22.1408 28.4272 18.4348 29.9617 14.5705 29.9617Z" fill="#34A853" />
        <path d="M14.57 19.3825C14.396 19.3825 14.2236 19.3483 14.0628 19.2818C13.902 19.2153 13.7559 19.1177 13.6328 18.9947L9.65805 15.0202C9.41671 14.7703 9.28316 14.4357 9.28618 14.0883C9.2892 13.7409 9.42854 13.4086 9.67419 13.163C9.91985 12.9174 10.2522 12.778 10.5995 12.775C10.9469 12.772 11.2816 12.9055 11.5315 13.1469L14.57 16.1834L26.8821 3.85971C27.1318 3.61825 27.4664 3.48456 27.8138 3.48741C28.1612 3.49026 28.4936 3.62944 28.7394 3.87496C28.9851 4.12048 29.1246 4.45271 29.1278 4.80008C29.131 5.14745 28.9976 5.48217 28.7564 5.73215L15.5072 18.9938C15.3841 19.117 15.238 19.2147 15.0772 19.2814C14.9164 19.3481 14.7441 19.3824 14.57 19.3825Z" fill="#34A853" />
    </svg>
);

const howItWorks = [
    {
        icon: '/front/images/book-an-appointment.svg',
        title: 'Book an Appointment',
        desc: 'Let us know a time that works best for you and book an appointment for a vehicle inspection at your convenience in Abu Dhabi.',
    },
    {
        icon: '/front/images/bring-your-vehicle.svg',
        title: 'Bring Your Vehicle',
        desc: 'Drive your car over to our Abu Dhabi inspection point and allow us to carry out a free of charge professional inspection.',
    },
    {
        icon: '/front/images/get-a-no-obligation-quote.svg',
        title: 'Get a No-Obligation Quote',
        desc: "Receive a fair non-obligation quote based on our findings. This is completely obligation free — the choice to sell is 100% yours.",
    },
    {
        icon: '/front/images/agree-with-the-price.svg',
        title: "Happy with the price? Get Paid!",
        desc: "If you are happy with the offer, simply give us a thumbs up and we will put the cash right in your hand there and then!",
    },
];

const perks = [
    { icon: '/front/images/Free-Car-Valuation.svg', title: 'Free Car Valuation', desc: 'Get a non-obligation quote for your car based on the physical condition and the market price.' },
    { icon: '/front/images/Ownership-Transfer.svg', title: 'Ownership Transfer', desc: 'We are authorized by RTA, and our professionals will transfer the car in our office, with no hassles!' },
    { icon: '/front/images/Finance-Cleared.svg', title: 'Finance Settlement', desc: 'We clear the outstanding finance on cars and pay the difference to customers.' },
    { icon: '/front/images/Instant-Cash.svg', title: 'Instant Cash', desc: 'You can sell a car in 30 minutes and receive cash, bank transfer or cheque, based on your choice!' },
];

const guaranteeItems = [
    'A guaranteed quick and hassle-free sale',
    'Secure finance settlement',
    'On the spot cash in hand payment',
    'Safe, secure and trusted process',
    'All RTA paperwork taken care of for you',
    '0 hidden or unforeseen costs',
    'No obligation No pressure quote',
    'Free professional car inspection',
];

export default function SellMyCarAbuDhabi() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900 text-white min-h-[600px] flex items-center">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f24026]/10 -skew-x-12 translate-x-1/4" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                                Sell Your Car in <span className="text-[#f24026]">Abu Dhabi</span> within Just 30 Minutes
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
                                Want to sell your car in Abu Dhabi? Simply fill out the form below and you could have the cash in your hand within just 30 minutes — free professional inspection included.
                            </p>
                            <div className="hidden lg:block relative mt-12 h-64">
                                <img 
                                    src="/front2/images/banner-car.webp" 
                                    alt="Sell car Abu Dhabi" 
                                    className="absolute left-0 top-0 w-full object-contain transform -scale-x-100 drop-shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-[2.5rem] shadow-2xl p-2 max-w-xl mx-auto lg:mr-0">
                            <ValuationForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Sounds great, but <span className="text-[#f24026]">how do I sell my car in Abu Dhabi?</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our simple 4-step process gets you cash in hand in as little as 30 minutes.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorks.map((step, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-20 h-20 bg-[#f24026]/5 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all group-hover:bg-[#f24026]/10">
                                    <img src={step.icon} alt={step.title} className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section 1 */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Avoid the cons and find out what your car is really worth — <span className="text-[#f24026]">Sell Your Car with Confidence!</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>Our core principles are transparency and fairness. We don&apos;t hide behind a big corporate office thousands of miles away, we are right with you on the ground in Abu Dhabi helping you to make your sale.</p>
                            <p>We strive to become your reliable partner in dealing with your used car as our mission is to provide confidence to any person that wants to sell any car in UAE.</p>
                            <p>Our processes are clear and they never differentiate from what we say. You can expect the same 5★ treatment every time from us. It doesn&apos;t matter if you are selling us a brand-new Porsche or a beaten-up car that has seen better days, providing out of this world service to every client is what we do.</p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                            Cash Your Car in Abu Dhabi at the Right Price. <span className="text-[#f24026]">Perfect, You Are in The Right Place for That!</span>
                        </h3>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>Everyone is familiar with the sly tactics of lowball bidders in the car market. They are a universal pain for everyone involved.</p>
                            <p>Here at Expat Car Buyers, we have a 0-tolerance policy for low ball offers in our culture. You simply will not find them here. We give you the market value for your car.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Satisfaction Guarantee */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Your satisfaction is our business
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We guarantee that when you sell any car with us in Abu Dhabi, you will be 100% satisfied with our service. We cut no corners, are always upfront and go the extra mile for our clients.
                            </p>
                            <p className="text-[#f24026] font-bold mb-8 text-xl">
                                Here is what you can expect from us:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {guaranteeItems.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckIcon />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#f24026]/5 rounded-full blur-3xl" />
                                <img
                                    src="/front/images/Illustration-red.png"
                                    alt="Satisfaction Guarantee Abu Dhabi"
                                    className="relative z-10 w-full max-w-md mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perks Section */}
            <section className="py-24 bg-[#f24026]">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-16">
                        Abu Dhabi Car Selling <span className="text-[#FFD0C9]">Perks</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] text-white hover:bg-white/15 transition-all text-center">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <img src={perk.icon} alt={perk.title} className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{perk.title}</h3>
                                <p className="text-[#FFD0C9] text-sm leading-relaxed">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">
                        Our Happy <span className="text-[#f24026]">Abu Dhabi Customers</span>
                    </h2>
                    <TestimonialCarousel />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">
                        Frequently <span className="text-[#f24026]">Asked Questions</span>
                    </h2>
                    <FAQAccordion />
                </div>
            </section>
        </main>
    );
}
