'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./Drop-down-menu";

interface NavbarProps {
    scrollToWebsiteDesign: () => void;
    scrollToGraphicDesign: () => void;
    scrollToShopifyStores: () => void;
    scrollToBrands: () => void;
  }
  
  const Navbar = ({ 
    scrollToWebsiteDesign, 
    scrollToGraphicDesign, 
    scrollToShopifyStores, 
    scrollToBrands 
  }: NavbarProps) => {

    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () => {
        setIsDropDownVisible(false);
    }

    const handleNavigation = (sectionId: string) => {
      localStorage.setItem('sectionToScrollTo', sectionId);
    }

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo2.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
                md:flex space-x-10 items-center
                text-slate-300 text-center 
                bg-clip-text text-transparent 
                bg-gradient-to-b from-neutral-50
                to bg-neutral-400 bg-opacity-50"
        >
            <div onClick={() => {scrollToWebsiteDesign(); handleNavigation('websiteDesign');}} className="hover:text-gray-50">Webový Design</div>
            <div onClick={() => {scrollToGraphicDesign(); handleNavigation('graphicDesign');}} className="hover:text-gray-50">Grafický Design</div>
            <div onClick={() => {scrollToShopifyStores(); handleNavigation('shopifyStores');}} className="hover:text-gray-50">Vývoj Obchodů</div>
            <div onClick={() => {scrollToBrands(); handleNavigation('brands');}} className="hover:text-gray-50">Aplikace</div>
            <Link href="/pricing" className="hover:text-gray-50">
                Ceník
            </Link>
        </div>

        <div className="flex md:hidden">
            {isDropDownVisible ? (
                // display an x icon when the drop is visible
                <div 
                    onClick={toggleDropDown}
                    className="w-8 h-8 text-slate-300 cursor-pointer"
                >
                    <X />
                    <DropDownMenu onClose={closeDropDown} />
                    </div>
            ) : (
                <AlignJustify
                    onClick={toggleDropDown}
                    className="w-8 h-8 text-slate-300 cursor-pointer"
                />
            )}
        </div>
        <div className="hidden md:flex">
            <Link 
                href="/contact" 
                className="
                inline-flex h-12 animate-shimmer items-center justify-center 
                rounded-[15px] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
                focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
                focus:ring-offset-slate-50 hover:border-slate-400 hover:text-slate-200"
            >
                Kontakt
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;