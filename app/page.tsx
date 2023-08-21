'use client'
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <SearchSection />
      <Categories />
      <Hero />
    </main>
  )
}
