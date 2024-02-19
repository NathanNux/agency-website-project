"use client"
import { useContext, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import * as z from 'zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from 'react'
import { getGlobalState } from '../state';
import GlobalStateContext from '../GlobalStateContext'



const FormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    job_title: z.string(),
    company_name: z.string(),
    help: z.enum([
        "Zvažuji spolupráci",
        "Chci vědět více",
        "Chci Vaši nabídku",
        "Další",
    ]),
    company_size: z.enum([
        "1-10",
        "11-50",
        "51-200",
        "201-500",
        "500+",
    ]),
    info: z.string(),
});

type FormValue = {
    first_name: string;
    last_name: string;
    email: string;
    job_title: string;
    company_name: string;
    help: "Zvažuji spolupráci" | "Chci vědět více" | "Chci Vaši nabídku" | "Další";
    company_size: "1-10" | "11-50" | "51-200" | "201-500" | "500+";
    info: string;
    terms: boolean;
};

export default function ContactForm() {
    const [ loading, setLoading ] = useState(false);
    const [ submitted, setSubmitted ] = useState(false);
    const { toast } = useToast();

    const form = useForm<FormValue>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            job_title: '',
            company_name: '',
            help: 'Zvažuji spolupráci',
            company_size: '1-10',
            info: '',
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
          setLoading(true);
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
    
          if (!res.ok) {
            throw new Error("Něco se pokazilo");
          }
    
          setSubmitted(true);
        } catch (error) {
          toast({
            title: "Chyba",
            description: "Něco se pokazilo",
          });
        } finally {
          setLoading(false);
        }
    }

    const router = useRouter()

    const { setGlobalState } = useContext(GlobalStateContext)

    const handleNavigation = (sectionId: string) => {
        localStorage.setItem('sectionToScrollTo', sectionId);
        router.push('/');
    }

    return (
        <div className='w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
            <Navbar 
                scrollToWebsiteDesign={() => handleNavigation('/#websiteDesign')}
                scrollToGraphicDesign={() => handleNavigation('/#graphicDesign')}
                scrollToShopifyStores={() => handleNavigation('/#shopifyStores')}
                scrollToBrands={() => handleNavigation('/#brands')}
            />
            <div className='md:flex items-start justify-center md:py-20 px-6'>
                <div>
                    <div className='text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                        Kontaktujte náš tým
                    </div>
                    <div className='py-4 text-grey-300'>
                        Pojdmě si promluvit o Vašem projektu a jak Vám můžeme pomoct.
                    </div>
                    <div className='bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col'>
                        <div className='flex gap-4 border-b'>
                            <div className='font-normal pb-5 text-xl px-15'>
                                Jeden flexibilní tým pro celou Vaši společnost, se znalostmi,
                                optímální doručení projektů <br /> a s dlouhodobou spoluprácí.
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='font-normal pb-4 pb-5 text-xl px-15'>
                                Vyhrazená podpora, která s Vámi bude pracovat na Vašem nastavení a pomůže Vám
                                vytvořit nejlepší plán pro Vaši společnost.
                            </div>
                        </div>
                    </div>
                </div>
                <Form {...form}>
                    {!submitted ? (
                        <form 
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-4 h-full border rounded-3xl p-10 md:w-1/3'
                        >
                            <div>
                                <FormField 
                                    control={form.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className='items-center justify-center w-full'>
                                            <FormLabel className='text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                                                Křestné jméno *
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="last_name"
                                    render={({ field }) => (
                                      <FormItem className='items-center justify-center  w-full'>
                                        <FormLabel className='text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                                            Příjmení *
                                        </FormLabel>
                                        <FormControl>
                                          <Input {...field} />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                />
                            </div>
                            <FormField 
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className='items-center justify-center w-full'>
                                        <FormLabel className='text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                                            E-mail *
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="job_title"
                                render={({ field }) => (
                                    <FormItem className='items-center justify-center w-full'>
                                        <FormLabel className='text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                                            Pozice *
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="company_name"
                                render={({ field }) => (
                                    <FormItem className='items-center justify-center w-full'>
                                        <FormLabel className='text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                                            Název Vaší společnosti
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="company_size"
                                render={({ field }) => (
                                    <FormItem className='items-center justify-center w-full'>
                                        <FormLabel className='text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                                            Velikost společnosti
                                        </FormLabel>
                                        <FormControl>
                                            <Select {...field}>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1-10">1-10</SelectItem>
                                                    <SelectItem value="11-50">11-50</SelectItem>
                                                    <SelectItem value="51-200">51-200</SelectItem>
                                                    <SelectItem value="201-500">201-500</SelectItem>
                                                    <SelectItem value="500+">500+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="help"
                                render={({ field }) => (
                                    <FormItem className='items-center justify-center w-full'>
                                        <FormLabel className='text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                                            Jak Vám můžeme pomoci? *
                                        </FormLabel>
                                        <FormControl>
                                            <Select {...field}>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Zvažuji spolupráci">Zvažuji spolupráci</SelectItem>
                                                    <SelectItem value="Chci vědět více">Chci vědět více</SelectItem>
                                                    <SelectItem value="Chci Vaši nabídku">Chci Vaši nabídku</SelectItem>
                                                    <SelectItem value="Další">Další</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="info"
                                render={({ field }) => (
                                    <FormItem className='items-center justify-center w-full'>
                                        <FormLabel className='text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                                            Jak Vám můžeme pomoci?
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className='flex gap-4 items-center'>
                                <div>
                                    <Checkbox 
                                        className='outline border-2 text-sm font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'  
                                    />
                                </div>
                                <div className='text-xs font-light md:w-3/4 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
                                    Souhlasím se zasíláním marketingových novinek a informacecí od týmu Centrum
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <Button 
                                    type="submit"
                                    disabled={loading}
                                    className='w-[150px] hover:from-rose-500 hover:to-blue-300 transition-all ease-out duration-600 bg-gradient-to-r from-rose-500 to-blue-300 text-white text-lg py-2 px-4 rounded-3xl hover:from-rose-700 hover:to-blue-500 transition-all ease-out duration-600 slider-image'
                                    onClick={() => form.handleSubmit(onSubmit)}
                                >
                                    Odeslat
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <div className='text-xl md:text-2xl flex items-center justify-center flex-col px-8'>
                                <div className="w-80 py-20">
                                    <PiSmiley className="text-6xl text-[#6c6684] mx-auto" />

                                    <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10">
                                        Obdrželi jsme váš dotaz a budeme vás kontaktovat
                                        v krátké době prostřednictvím e-mailu.
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </div>
    )
}
