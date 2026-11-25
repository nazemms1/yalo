import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Products } from "@/components/site/products";
import { Feed } from "@/components/site/feed";
import { Branch } from "@/components/site/branch";
import { Trade } from "@/components/site/trade";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Products />
      <Feed />
      <Branch />
      <Trade />
    </>
  );
}
