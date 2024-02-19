"use client"
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";
const Services = () => {
    return (
        <div className="max-w-5xl mx-auto py-20">
            <div 
                className="text-4xl pb-5 md:text-7xl text-center
                bg-clip-text text-transparent bg-gradient-to-b
                from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
            >
                Zefektivněte své podnikání pomocí našich služeb
            </div>
            <p 
                className="mt-4 text-lg font-normal
                text-neutral-300 max-w-lg 
                text-center mx-auto"
            >
                Od designu webových stránek až po správu sociálních médií, nabízíme širokou škálu služeb, které Vám pomohou s růstem Vašeho podnikání. 
            </p>

            <CardHoverEffectDemo />
        </div>
    );
}
 
export default Services;