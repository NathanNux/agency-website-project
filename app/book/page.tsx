"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import GlobalStateContext from "../GlobalStateContext";

const Book = () => {

const router = useRouter()

const { setGlobalState } = useContext(GlobalStateContext)

const handleNavigation = (sectionId: string) => {
    localStorage.setItem('sectionToScrollTo', sectionId);
    router.push('/');
}

  return (
    <>
      <div className="flex flex-col   w-full  h-screen bg-black/[0.96]  bg-grid-white/[0.02]   ">
        <Navbar 
            scrollToWebsiteDesign={() => handleNavigation('/#websiteDesign')}
            scrollToGraphicDesign={() => handleNavigation('/#graphicDesign')}
            scrollToShopifyStores={() => handleNavigation('/#shopifyStores')}
            scrollToBrands={() => handleNavigation('/#brands')}
        />
        <div className="text-4xl pb-5 md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Objednejte si schůzku
        </div>

        <InlineWidget url="https://calendly.com/nathanaelnux/30min" />
      </div>
    </>
  );
};

export default Book;