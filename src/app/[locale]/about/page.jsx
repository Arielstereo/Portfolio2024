/* eslint-disable react/no-unescaped-entities */
"use client"
import ProfileCard from "@/components/cards/ProfileCard"
import { useTranslations } from "next-intl"
import { Typewriter } from "react-simple-typewriter"


export default function About() {

const text = useTranslations("About")

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-32 mt-32 sm:mt-48">
      <ProfileCard />
      <div className="text-slate-200 text-2xl sm:text-3xl font-semibold w-3/4 h-80 lg:h-full lg:w-1/3">
      <span className="text-sky-300">I'm Ariel.</span>
      <Typewriter
            words={[`${text("description")}`]}
            cursor
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
