import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { TechStack } from "@/components/site/TechStack";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <Projects />
      <Testimonials />
      <TechStack />
      <Process />
      <CTA />
    </SiteLayout>
  );
}
