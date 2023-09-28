import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import HotDeals from "@/components/HotDeals";
import { SearchSection } from "@/components/SearchSection";


export default function Home() {
  return (
    <main>
      <SearchSection />
      <Categories />
      <Hero />
      <HotDeals />
    </main>
  )
}
