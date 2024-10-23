import Image from "next/image";
import Header from "@/MainPage/Header"
import Logo from "/Components/Images/Logo.svg"
import Hero from "@/MainPage/Hero"
import SecondSection from "@/MainPage/SecondSection"
import ThirdSection from "@/MainPage/ThirdSection"
import FourthSection from "@/MainPage/FourthSection"
import Footer from "@/MainPage/Footer"
import Link from 'next/link';
import Page from "@/app/page";
import Login from "@/Registration/Components/Login";
import { useState } from 'react';
import SecondSub from "@/MainPage/SecondSub"
export default function Home() {
  return (
    <div>
    <Header />
    <Hero />
    <SecondSection />
    <SecondSub />
    <ThirdSection />
    <FourthSection />
    <Footer /></div>
    
    
  )
  
}


