import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQS = () => {
    return (
        <div className=' mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl'>
            <div className='p-10 md:p-4 md:px-20'>
                <div className='text-3xl md:text-7xl font-bold text-black'>
                    Máte Otázku?
                </div>
                <div className='font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent'>
                    Tady máte odpovědi.
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Co to je Centrum?
                        </AccordionTrigger>
                        <AccordionContent>
                        Centrum je skupina, která se specializuje na branding, web design a digitální marketing.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Jak mohu Začít?
                        </AccordionTrigger>
                        <AccordionContent>
                            Můžete začít tím, že nás kontaktujete. Ozveme se vám zpět do 24 hodin.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Jak to se s cenami?
                        </AccordionTrigger>
                        <AccordionContent>
                            Nabízíme řešení na míru pro Vaše podnikání. Kontaktujte nás a získejte cenovou nabídku.  
                        </AccordionContent>
                    </AccordionItem>
                
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Maté nějakou Podporu?
                        </AccordionTrigger>
                        <AccordionContent>
                            Všem našim klientům nabízíme podporu od pondělí do soboty.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>

    );
}
 
export default FAQS;