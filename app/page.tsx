"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Spotlight } from '@/components/ui/Spotlight';
import Link from 'next/link';
import SliderOne from '@/components/ui/slider';

export default function Home() {

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", });
  }
  
  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar 
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
      />
      <Spotlight 
        className=' md:flex md:-top-[-20px] left-80'
        fill='white'
      />
      <div className='p=4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2'>
        <div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent 
          bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
            Create, grow, and <br /> scale your brand online.
        </div>
        <p className="pt-[50px] mt-4 text-xl font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. <br /> We are a team of
          creatives who are excited to help you grow your business.
        </p>

        <Link
          href={'/book'}
          className='cursor-pointer flex items-center justify-center border rounded-full border-slate-300 w-48 p-2 mx-auto my-6 text-slate-400 hover:border-slate-100 hover:text-slate-100 transition-all ease-out duration-300 hover:bg-slate-900'  
        >
          Book a Call
        </Link>
        <div className='w-full pt-20'>
          <SliderOne />
        </div>
      </div>
    </div>
  );
}

