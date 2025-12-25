import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-5xl font-semibold tracking-tight">Not found</h1>
      <p className="mt-4 text-neutral-600">
        The page you’re looking for doesn’t exist.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
