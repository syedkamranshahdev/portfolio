import { ArrowRight, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";

export function ContactCTA() {
  return <section className="relative isolate overflow-hidden px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-36">
    <div className="absolute left-1/2 top-1/2 -z-10 size-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.06]" /><div className="absolute left-1/2 top-1/2 -z-10 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/[.06] blur-3xl" />
    <p className="text-xs font-extrabold uppercase tracking-[.2em] text-acid">Start a conversation</p><h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-.06em] sm:text-6xl lg:text-7xl">Have a workflow problem? <span className="font-display font-normal italic text-muted">Let&apos;s turn it into software.</span></h2><p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted">Tell me what is slowing the business down, what users need, or what product you want to validate.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><ButtonLink href="/contact">Discuss your project <ArrowRight size={17} /></ButtonLink><ButtonLink href="mailto:kami.webdev7@gmail.com" variant="secondary"><Mail size={17} /> Email directly</ButtonLink></div>
  </section>;
}
