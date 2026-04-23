import { Banknote, Clock, ShieldCheck, Star, ChevronDown } from 'lucide-react';

export const metadata = {
  title: 'Sell My Car in UAE | Instant Cash Offer — ExpatCarBuyers',
  description:
    'Sell your car in Dubai, Abu Dhabi & UAE with ExpatCarBuyers. Get a free instant valuation, professional inspection, and cash in hand — all in under 30 minutes.',
};

const steps = [
  {
    number: '01',
    title: 'Get a Free Quote',
    description:
      "Fill in your car details online or call us. We'll give you an instant, no-obligation valuation based on real UAE market data — in under 60 seconds.",
  },
  {
    number: '02',
    title: 'Free Inspection',
    description:
      'Our certified inspector comes to your location at a time that suits you — home, office, or anywhere in the UAE. No showroom visits, no queues.',
  },
  {
    number: '03',
    title: 'Get Paid Instantly',
    description:
      "Accept our offer and receive instant bank transfer or cash. We handle all RTA paperwork and deregister the car in your name — you do nothing.",
  },
];

const trustBadges = [
  { icon: '🏆', title: '10,000+ Cars Bought', subtitle: 'Trusted by thousands across UAE' },
  { icon: '⚡', title: '30-Min Process', subtitle: 'From quote to cash in hand' },
  { icon: '📋', title: 'RTA Paperwork Done', subtitle: 'We handle all transfer docs' },
  { icon: '💯', title: 'No Hidden Fees', subtitle: 'Fair, transparent offers every time' },
  { icon: '🚗', title: 'Any Make & Model', subtitle: 'All conditions accepted' },
  { icon: '🔒', title: 'Secure Payment', subtitle: 'Bank transfer or cash on the spot' },
];

const faqs = [
  {
    q: 'How quickly can I sell my car?',
    a: 'In most cases, you can sell your car on the same day. Our process takes as little as 30 minutes from the moment you get a quote to receiving cash or a bank transfer.',
  },
  {
    q: 'Do I need to visit an office to sell my car?',
    a: 'No. Our inspector comes directly to your location — home, office, or anywhere across Dubai, Abu Dhabi, or Sharjah. You never need to leave your doorstep.',
  },
  {
    q: 'What documents do I need to sell my car?',
    a: "You'll need your Emirates ID, the vehicle registration card (Mulkiya), and your car keys. We take care of all RTA transfer and deregistration paperwork.",
  },
  {
    q: 'Will you buy a car with a bank loan or finance outstanding?',
    a: 'Yes. We handle bank-financed and mortgaged cars regularly. We liaise directly with your bank to clear the outstanding finance and pay you the remaining balance.',
  },
  {
    q: 'Do you buy cars in bad condition or with accident history?',
    a: 'Absolutely. We buy cars in any condition — accident-damaged, high mileage, flood-affected, or with mechanical issues. Just describe the condition honestly and we will give you a fair market offer.',
  },
  {
    q: 'Is there any obligation to accept the offer?',
    a: 'None whatsoever. Our valuation and inspection are completely free, and you are under no obligation to accept our offer at any point.',
  },
];

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function SellMyCarPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sell My Car UAE',
            provider: {
              '@type': 'Organization',
              name: 'ExpatCarBuyers',
              telephone: '+971561774555',
              url: 'https://www.expatcarbuyers.com',
            },
            areaServed: 'AE',
            description:
              'Instant car buying service in the UAE. Free valuation, professional inspection, and same-day cash payment.',
            serviceType: 'Car Buying',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900 text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f24026]/10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#f24026]/20 text-[#FFD0C9] text-sm font-bold px-4 py-2 rounded-full mb-8">
              <Clock className="w-4 h-4" /> Done in 30 Minutes
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Sell Your Car in UAE —
              <br />
              <span className="text-[#f24026]">Fast, Easy, Honest.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Get a free, no-obligation valuation today. Our experts come to you, inspect your car on the spot, and
              pay you instantly. No classified listings. No time-wasters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/"
                className="px-10 py-4 bg-[#f24026] text-white font-extrabold rounded-2xl hover:bg-[#d63520] transition-all shadow-xl shadow-red-500/30 text-center"
              >
                Get Free Valuation
              </a>
              <a
                href="https://wa.me/971561774555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#25d366] text-white font-extrabold rounded-2xl hover:bg-[#1ebe5d] transition-all text-center flex items-center justify-center gap-2"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've simplified the car selling process into three easy steps. No stress, no surprises — just cash in
              your hand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="work-box text-center">
                <div className="w-20 h-20 bg-[#f24026] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold shadow-lg shadow-red-500/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-[#f24026]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Why Sellers Choose Us</h2>
            <p className="text-gray-600">Trusted by over 10,000 car sellers across the UAE</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="trust-badge">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <p className="font-bold text-gray-900 text-sm mb-1">{badge.title}</p>
                <p className="text-xs text-gray-500">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ExpatCarBuyers over classifieds */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
                Selling Privately vs. Selling to Us
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Time to sell', them: 'Weeks or months', us: '30 minutes' },
                  { label: 'Paperwork', them: 'You handle everything', us: 'We handle everything' },
                  { label: 'Payment risk', them: 'Bounced cheques & scams', us: 'Guaranteed bank transfer' },
                  { label: 'Negotiation', them: 'Endless haggling', us: 'One fair offer, no hassle' },
                  { label: 'Inspection', them: 'Strangers at your home', us: 'Our certified professional' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-gray-50 text-sm">
                    <span className="font-bold text-gray-700">{row.label}</span>
                    <span className="text-gray-500 line-through text-center">{row.them}</span>
                    <span className="text-[#f24026] font-bold text-center">{row.us}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="content-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FCF5F2] text-[#f24026] rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Our Guarantee</h3>
                  <p className="text-gray-500 text-sm">No surprises. Ever.</p>
                </div>
              </div>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Free, no-obligation valuation — always',
                  'We come to you — no showroom visits',
                  'Instant bank transfer or cash payment',
                  'All RTA paperwork handled by our team',
                  'We buy financed & loan-mortgaged cars',
                  'We buy any condition — even damaged',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-[#f24026] shrink-0 fill-[#f24026]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#f24026]/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Everything you need to know about selling your car with ExpatCarBuyers.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 list-none select-none hover:bg-[#f24026]/5 transition-colors">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-[#f24026] shrink-0 ml-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 pt-4 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#f24026] rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl" />
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 relative z-10">
              Ready to Sell Your Car?
            </h2>
            <p className="text-xl text-[#FFD0C9] max-w-2xl mx-auto mb-10 relative z-10">
              Get your free valuation today — it only takes 60 seconds. No obligation, no pressure, just a fair offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <a
                href="/"
                className="px-10 py-4 bg-white text-[#f24026] font-extrabold rounded-2xl hover:bg-gray-100 transition-all shadow-xl"
              >
                Get Free Valuation
              </a>
              <a
                href="https://wa.me/971561774555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#25d366] text-white font-extrabold rounded-2xl hover:bg-[#1ebe5d] transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
