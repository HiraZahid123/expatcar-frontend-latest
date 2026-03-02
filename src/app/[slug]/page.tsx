import React from 'react';
import { Metadata } from 'next';
import ValuationForm from "@/components/valuation-form/ValuationForm";
import { ShieldCheck, Zap, Banknote, MapPin, ChevronRight, Star, Info } from 'lucide-react';
import api from '@/lib/api';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = rawSlug.replace('sell-my-', '');
  try {
    const res = await api.get(`/car-data/${slug}`);
    const { type, make, model } = res.data.data;

    if (type === 'make') {
      return {
        title: `Sell My ${make.name} in UAE | Instant Valuation`,
        description: `Want to sell your ${make.name}? Get a free instant valuation for your ${make.name} in Dubai & UAE. Best prices, instant cash, 100% transparent.`,
      };
    } else {
      return {
        title: `Sell My ${make.name} ${model.name} in UAE | Best Price Guaranteed`,
        description: `Get the best price for your ${make.name} ${model.name} today. Instant online valuation, free doorstep inspection, and cash in hand in 30 minutes.`,
      };
    }
  } catch (e) {
    return { title: 'Sell My Car | ExpatCarBuyers' };
  }
}

export default async function DynamicCarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = rawSlug.replace('sell-my-', '');

  if (!rawSlug.startsWith('sell-my-')) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn't find the car you're looking for.</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          Go Back Home
        </a>
      </div>
    );
  }

  let data = null;
  try {
    const res = await api.get(`/car-data/${slug}`);
    data = res.data.data;
  } catch (e) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn't find the car you're looking for.</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          Go Back Home
        </a>
      </div>
    );
  }

  const { type, make, model, models } = data;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2" />

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                {make.logo_url && (
                  <img src={make.logo_url} alt={make.name} className="w-16 h-16 object-contain" />
                )}
                <div>
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Sell My {type === 'make' ? <span className="text-blue-600">{make.name}</span> : <>{make.name} <span className="text-blue-600">{model.name}</span></>}
                  </h1>
                </div>
              </div>

              <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                {type === 'make'
                  ? `We buy any ${make.name} in the UAE. Get a guaranteed best market price with immediate payment.`
                  : `Got a ${make.name} ${model.name}? We are currently offering premium prices for this model in Dubai. Get your valuation now.`
                }
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="font-bold text-gray-700">Top Market Value</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-gray-700">Instant Cash</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-[3rem] blur-2xl -z-10" />
                <ValuationForm
                  initialMakeId={make.id.toString()}
                  initialModelId={type === 'model' ? model.id.toString() : undefined}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {type === 'make' ? (
            <>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-12 flex items-center gap-3">
                Choose Your <span className="text-blue-600">{make.name}</span> Model
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {models.map((m: any) => (
                  <a
                    href={`/sell-my-${make.slug}-${m.slug}`}
                    key={m.id}
                    className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all flex items-center justify-between"
                  >
                    <span className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors uppercase tracking-wide">
                      {m.name}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-4xl mx-auto bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Why Sell Your {make.name} {model.name} to Us?</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  The <strong>{make.name} {model.name}</strong> is a highly sought-after vehicle in the UAE used car market.
                  At ExpatCarBuyers, we specialize in valuing and purchasing these models quickly and transparently.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-8">
                  <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <Info className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                    <span>Accurate market valuation based on live UAE sales data.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <Info className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                    <span>Free doorstep inspection anywhere in Dubai, Abu Dhabi, or Sharjah.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <Info className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                    <span>Immediate bank transfer or cash payment upon agreement.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <Info className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                    <span>Full RTA documentation handling at no extra cost to you.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust & Testimonial Placeholder */}
      <section className="bg-gray-900 py-24 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-6">Join 50,000+ Happy Sellers</h2>
            <p className="text-gray-400 text-lg">We've spent over 10 years perfecting the car buying experience in the UAE.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-gray-300 mb-6">"Sold my {make.name} in less than an hour. The team was professional and the price was fair compared to other dealers in Dubai."</p>
                <div className="font-bold text-white">— Verified Customer</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
