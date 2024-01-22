import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Travellio",
  description:
    "Travellio is a simple landing page website that provides information about camping.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
