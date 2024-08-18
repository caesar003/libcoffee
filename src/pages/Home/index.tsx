import Hero from "@components/Hero";
import FeaturedProduct from "@components/FeaturedProduct";
import QuickLinks from "@components/QuickLinks";
import Testimony from "@components/Testimony";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Testimony />
      <QuickLinks />
    </main>
  );
}
