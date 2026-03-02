import ValuationForm from "@/components/valuation-form/ValuationForm";
import QuickSearch from "@/components/search/QuickSearch";
import { ShieldCheck, Zap, Banknote, MapPin, Search } from 'lucide-react';

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center bg-white">
                {/* Abstract Background Decoration Container */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                                </span>
                                <span className="text-blue-700 text-sm font-bold tracking-wide uppercase">#1 Car Buyer in UAE</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                                Sell Your Car in <br />
                                <span className="text-blue-600">30 Minutes.</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                                Experience the most transparent, fast, and secure way to sell your car in Dubai and the UAE. No haggling, just cash.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <QuickSearch />
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-lg">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-blue-100/50 rounded-[3rem] blur-2xl -z-10" />
                                <ValuationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section & Brands */}
            <section className="bg-white py-24 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">We Buy All Brands</h2>
                        <p className="text-gray-500">Instant cash for any car brand, regardless of its condition or age.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
                        {['Toyota', 'Nissan', 'Mitsubishi', 'BMW', 'Mercedes', 'Honda', 'Lexus', 'Hyundai', 'Kia', 'Ford', 'Tesla', 'Audi'].map((name) => (
                            <a
                                href={`/sell-my-${name.toLowerCase().replace(' ', '-')}`}
                                key={name}
                                className="group flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all font-black text-xl text-gray-200 hover:text-blue-600"
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features/Why Us */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why ExpatCarBuyers?</h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Zap, title: "Speed", desc: "Inspection to cash in 30 minutes." },
                            { icon: ShieldCheck, title: "Trust", desc: "Licensed professional dealers." },
                            { icon: Banknote, title: "Value", desc: "Best market prices guaranteed." },
                            { icon: MapPin, title: "Convenience", desc: "We come to your doorstep." },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
