import { ArrowLeft, SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return <section className="grid min-h-[80vh] place-items-center px-5 pb-20 pt-32 text-center"><div><SearchX className="mx-auto text-acid" size={36} /><p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-acid">404 · Not found</p><h1 className="mt-4 text-5xl font-semibold tracking-[-.06em] sm:text-7xl">That page left the workflow.</h1><p className="mx-auto mt-5 max-w-lg text-base leading-8 text-muted">The page may have moved, or the address may be incomplete.</p><Link href="/" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-acid px-5 text-sm font-bold text-black"><ArrowLeft size={17} /> Return home</Link></div></section>;
}
