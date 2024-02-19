"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Byly to nejlepší časy, byly to nejhorší časy, byl to věk moudrosti, byl to věk pošetilosti, byla to epocha víry, byla to epocha nedůvěry, byla to doba světla, to bylo období temnoty, bylo to jaro naděje, byla to zima zoufalství.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Být, či nebýt, to je otázka: Zda je vznešenější v mysli trpět praky a šípy nehorázného štěstí, nebo vzít zbraně proti moři potíží a postavit se proti nim: zemřít, zemřít spát.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "Vše, co vidíme nebo co se nám zdá, je jen sen ve snu.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Je všeobecně uznávanou pravdou, že svobodný muž, který má velké jmění, musí mít nedostatek manželky.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Říkejte mi Ismael. Před několika lety – bez ohledu na to, jak dlouho přesně – jsem měl v kabelce málo nebo žádné peníze a na břehu nic zvláštního, co by mě zajímalo, napadlo mě, že bych se trochu proplul a viděl vodní část světa.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];