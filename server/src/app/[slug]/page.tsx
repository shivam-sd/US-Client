import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, Box, Share2 } from "lucide-react";
import { getProduct } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return notFound();

  return (
    <main>
      {/* Intro */}
      <section className="border-b border-neutral-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-10 sm:pb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to all cards
          </Link>
          <div className="mt-6 grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                {product.name}
              </h1>
              <p className="mt-3 text-neutral-600 max-w-xl mx-auto lg:mx-0">
                A premium NFC business card designed for modern networking.
                Beautifully minimal, instantly shareable.
              </p>
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
                <div className="text-3xl font-semibold">₹{product.price}</div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black">
                  Buy now <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-6 text-sm text-neutral-500 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4" /> 1‑year warranty
                </span>
                <span className="inline-flex items-center gap-2">
                  <Box className="h-4 w-4" /> Free worldwide shipping
                </span>
                <span className="inline-flex items-center gap-2">
                  <Share2 className="h-4 w-4" /> Share without apps
                </span>
              </div>
            </div>
            <div className="relative order-first lg:order-none">
              <div className="relative aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 ring-1 ring-inset ring-neutral-300/60 overflow-hidden">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative w-full max-w-sm aspect-[16/10] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-neutral-50" />
                    <div className="absolute left-6 top-6 h-5 w-5 sm:h-6 sm:w-6 rounded bg-blue-600" />
                    <div className="absolute left-6 bottom-10 sm:bottom-8 h-1.5 sm:h-2 w-24 sm:w-28 rounded bg-neutral-200" />
                    <div className="absolute left-6 bottom-6 sm:bottom-5 h-1.5 sm:h-2 w-32 sm:w-40 rounded bg-neutral-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details grid */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            <div className="md:col-span-2 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-medium">Why {product.name}</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2.5 sm:gap-3 text-sm text-neutral-700">
                {product.features.map((f) => (
                  <li key={f} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 sm:mt-8 aspect-[3/2] w-full rounded-2xl bg-neutral-50 ring-1 ring-inset ring-neutral-200 grid place-items-center">
                <Image
                  src={product.image}
                  alt="card detail"
                  width={140}
                  height={90}
                  className="opacity-70"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-medium">Specifications</h3>
              <dl className="mt-4 divide-y divide-neutral-200 text-sm">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between py-3"
                  >
                    <dt className="text-neutral-600">{s.label}</dt>
                    <dd className="font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 rounded-xl bg-neutral-50 p-4 text-xs text-neutral-600">
                Compatible with most modern smartphones. For older devices,
                share via QR.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-20 sm:py-24 border-t border-neutral-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Materials, perfected
            </h2>
            <p className="text-neutral-600 mt-2">
              Crafted to last. Finished to impress.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {["PVC (Matte)", "Aluminum (Satin)", "Titanium (Brushed)"].map(
              (m) => (
                <div
                  key={m}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6 ring-1 ring-inset ring-white/40 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.2)]"
                >
                  <div className="aspect-[5/3] w-full rounded-2xl bg-gradient-to-br from-white to-neutral-100 ring-1 ring-inset ring-neutral-200" />
                  <div className="mt-4 text-center text-sm text-neutral-700">
                    {m}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Tap Showcase */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Tap. Share. Done.
            </h3>
            <p className="text-neutral-600 mt-3 max-w-prose">
              NFC makes sharing instantaneous. No apps to install. For older
              devices, a seamless QR fallback ensures everyone gets your info.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 max-w-md mx-auto lg:mx-0">
              {[
                "Instant NFC tap",
                "QR fallback",
                "Works with iOS & Android",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-first lg:order-none">
            <div className="relative aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 ring-1 ring-inset ring-neutral-300/60 overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative w-full max-w-sm aspect-[16/10] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-neutral-50" />
                  <div className="absolute left-6 top-6 h-5 w-5 sm:h-6 sm:w-6 rounded bg-blue-600" />
                  <div className="absolute left-6 bottom-10 sm:bottom-8 h-1.5 sm:h-2 w-24 sm:w-28 rounded bg-neutral-200" />
                  <div className="absolute left-6 bottom-6 sm:bottom-5 h-1.5 sm:h-2 w-32 sm:w-40 rounded bg-neutral-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics / Profile */}
      <section className="py-20 sm:py-24 border-t border-neutral-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="text-sm text-neutral-500">Profile insights</div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-neutral-50 p-4 text-center">
                  <div className="text-2xl font-semibold">98%</div>
                  <div className="text-xs text-neutral-600">Tap success</div>
                </div>
                <div className="rounded-xl bg-neutral-50 p-4 text-center">
                  <div className="text-2xl font-semibold">2.3x</div>
                  <div className="text-xs text-neutral-600">More shares</div>
                </div>
                <div className="rounded-xl bg-neutral-50 p-4 text-center">
                  <div className="text-2xl font-semibold">5s</div>
                  <div className="text-xs text-neutral-600">Setup time</div>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-neutral-50 p-4 text-xs text-neutral-600">
                Update your profile once — it’s live everywhere your card
                points.
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              A profile that stays fresh
            </h3>
            <p className="text-neutral-600 mt-3 max-w-prose mx-auto lg:mx-0">
              Edit your links, contact, and branding anytime. Your card always
              shares the latest version, so your details are always accurate.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 max-w-md mx-auto lg:mx-0">
              {["Custom URL", "vCard download", "Brand theming"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white p-7 sm:p-10 ring-1 ring-inset ring-white/10 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.6)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Make your first impression brilliant
                </h3>
                <p className="text-blue-100 mt-2">
                  Choose your Brilson card and start sharing instantly.
                </p>
              </div>
              <Link
                href={`/${product.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100"
              >
                Buy {product.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
