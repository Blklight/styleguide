"use client";
import * as React from "react";
import Image from "next/image";

import { NavToolbar } from "@/components/nav-toolbar";
import { ModeToggle } from "@/components/mode-toggle";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ColorPaletteDisplay from "@/components/color-palette";
import BaseColorGrid from "@/components/base-color-grid";

const typos = [
  {
    name: "Inter",
    className: "font-inter",
  },
  {
    name: "JetBrains Mono",
    className: "font-jetbrains",
  },
  {
    name: "EB Garamond",
    className: "font-eb-garamond",
  },
  {
    name: "Barlow",
    className: "font-barlow",
  },
  {
    name: "Playfair Display",
    className: "font-playfair",
  },
];

const colors = [
  "#007bff",
  "#480bff",
  "#121212",
  "#eaeaea",
  "#F3E4D7",
  "#f1eee5",
  "#eb1e32",
  "#ffff00",
  "#ff6d00",
];

export default function Home() {
  return (
    <div className="w-full flex flex-row min-h-svh">
      <div className="w-full max-w-[900px] mx-auto bg-slate-50 dark:bg-slate-950 shadow rounded-lg border flex-1 my-2.5">
        <div className="flex justify-between p-5">
          <div className="flex md:flex-row flex-col gap-4 items-center">
            <div className="flex items-center justify-center bg-slate-900 dark:bg-slate-100 rounded-lg p-2.5">
              <Image
                src="/blklight-light.svg"
                className="!max-w-none mx-auto w-16 h-16 invert-0 dark:invert"
                width="96"
                height="96"
                alt="Ultimate Mercer Logo"
              />
            </div>
            <h1 className="text-4xl md:text-left text-center font-bold tracking-wide leading-tight mb-2">
              Styleguide - All New Blklight
            </h1>
          </div>
          <ModeToggle />
        </div>
        <div className="mt-2 mb-5 px-5">
          {typos.map((typo, index) => (
            <div key={index} className="mb-4">
              <h2
                className={`${typo.className} text-4xl tracking-wide font-bold mb-2`}
              >
                {typo.name}
              </h2>
              <p className={`${typo.className} text-[24px]`}>
                The quick brown fox jumps over the lazy dog.
              </p>
              <p className={`${typo.className} text-[24px]`}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className={`${typo.className} text-[24px]`}>
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className={`${typo.className} text-[24px]`}>0123456789</p>
            </div>
          ))}

          <Separator className="my-5" />

          <div className="grid grid-cols-6 gap-4">
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#007bff] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#480bff] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#4461e1] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#4866e6] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#4a65dd] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#5252e0] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>

            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#4169e1] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#121212] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#eaeaea] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#f7f7f7] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#F3E4D7] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#f1eee5] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#eb1e32] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#ffff00] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
            <div className="flex flex-col gap-2.5 bg-white dark:bg-slate-900 shadow p-2.5 rounded-lg">
              <div className="w-full h-24 bg-[#ff6d00] rounded-lg"></div>
              <p className="text-lg font-semibold">HEX: #0000FF</p>
            </div>
          </div>

          <ColorPaletteDisplay />
          <BaseColorGrid />

          {/* <Tabs defaultValue="sobre" className="">
            <TabsList>
              <TabsTrigger value="sobre">Sobre</TabsTrigger>
              <TabsTrigger value="tipografia">Tipografia</TabsTrigger>
              <TabsTrigger value="cores">Cores</TabsTrigger>
            </TabsList>
            <TabsContent value="sobre">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="tipografia">
              
            </TabsContent>
            <TabsContent value="cores">
              <h2 className="text-3xl tracking-wide font-bold">Cores</h2>
            </TabsContent>
          </Tabs> */}

          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
