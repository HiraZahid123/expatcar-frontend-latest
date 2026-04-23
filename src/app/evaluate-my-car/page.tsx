import { CheckCircle, Clock, ShieldCheck, Star, Banknote, Zap } from 'lucide-react';
import ValuationForm from '@/components/valuation-form/ValuationForm';

export const metadata = {
  title: 'Free Car Valuation UAE | Evaluate My Car — ExpatCarBuyers',
  description:
    'Get an instant, free car valuation in UAE. Our experts evaluate your car in minutes based on real market data. No obligation, no hidden charges. Serving Dubai, Abu Dhabi & Sharjah.',
};

const howItWorks = [
  {
    step: '01',
    title: 'Enter Your Car Details',
    desc: 'Select your car year, make, model, and variant from the form. It takes less than 60 seconds.',
  },
  {
    step: '02',
    title: 'Tell Us Your Mileage',
    desc: 'Mileage is one of the biggest factors in valuation. Enter your current odometer reading honestly.',
  },
  {
    step: '03',
    title: 'Receive Your Valuation',
    desc: 'Our expert team calls you within 15 minutes with a fair, data-backed cash offer for your car.',
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: 'Result in 15 Minutes',
    desc: "Receive your car's accurate market value in under 15 minutes, not hours or days.",
  },
  {
    icon: ShieldCheck,
    title: '100% Free & No Obligation',
    desc: 'Our valuation service is completely free. You are never under any pressure to sell.',
  },
  {
    icon: Star,
    title: 'Real UAE Market Data',
    desc: 'We use live UAE market prices, auction data, and 10+ years of experience to price every car fairly.',
  },
  {
    icon: CheckCircle,
    title: 'Certified Inspectors',
    desc: 'Our professional inspectors are trained to give accurate, unbiased assessments every time.',
  },
  {
    icon: Banknote,
    title: 'Best Price Guaranteed',
    desc: 'We match or beat any genuine written offer from a reputable UAE dealer — in writing.',
  },
  {
    icon: Zap,
    title: 'Same-Day Payment',
    desc: 'Once you accept our offer, we pay you instantly — same day, via bank transfer or cash.',
  },
];

export default function EvaluateMyCarPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Free Car Valuation UAE',
            provider: {
              '@type': 'Organization',
              name: 'ExpatCarBuyers',
              telephone: '+971561774555',
              url: 'https://www.expatcarbuyers.com',
            },
            areaServed: 'AE',
            description:
              'Free instant car valuation service in the UAE. Get a fair market price for your vehicle in minutes.',
            serviceType: 'Car Valuation',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'AED',
              description: 'Free car valuation — no obligation',
            },
          }),
        }}
      />

      {/* Hero with embedded form */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900 text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f24026]/10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:pt-8">
              <div className="inline-flex items-center gap-2 bg-[#f24026]/20 text-[#FFD0C9] text-sm font-bold px-4 py-2 rounded-full mb-8">
                <CheckCircle className="w-4 h-4" /> 100% Free — No Obligation
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                What Is Your
                <br />
                <span className="text-[#f24026]">Car Worth Today?</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Get a free, instant car valuation based on real UAE market data. No guesswork, no pressure — just an
                expert, fair price for your vehicle.
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#f24026] shrink-0" /> Completely free valuation
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#f24026] shrink-0" /> No obligation to sell
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#f24026] shrink-0" /> Expert calls you within 15 minutes
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#f24026] shrink-0" /> Same-day payment if you accept
                </span>
              </div>
            </div>
            <div className="relative z-10">
              <ValuationForm />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              How Our Free Valuation Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to get the most accurate valuation for your car in the UAE — faster than you think.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => (
              <div key={i} className="work-box text-center">
                <div className="w-16 h-16 bg-[#f24026] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-extrabold shadow-lg shadow-red-500/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#f24026]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Why Choose ExpatCarBuyers?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've helped over 12,000 car owners across Dubai, Abu Dhabi, and Sharjah get a fair price — fast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#FCF5F2] text-[#f24026] rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'I got a call within 10 minutes and the offer was higher than I expected. Sold my BMW in under an hour.',
                name: 'David T.',
                location: 'Dubai Marina',
              },
              {
                quote: 'The inspector was professional and honest. The valuation matched exactly what I received. No drama.',
                name: 'Rania K.',
                location: 'Abu Dhabi',
              },
              {
                quote: 'Used three other services before finding ExpatCarBuyers. This is the only one that treated me fairly.',
                name: 'Marco S.',
                location: 'Sharjah',
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#f24026] text-[#f24026]" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#f24026] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#f24026] rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 relative z-10">
              Get Your Free Valuation Now
            </h2>
            <p className="text-xl text-[#FFD0C9] max-w-2xl mx-auto mb-10 relative z-10">
              Don't settle for less than your car is worth. Our experts give you the best market price, every time —
              guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <a
                href="tel:+971561774555"
                className="px-10 py-4 bg-white text-[#f24026] font-extrabold rounded-2xl hover:bg-gray-100 transition-all shadow-xl"
              >
                Call +971 56 177 4555
              </a>
              <a
                href="https://wa.me/971561774555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#25d366] text-white font-extrabold rounded-2xl hover:bg-[#1ebe5d] transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
