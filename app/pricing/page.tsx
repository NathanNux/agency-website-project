"use client"

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import { PiCheckCircleFill } from 'react-icons/pi';
import DropDownMenu from "@/components/Drop-down-menu";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from 'react'
import { useGlobalState } from '../state';
import GlobalStateContext from '../GlobalStateContext'

const plans = [
    {
        intex: 0,
        name: 'Základní',
        price: '12000 Kč',
        features: [
            'Responsivní desing na všech zařízeních',
            'SEO optimalizace + Desing + Vývoj',
            'Soukromý komunikační kanál',
            '3-7 dnů doba obratu + 24/7 podpora',
        ],
        style: 'rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
        description: 'Pro malé a střední podniky, kteří chtějí zvýšit svou online přítomnost.',
        Button: 'Zvolit plán'
    },
    {
        intex: 1,
        name: 'Premium',
        price: '25000 Kč',
        features: [
            'Responsivní desing na všech zařízeních',
            'React / Next.js + Tailwind CSS codebase',
            'SEO optimalizace + Desing + Vývoj',
            'Soukromý komunikační kanál',
            '7-14 dnů doba obratu + 24/7 podpora',
        ],
        style: 'rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
        description: 'Nejlepší pro nově začínající podniky, firmy a nezávislé pracovníky, kteří potřebují marketingovou stránku k předvedení své práce a vize.',
        Button: 'Zvolit plán'
    },
    {
        intex: 2,
        name: 'Velkopodnikový',
        feature: 'Kontaktujte Nás',
        price: 'Promluvme si osobně',
        features: [
            "Plně reagující na všech obrazovkách",
            "React / Next.js / Tailwind CSS kód",
            "SEO optimalizace + Design + vývoj",
            "Neomezené revize",
            "24hodinová doba odezvy podpory",
            "Soukromý komunikační kanál",
            "Prioritní vývojová fronta",
            "Dedikovaný projektový manažer",
        ],
        style: 'rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
        description: 'Nejlepší pro malé i velké podniky i pro začínající podniky, které potřebují výkonný web, který vypadá skvěle a převádí návštěvníky na zákazníky.',
        Button: 'Kontaktujte nás'
    }
]

const Pricing = () => {
    const router = useRouter()

    const { setGlobalState } = useContext(GlobalStateContext)

    const handleNavigation = (sectionId: string) => {
        localStorage.setItem('sectionToScrollTo', sectionId);
        router.push('/');
      }

    return (
        <div 
            className="w-full  md:items-center md:justify-center
                bg-black/[0.96] antialiased 
                bg-grid-white/[0.02] relative overflow-hidden"
        >

            <Navbar
                    scrollToWebsiteDesign={() => handleNavigation('/#websiteDesign')}
                    scrollToGraphicDesign={() => handleNavigation('/#graphicDesign')}
                    scrollToShopifyStores={() => handleNavigation('/#shopifyStores')}
                    scrollToBrands={() => handleNavigation('/#brands')}
            />
            <div className="flex items-center justify-center flex-col   ">
                <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
                    Jednoduché a transparentní ceny <br /> pro všechny typy podnikání.
                </div>
                <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
                    {plans.map((plan, index) => (
                    <div
                        key={plan.name}
                        className="h-full flex flex-col justify-between border rounded-3xl px-6  "
                    >
                        <div className={plan.style}>
                        <div className="text-4xl flex  items-center font-medium">
                            {plan.name}
                            {/* render feature tag only for enterprise tab*/}
                            {plan.feature === "Contact Us" && (
                            <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center ">
                                Kontaktujte Nás
                            </div>
                            )}
                        </div>
                        <div className="text-3xl pt-6 ">{plan.price}</div>
                        <div className="py-6">{plan.description}</div>

                        <ul>
                            {plan.features.map((feature) => (
                            <li
                                key={feature}
                                className="text-lg  py-2 flex space-x-2 items-center"
                            >
                                {/* render checkmark only for enterprise tab*/}
                                {plan.feature === "Contact Us" ? (
                                <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                                ) : (
                                <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                                )}

                                {feature}
                            </li>
                            ))}
                        </ul>
                        </div>

                        <div className={plan.Button}>
                        {index === 0 && (
                            <Link
                            href="https://stripe.com/"
                            className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-rose-500 to-blue-300 hover:from-rose-700 hover:to-blue-500 transition-all ease-out duration-600 slider-image"
                            >
                            Koupit Nyní
                            </Link>
                        )}
                            {index === 1 && (
                            <Link
                                
                                href="https://stripe.com/"  
                                className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300 hover:from-emerald-700 hover:to-blue-500 transition-all ease-out duration-600 slider-image" 
                            >
                                Koupit Nyní
                                </Link>
                            )}
                            {index === 2 && (

                                <Link
                                href="/contact"
                                className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300 hover:from-purple-700 hover:to-blue-500 transition-all ease-out duration-600 slider-image"
                                >
                                Kontaktujte Nás
                                </Link>
                            )}  
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default Pricing