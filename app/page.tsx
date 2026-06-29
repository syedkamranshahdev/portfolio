import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { VideoWalkthroughs } from "@/components/sections/VideoWalkthroughs";

export default function HomePage() {
  return <>
    <Hero />
    <FeaturedProjects />
    <AboutPreview />
    <ServicesPreview />
    <VideoWalkthroughs />
    <ContactCTA />
  </>;
}
