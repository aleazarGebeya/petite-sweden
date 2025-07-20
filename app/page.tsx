"use client"
import React from "react"
import { HeroSection } from "@/components/hero-section"
import { MissionStatement } from "@/components/mission-statement"
import { Campaigns } from "@/components/campaigns"
import { BlogSection } from "@/components/blog-section"
import { EventCalendar } from "@/components/event-calendar"
import { SuccessStories } from "@/components/success-stories"
import { ImpactStatistics } from "@/components/impact-statistics"
import { DonationSection } from "@/components/donation-section"
import { VolunteerRegistration } from "@/components/volunteer-registration"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen w-full">
      <HeroSection />
      <MissionStatement />
      <ImpactStatistics />
      <Campaigns />
      <BlogSection />
      <EventCalendar />
      <SuccessStories />
      <DonationSection />
      <VolunteerRegistration />
      <Footer />
    </main>
  )
}
