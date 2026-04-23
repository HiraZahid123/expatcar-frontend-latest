import { CheckCircle, Car, ChevronDown } from 'lucide-react';

export const metadata = {
  title: 'We Buy Any Car UAE | All Makes & Models — ExpatCarBuyers',
  description:
    'We buy any car in the UAE — any make, any model, any year, any condition. Toyota, BMW, Mercedes, Nissan and more. Get an instant cash offer today.',
};

const makes = [
  { name: 'Toyota', slug: 'toyota' },
  { name: 'Nissan', slug: 'nissan' },
  { name: 'BMW', slug: 'bmw' },
  { name: 'Mercedes-Benz', slug: 'mercedes-benz' },
  { name: 'Audi', slug: 'audi' },
  { name: 'Land Rover', slug: 'land-rover' },
  { name: 'Lexus', slug: 'lexus' },
  { name: 'Porsche', slug: 'porsche' },
  { name: 'Jeep', slug: 'jeep' },
  { name: 'Ford', slug: 'ford' },
  { name: 'Chevrolet', slug: 'chevrolet' },
  { name: 'Hyundai', slug: 'hyundai' },
  { name: 'Kia', slug: 'kia' },
  { name: 'Honda', slug: 'honda' },
  { name: 'Mazda', slug: 'mazda' },
  { name: 'Infiniti', slug: 'infiniti' },
  { name: 'Mitsubishi', slug: 'mitsubishi' },
  { name: 'GMC', slug: 'gmc' },
  { name: 'Volvo', slug: 'volvo' },
  { name: 'Jaguar', slug: 'jaguar' },
  { name: 'Dodge', slug: 'dodge' },
  { name: 'Cadillac', slug: 'cadillac' },
  { name: 'Maserati', slug: 'maserati' },
  { name: 'Bentley', slug: 'bentley' },
  { name: 'Range Rover', slug: 'range-rover' },
  { name: 'Volkswagen', slug: 'volkswagen' },
  { name: 'Peugeot', slug: 'peugeot' },
  { name: 'Renault', slug: 'renault' },
];

const conditions = [
  {
    title: 'Excellent Condition',
    desc: 'No scratches, full service history, original paint — we offer top market price.',
  },
  {
    title: 'Good Condition',
    desc: 'Minor wear, regularly serviced, no major issues — very competitive offer.',
  },
  {
    title: 'Fair Condition',
    desc: 'Some cosmetic damage, running well, serviceable — honest, fair valuation.',
  },
  {
    title: 'Poor Condition',
    desc: 'Major body damage, mechanical issues, or salvage title — still a genuine offer.',
  },
  {
    title: 'Non-Running Vehicle',
    desc: 'Engine failure, gearbox fault, or accident write-off — we buy these too.',
  },
  {
    title: 'Bank-Financed Car',
    desc: 'Outstanding loan or mortgage? We clear it directly with the bank and pay you the balance.',
  },
];

const faqs = [
  {
    q: 'Do you really buy any car, regardless of condition?',
    a: 'Yes. We buy cars in all conditions — from near-new to accident write-offs, high-mileage workhorses, flooded vehicles, and cars with mechanical problems. Simply describe your car honestly when you contact us and we will make a fair offer.',
  },
  {
    q: 'What makes and models do you buy?',
    a: 'We buy all makes and models sold in the UAE — Japanese, German, American, Korean, British, and European. From affordable hatchbacks to luxury SUVs, supercars, and commercial vehicles.',
  },
  {
    q: 'Will you buy my car if it has an outstanding finance or loan?',
    a: 'Absolutely. We handle bank-financed and mortgaged vehicles regularly. Our team liaises directly with your lender to settle the outstanding amount, and you receive the remaining balance — the same day.',
  },
  {
    q: 'Do you buy non-GCC spec cars?',
    a: 'Yes. We purchase both GCC and non-GCC specification cars. Non-GCC spec vehicles may receive a slightly adjusted offer to reflect potential conformity differences, but we always give a fair, transparent valuation.',
  },
  {
    q: 'How do you determine the price for any car?',
    a: "Our valuation team uses real-time UAE market data, auction house results, mileage, service history, and a physical inspection to determine a fair and competitive price. There are no arbitrary deductions — we explain every figure.",
  },
  {
    q: 'What if my car has an expired registration?',
    a: "Not a problem. We regularly purchase cars with expired Mulkiyas. Our team will guide you through any requirements and handle all paperwork with the RTA on your behalf.",
  },
];

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function WeBuyAnyCarPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'We Buy Any Car UAE',
            provider: {
              '@type': 'Organization',
              name: 'ExpatCarBuyers',
              telephone: '+971561774555',
              url: 'https://www.expatcarbuyers.com',
            },
            areaServed: 'AE',
            description:
              'ExpatCarBuyers purchases any car in the UAE — all makes, models, years, and conditions.',
            serviceType: 'Used Car Buying',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900 text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f24026]/10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#f24026]/20 text-[#FFD0C9] text-sm font-bold px-4 py-2 rounded-full mb-8">
              <Car className="w-4 h-4" /> All Makes · All Models · All Conditions
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              We Buy <span className="text-[#f24026]">Any Car</span>
              <br />
              in the UAE
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Any make, any model, any condition, any year. If it has four wheels and a VIN, we'll make you a fair
              cash offer — today. No exclusions, no excuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/"
                className="px-10 py-4 bg-[#f24026] text-white font-extrabold rounded-2xl hover:bg-[#d63520] transition-all shadow-xl shadow-red-500/30 text-center"
              >
                Get Your Free Offer
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

      {/* Popular Makes */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Popular Makes We Buy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on your car's make to see exactly how we buy and price it. We purchase every brand sold in the
              UAE.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {makes.map((make, i) => (
              <a
                key={i}
                href={`/sell-my-${make.slug}`}
                className="bg-white border-2 border-[#FFD0C9] text-gray-800 font-bold px-6 py-3 rounded-full text-sm hover:bg-[#f24026] hover:text-white hover:border-[#f24026] transition-all shadow-sm"
              >
                {make.name}
              </a>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Don't see your make?{' '}
            <a href="/contact" className="text-[#f24026] font-bold hover:underline">
              Contact us
            </a>{' '}
            — we buy every brand, including rare and discontinued models.
          </p>
        </div>
      </section>

      {/* All Conditions */}
      <section className="py-20 bg-[#f24026]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Every Condition. Every Time.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There is no car we won't consider. Our experienced buyers have seen — and purchased — everything.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {conditions.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#f24026] text-white rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { figure: '15,000+', label: 'Cars bought across UAE' },
              { figure: '50+', label: 'Expert inspectors nationwide' },
              { figure: '10 Yrs', label: 'Trusted in the UAE market' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8">
                <p className="text-4xl font-extrabold text-[#f24026] mb-2">{item.figure}</p>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </div>
            ))}
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
            <p className="text-gray-600">Common questions about our "We Buy Any Car" service.</p>
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
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 relative z-10">
              Get an Offer for Your Car Today
            </h2>
            <p className="text-xl text-[#FFD0C9] max-w-2xl mx-auto mb-10 relative z-10">
              Whatever car you're driving, we want to buy it. Get a free, no-obligation offer in minutes — and cash
              in hand the same day.
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
