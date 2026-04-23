import { Banknote, Clock, Car, ShieldCheck, Star } from 'lucide-react';

export const metadata = {
  title: 'Cash for Cars UAE | Instant Payment, Any Condition — ExpatCarBuyers',
  description:
    'Sell your car for instant cash in the UAE. We buy any car in any condition — damaged, old, or financed. Same-day payment. Serving Dubai, Abu Dhabi & Sharjah.',
};

const stats = [
  { value: '10,000+', label: 'Cars Purchased' },
  { value: '30 Mins', label: 'Average Process Time' },
  { value: 'AED 2B+', label: 'Paid to Sellers' },
  { value: '100%', label: 'Satisfaction Rate' },
];

const benefits = [
  {
    icon: Banknote,
    title: 'Instant Cash Payment',
    desc: 'Receive payment via bank transfer or cash the moment you accept our offer. No waiting, no delays, no excuses.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    desc: 'Call us in the morning, cash in hand by afternoon. Our streamlined 30-minute process is the fastest in the UAE.',
  },
  {
    icon: Car,
    title: 'Any Condition Accepted',
    desc: 'Accident-damaged, high mileage, flood-affected, or mechanically faulty — we buy them all at a fair price.',
  },
  {
    icon: ShieldCheck,
    title: 'We Handle All Paperwork',
    desc: 'Our team manages all RTA transfer documents and insurance cancellation. Zero admin, zero hassle for you.',
  },
];

const acceptedConditions = [
  'Perfect condition',
  'Minor scratches',
  'Accident damage',
  'High mileage',
  'Mechanical issues',
  'Bank financed',
  'Flood damage',
  'Old models (pre-2005)',
  'Luxury cars',
  'Commercial vehicles',
  'GCC spec',
  'Non-GCC spec',
  'Expired registration',
  'Missing service history',
];

const testimonials = [
  {
    name: 'James R.',
    location: 'Dubai Marina',
    rating: 5,
    text: "Sold my 2019 Nissan Patrol in under an hour. The offer was fair and the bank transfer came through within minutes of signing. An incredible, stress-free experience.",
  },
  {
    name: 'Priya M.',
    location: 'Abu Dhabi',
    rating: 5,
    text: "I had a car with accident damage and thought I'd get a terrible offer. ExpatCarBuyers gave me a genuinely fair price and handled all the paperwork. Highly recommended.",
  },
  {
    name: 'Stefan K.',
    location: 'Sharjah',
    rating: 5,
    text: 'Was worried about clearing my outstanding bank finance. They managed everything directly with the lender — stress-free from start to finish. Cash in my account same day.',
  },
];

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function CashForCarsPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Cash for Cars UAE',
            provider: {
              '@type': 'Organization',
              name: 'ExpatCarBuyers',
              telephone: '+971561774555',
              url: 'https://www.expatcarbuyers.com',
            },
            areaServed: 'AE',
            description:
              'Instant cash for cars in UAE. Any make, any model, any condition. Same-day payment.',
            serviceType: 'Cash for Cars',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900 text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f24026]/10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#f24026]/20 text-[#FFD0C9] text-sm font-bold px-4 py-2 rounded-full mb-8">
              <Banknote className="w-4 h-4" /> Instant Bank Transfer or Cash
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Cash for Cars UAE —
              <br />
              <span className="text-[#f24026]">Any Car. Any Condition.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Turn your car into instant cash today. We buy all makes and models, regardless of condition, age, or
              finance status. No hassle — just a fair price, paid immediately.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-extrabold text-[#f24026] mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              The Fastest Way to Get Cash for Your Car
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No listings, no waiting, no haggling. We make an offer and pay you — the same day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#FCF5F2] text-[#f24026] rounded-2xl flex items-center justify-center mb-6">
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Conditions */}
      <section className="py-20 bg-[#f24026]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              We Buy Cars in Any Condition
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't worry about the state of your car. From showroom-perfect to heavily damaged, we'll make you a fair
              cash offer.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {acceptedConditions.map((cond, i) => (
              <span
                key={i}
                className="bg-white border-2 border-[#FFD0C9] text-gray-800 font-semibold px-5 py-2.5 rounded-full text-sm hover:border-[#f24026] hover:text-[#f24026] transition-colors"
              >
                ✓ {cond}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How we pay */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="content-card">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
                How We Pay You
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Instant Bank Transfer',
                    desc: 'We transfer the agreed amount to your UAE bank account the moment the deal is finalised. Usually within minutes.',
                  },
                  {
                    title: 'Cash on the Spot',
                    desc: 'Prefer physical cash? Our inspector can bring the full amount to your location. Just let us know in advance.',
                  },
                  {
                    title: 'Cheque (Manager\'s Cheque)',
                    desc: 'For high-value transactions, we can arrange a manager\'s cheque from a UAE bank — guaranteed and secure.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-[#f24026] text-white rounded-xl flex items-center justify-center shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                What Our Customers Say
              </h2>
              <div className="space-y-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-[#f24026] text-[#f24026]" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#f24026] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              Get Cash for Your Car Today
            </h2>
            <p className="text-xl text-[#FFD0C9] max-w-2xl mx-auto mb-10 relative z-10">
              Don't let your car lose more value. Call us or WhatsApp now for an instant cash offer — no obligation.
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
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
