import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CreditCard,
  Leaf,
  Shield,
  Sparkles,
} from "lucide-react";
import { products } from "@/lib/products";
import { Reveal, FloatY } from "@/components/motion";
import { Nfc } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-12 md:pb-16 lg:pb-16">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <Reveal className="order-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Premium NFC business cards
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                Make a brilliant first impression.
              </h1>
              <p className="text-neutral-600 text-lg max-w-xl mx-auto md:mx-0">
                Share your details with a tap. Crafted with premium materials
                and a design aesthetic inspired by the best product showcases.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow-sm shadow-blue-300/40 hover:bg-blue-700 transition-colors"
                >
                  Shop cards <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                >
                  Learn more
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-neutral-500">
                <div className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Secure by design
                </div>
                <div className="inline-flex items-center gap-2">
                  <Leaf className="h-4 w-4" /> Eco‑friendly
                </div>
                <div className="inline-flex items-center gap-2">
                  <CreditCard className="h-4 w-4" /> One‑time purchase
                </div>
              </div>
            </Reveal>
            <div className="relative order-2">
              <FloatY amplitude={8} duration={8}>
                <div className="relative w-full rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 ring-1 ring-inset ring-neutral-300/60 overflow-hidden aspect-[16/10] md:aspect-[5/4] lg:aspect-[4/3] max-h-[320px] sm:max-h-[360px] md:max-h-[420px] mx-auto" />
              </FloatY>
              <div className="absolute inset-0 grid place-items-center">
                {/* Card stack */}
                <Reveal
                  delay={0.1}
                  className="relative w-full max-w-[15.5rem] sm:max-w-[17.5rem] md:max-w-[20rem] lg:max-w-[21rem] xl:max-w-[22rem] aspect-[85/54]"
                >
                  {/* Black card */}
                  <div className="absolute inset-0 -left-3 top-4 sm:-left-4 sm:top-5 md:-left-6 md:top-6 rotate-[-8deg] rounded-2xl shadow-2xl ring-1 ring-black/10 overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 card-pop z-0">
                    <div className="absolute right-5 top-5 text-blue-400/80">
                      <Nfc className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                    </div>
                    <div className="absolute left-5 bottom-5 text-white/90">
                      <div className="text-sm sm:text-base font-medium tracking-wide">
                        Alex Morgan
                      </div>
                    </div>
                  </div>

                  {/* Blue card (primary) */}
                  <div className="absolute inset-0 -left-1 top-2 sm:-left-2 sm:top-3 rotate-[2deg] rounded-2xl shadow-[0_25px_60px_-20px_rgba(37,99,235,0.6)] ring-1 ring-blue-500/40 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 card-pop card-pop-delayed z-10">
                    <div className="absolute right-5 top-5 text-white/90">
                      <Nfc className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                    </div>
                    <div className="absolute left-5 bottom-5 text-white">
                      <div className="text-sm sm:text-base font-medium tracking-wide">
                        Jordan Lee
                      </div>
                    </div>
                  </div>

                  {/* White card */}
                  <div className="absolute inset-0 left-4 sm:left-5 md:left-6 -top-1 rotate-[8deg] rounded-2xl shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5 overflow-hidden bg-gradient-to-br from-white to-neutral-50 card-pop card-pop-delay-2 z-20 max-h-[95%]">
                    <div className="absolute right-5 top-5 text-blue-600/90">
                      <Nfc className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                    </div>
                    <div className="absolute left-5 bottom-5 text-neutral-900">
                      <div className="text-sm sm:text-base font-medium tracking-wide">
                        Priya Shah
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-15 sm:py-15 border-t border-neutral-200/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 md:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Everything you need to share, beautifully
            </h2>
            <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
              From instant NFC sharing to a smart, always‑up‑to‑date profile —
              Brilson delivers a premium experience end‑to‑end.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Feature 1 */}
            <Reveal className="group relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-blue-50 text-blue-700 grid place-items-center ring-1 ring-blue-100">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-medium">Tap to share</h3>
              </div>
              <p className="text-neutral-600 text-sm mt-3">
                NFC-enabled, no apps required. Works instantly with modern
                smartphones.
              </p>
              <div
                style={{
                  backgroundImage: 'url("/tap-share.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                }}
                className="mt-6 aspect-[5/4] w-full rounded-2xl bg-neutral-50 ring-1 ring-inset ring-neutral-200 grid place-items-center overflow-hidden"
              ></div>
            </Reveal>

            {/* Feature 2 */}
            <Reveal
              delay={0.05}
              className="group relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-blue-50 text-blue-700 grid place-items-center ring-1 ring-blue-100">
                  <Shield className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-medium">Beautiful materials</h3>
              </div>
              <p className="text-neutral-600 text-sm mt-3">
                From matte PVC to titanium. Purposefully minimal and durable.
              </p>
              <div
                style={{
                  backgroundImage: 'url("/metal-cards.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="mt-6 aspect-[5/4] w-full rounded-2xl bg-neutral-50 ring-1 ring-inset ring-neutral-200 grid place-items-center overflow-hidden"
              ></div>
            </Reveal>

            {/* Feature 3 */}
            <Reveal
              delay={0.1}
              className="group relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-blue-50 text-blue-700 grid place-items-center ring-1 ring-blue-100">
                  <Leaf className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-medium">Smart profile</h3>
              </div>
              <p className="text-neutral-600 text-sm mt-3">
                Update links, socials, and contact once — it’s live everywhere.
              </p>

              {/* minimal half mobile frame preview */}
              <div className="mt-6 aspect-[5/4] w-full rounded-2xl bg-neutral-50 ring-1 ring-inset ring-neutral-200 overflow-hidden">
                <div className="relative h-full w-full">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-[9.5rem] aspect-[9/19] rounded-[1rem] bg-white shadow-xl ring-1 ring-black/5 p-2">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-3 w-12 rounded-b-lg bg-neutral-200/70" />
                    {/* inner screen, intentionally blank so you can add UI later */}
                    <div
                      style={{
                        backgroundImage: 'url("/brilson-profile.png")',

                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="h-full w-full rounded-[0.75rem] bg-neutral-50 ring-1 ring-inset ring-neutral-200"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Personalize */}
      <section className="py-15 sm:py-15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Make it yours
            </h2>
            <p className="text-neutral-600 mt-3 max-w-prose mx-auto lg:mx-0">
              Customize your profile with links, socials, and branding. Update
              any time — your card always shares the latest version.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 max-w-md mx-auto lg:mx-0">
              {[
                "Custom URL & theme",
                "vCard download",
                "Link groups & highlights",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Explore features
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[6/5] w-full rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 ring-1 ring-inset ring-neutral-300/60 overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                {/* phone mock */}
                <div className="relative w-full mt-10 max-w-[18rem] aspect-[9/19] rounded-[2rem] bg-white shadow-2xl ring-1 ring-black/5 p-4">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 h-5 w-24 rounded-b-2xl bg-neutral-200/60" />
                  <div
                    style={{
                      backgroundImage: 'url("/brilson-profile.png")',

                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="h-full w-full rounded-[1.5rem] bg-neutral-50 ring-1 ring-inset ring-neutral-200 p-4 flex flex-col gap-3"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Listing */}
      <section id="pricing" className="py-15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Choose your card
              </h2>
              <p className="text-neutral-600 mt-2">
                Premium finishes. Transparent, one‑time pricing.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {products.map((p) => (
              <div
                key={p.slug}
                className={`group relative rounded-3xl border p-5 sm:p-6 bg-white ${
                  p.highlight
                    ? "border-blue-200 shadow-[0_10px_40px_-20px_rgba(37,99,235,0.5)]"
                    : "border-neutral-200 shadow-sm"
                }`}
              >
                <div
                  style={{
                    backgroundImage: 'url("' + p.image + '")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="aspect-[5/3] w-full rounded-2xl bg-neutral-50 ring-1 ring-inset ring-neutral-200 grid place-items-center"
                ></div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    {p.name}
                    {p.highlight && (
                      <span className="text-xs rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 border border-blue-200">
                        Popular
                      </span>
                    )}
                  </h3>
                  <div className="mt-1 text-2xl font-semibold">₹{p.price}</div>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                    {p.features.map((f) => (
                      <li key={f} className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-col xs:flex-row gap-3">
                    <Link
                      href={`/${p.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-black"
                    >
                      View details <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How it works */}
      <section className="py-16 sm:py-20 border-t border-neutral-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              How it works
            </h2>
            <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
              A simple, elegant flow from tap to saved contact — designed for
              speed.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "Tap your card",
                desc: "One gentle tap with NFC — no app installs needed.",
                num: 1,
              },
              {
                title: "Open your profile",
                desc: "Instantly shows a beautiful, branded profile.",
                num: 2,
              },
              {
                title: "Save & connect",
                desc: "Add to contacts, follow links, or share onward.",
                num: 3,
              },
            ].map((step) => (
              <Reveal
                key={step.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center font-medium">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                </div>
                <p className="text-neutral-600 text-sm mt-3">{step.desc}</p>
                <div className="mt-6 aspect-[5/3] w-full rounded-2xl bg-neutral-50 ring-1 ring-inset ring-neutral-200 grid place-items-center">
                  <div className="relative w-full max-w-[12rem] aspect-[16/10] rounded-xl bg-white shadow-xl ring-1 ring-black/5">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-neutral-50" />
                    <div className="absolute left-4 top-4 h-4 w-4 rounded bg-blue-600" />
                    <div className="absolute left-4 bottom-6 h-1.5 w-20 rounded bg-neutral-200" />
                    <div className="absolute left-4 bottom-4 h-1.5 w-28 rounded bg-neutral-100" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Call to action */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white p-7 sm:p-10 ring-1 ring-inset ring-white/10 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.6)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Ready when you are
                </h3>
                <p className="text-blue-100 mt-2">
                  Choose your card and start sharing in minutes.
                </p>
              </div>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100"
              >
                Shop cards <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-neutral-200/60">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">FAQs</h2>
          <div className="space-y-4">
            <details className="rounded-xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-medium">
                Do I need an app to use Brilson cards?
              </summary>
              <p className="text-neutral-600 mt-2 text-sm">
                No. Our NFC works with modern smartphones without any app.
              </p>
            </details>
            <details className="rounded-xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-medium">
                Can I update my profile later?
              </summary>
              <p className="text-neutral-600 mt-2 text-sm">
                Yes. Change your links and contact anytime — the card always
                points to your latest profile.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
