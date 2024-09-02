/* eslint-disable react/no-unescaped-entities */
"use client"
import ProfileCard from "@/components/cards/ProfileCard"
import { useTranslations } from "next-intl"
import { Typewriter } from "react-simple-typewriter"


export default function About() {

const text = useTranslations("About")

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-16 mt-32 lg:mt-48">
      <ProfileCard />
      <div className="text-slate-200 text-2xl sm:text-3xl font-semibold w-[340px] h-80 lg:h-96 lg:w-1/3">
      <Typewriter
            words={[`${text("description")}`]}
            cursorColor="#FFF"
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </div>
    </div>
    
  )
}
