import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Products } from "@/components/sections/Products";
import { AiSolutions } from "@/components/sections/AiSolutions";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Problems />
      <Products />
      <AiSolutions />
      <Approach />
      <Contact />
    </main>
  );
}
