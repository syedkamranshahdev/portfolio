import { Video } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { videoWalkthroughs } from "@/data/site";

export function VideoWalkthroughs() {
  return <section className="border-b border-white/[.08] bg-panel/40 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-[1340px]">
      <SectionHeading eyebrow="Video walkthroughs" title="See the thinking" accent="in motion." description="Short product tours streamed directly from Cloudinary and loaded only as they approach the viewport." />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">{videoWalkthroughs.map((video, index) => <Reveal key={video.title} delay={index * .08}><article className="overflow-hidden rounded-3xl border border-white/10 bg-canvas p-3">
        <LazyVideo src={video.src} poster={video.poster} title={video.title} />
        <div className="flex items-start gap-4 p-5 sm:p-7"><Video className="mt-1 shrink-0 text-acid" size={20} /><div><div className="flex flex-wrap items-center gap-3"><h3 className="text-xl font-semibold">{video.title}</h3><span className="text-[10px] uppercase tracking-[.14em] text-muted">{video.duration}</span></div><p className="mt-3 text-sm leading-7 text-muted">{video.description}</p></div></div>
      </article></Reveal>)}</div>
    </div>
  </section>;
}
