import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function EvervaultCardSnippet() {
  return (
    <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <EvervaultCard text="Hover" />

      <h2 className="text-white  mt-4 text-sm font-light">
        Umístěním ukazatele myši na tuto kartu zobrazíte úžasný efekt.
      </h2>
      <p className="text-sm border font-light border-white/[0.2]  rounded-full mt-4  text-white px-2 py-0.5">
        Sledujte, jak se vznáším
      </p>
    </div>
  );
}