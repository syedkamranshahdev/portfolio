"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

function cloudinaryPoster(src: string) {
  if (!src.includes("res.cloudinary.com") || !src.includes("/video/upload/")) return undefined;
  return src.replace("/video/upload/", "/video/upload/so_0,f_jpg/").replace(/\.mp4($|\?)/, ".jpg$1");
}

export function LazyVideo({ src, title, poster, className }: { src: string; title: string; poster?: string; className?: string }) {
  const resolvedPoster = poster || cloudinaryPoster(src);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldLoad) return;
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return <div ref={containerRef} className={cn("relative aspect-video overflow-hidden rounded-xl bg-black", className)}>
    {shouldLoad ? <video
      controls
      preload="metadata"
      playsInline
      poster={resolvedPoster}
      aria-label={title}
      className="h-full w-full rounded-xl object-contain"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video> : <div className="absolute inset-0 grid place-items-center bg-[#101510]">
      {resolvedPoster && <img src={resolvedPoster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-45" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
      <span className="relative grid size-16 place-items-center rounded-full border border-acid/30 bg-black/50 text-acid backdrop-blur"><Play size={23} fill="currentColor" /></span>
    </div>}
  </div>;
}
