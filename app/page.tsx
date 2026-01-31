'use client'

import HeroSection from '@/components/hero'
import NavBar from '@/components/navbar'
import ExperienceSection from '@/components/experience'
import EntranceShowcase from '@/components/entrance-showcase'
import CulinarySection from '@/components/culinary'
import SpacesSection from '@/components/spaces'
import MenuSection from '@/components/menu'
import BarStorySection from '@/components/bar-story'
import TeamSection from '@/components/team'
import TeamGroupSection from '@/components/team-group'
import ReservationSection from '@/components/reservation'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <ExperienceSection />
      <EntranceShowcase />
      <CulinarySection />
      <SpacesSection />
      <MenuSection />
      <BarStorySection />
      <TeamSection />
      <TeamGroupSection />
      <ReservationSection />
      <Footer />
    </main>
  )
}
