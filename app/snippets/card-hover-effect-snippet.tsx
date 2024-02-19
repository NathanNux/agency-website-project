import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Webové stránky",
        description:
          "Vytváříme plně responzivní webové stránky, které vypadají skvěle na všech zařízeních. Naše webové stránky jsou navrženy tak, aby přeměnily návštěvníky na zákazníky.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "E-commerce Obchody",
        description:
          "Od malých obchodů až po velké online prodejce, máme odborné znalosti k vybudování obchodu, který Vám pomůže rozšířit Vaše podnikání.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Autentizace",
        description:
          "Bezpečná autentizační řešení pro Váš web nebo aplikaci. Používáme nejnovější technologie, abychom udrželi Vaše data v bezpečí.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "Socialní Sítě",
        description:
          "Nabízíme správu sociálních sítí a tvorbu reklamy. Můžeme Vám pomoci rozšířit Vaši přítomnost na sociálních sítích a oslovit tak nové zákazníky.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "Vývoj Aplikací",
        description:
          "Vytváříme mobilní aplikace na míru pro iOS a Android. Naše aplikace jsou navrženy tak, aby byly uživatelsky přívětivé a výkonné.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Podpora",
        description:
          "Nabízíme podporu všem našim klientům. Jsme tu, abychom Vám pomohli s jakýmikoli problémy nebo dotazy, které můžete mít.",
     
      },
];