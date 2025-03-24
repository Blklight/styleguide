"use client";
import * as React from "react";
import Image from "next/image";

import { NavToolbar } from "@/components/nav-toolbar";
import { ModeToggle } from "@/components/mode-toggle";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ColorPaletteDisplay from "@/components/color-palette";
import BaseColorGrid from "@/components/base-color-grid";
import AltBaseColorGrid from "@/components/alt-base-color-grid";
import { Button } from "@/components/ui/button";

const typos = [
  {
    name: "Inter",
    className: "font-inter",
  },
];
const auxTypos = [
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
    <div className="w-full flex flex-col min-h-svh">
      <div className="w-full max-w-[900px] mx-auto bg-slate-50 dark:bg-slate-950 shadow rounded-lg border my-2.5">
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
        {/* <div className="mt-2 mb-5 px-5">
          <Separator className="my-5" />

        </div> */}
      </div>
      <div className="w-full max-w-[900px] mx-auto mt-2 pb-5">
        <Tabs defaultValue="sobre" className="">
          <TabsList className="shadow border !rounded-md">
            <TabsTrigger
              value="sobre"
              className="cursor-pointer px-5 !rounded-md"
            >
              Sobre
            </TabsTrigger>
            <TabsTrigger
              value="tipografia"
              className="cursor-pointer px-5 !rounded-md"
            >
              Tipografias
            </TabsTrigger>
            <TabsTrigger
              value="cores"
              className="cursor-pointer px-5 !rounded-md"
            >
              Cores
            </TabsTrigger>
            <TabsTrigger
              value="textSize"
              className="cursor-pointer px-5 !rounded-md"
            >
              Tamanho de texto
            </TabsTrigger>
            <TabsTrigger
              value="roundedborders"
              className="cursor-pointer px-5 !rounded-md"
            >
              Bordas
            </TabsTrigger>
            <TabsTrigger
              value="btn"
              className="cursor-pointer px-5 !rounded-md"
            >
              Botões
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="sobre"
            className="bg-slate-50 dark:bg-slate-950 border rounded-md px-5 py-4 "
          >
            Make changes to your account here.
          </TabsContent>
          <TabsContent
            value="btn"
            className="bg-slate-50 dark:bg-slate-950 border rounded-md px-5 py-4 "
          >
            <div className="flex gap-1 m-8">
              <Button>Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button className="text-orange-500 bg-dark hover:bg-blklight-500 hover:text-light">
                Alternativos
              </Button>
              <Button className="bg-magenta-500 text-dark hover:bg-blklight-500 hover:text-light">
                Alternativos
              </Button>

              <Button className="bg-blklight-500 text-light">
                Alternativos sobrepostos
              </Button>
            </div>
          </TabsContent>
          <TabsContent
            value="roundedborders"
            className="bg-slate-50 dark:bg-slate-950 border rounded-md px-5 py-4 "
          >
            <h1 className="text-[40px] tracking-wide font-bold mb-2">Bordas</h1>
            <p className="text-xl mb-2.5">
              As bordas são utilizadas para dar destaque e ajuda a criar sutis
              separações entre elementos. Os estilos da plataforma incluem:
            </p>

            <div className="flex flex-col mb-2.5">
              <p className="text-lg list">
                Borda padrão: 1px sólido, cor neutra(branco, cinza, sépia e
                preto)
              </p>
              <span>Exemplo:</span>
              <div className="size-10 border border-[#eaeaea] bg-background rounded-[8px]"></div>
            </div>
            <div className="flex flex-col mb-2.5">
              <p className="text-lg list">
                Borda colorida: 1px sólido, cores(Ultravioleta, Azul Céu,
                Crimson, Amarelo, Laranja)
              </p>
              <span>Exemplo:</span>
              <div className="size-10 border border-[#6A4DFF] bg-background rounded-[8px]"></div>
            </div>
            <div className="flex flex-col mb-2.5">
              <p className="text-lg list">Borda destacada: 2px sólido</p>
              <span>Exemplo:</span>
              <div className="size-10 border-2 border-[#28acff] bg-background rounded-[8px]"></div>
            </div>
            <div className="flex flex-col mb-2.5">
              <p className="text-lg list">Borda arredondada: 8px de raio</p>
              <span>Exemplo:</span>
              <div className="size-10 bg-[#ff6d00] rounded-[8px]"></div>
            </div>
            <div className="flex flex-col mb-2.5">
              <p className="text-lg list">
                Borda arredondada elementos pequenos: 4px de raio
              </p>
              <span>Exemplo:</span>
              <div className="size-6 bg-[#ff6d00] rounded-[4px]"></div>
            </div>
            <div className="flex flex-col mb-2.5">
              <p className="text-lg list">Borda flat: 0px de raio</p>
              <span>Exemplo:</span>
              <div className="size-10 bg-[#EB1E32] rounded-[0px]"></div>
            </div>
          </TabsContent>
          <TabsContent
            value="textSize"
            className="bg-slate-50 dark:bg-slate-950 border rounded-md px-5 py-4 "
          >
            <h1 className="text-[40px] tracking-wide font-bold mb-2">
              Tamanhos de texto
            </h1>
            <h1 className="text-[36px]">h1 - 36px</h1>
            <Separator className="my-2" />
            <h2 className="text-[32px]">h2 - 32px</h2>
            <Separator className="my-2" />
            <h3 className="text-[28px]">h3 - 28px</h3>
            <Separator className="my-2" />
            <h4 className="text-[24px]">h4 - 24px</h4>
            <Separator className="my-2" />
            <p className="text-lg">Parágrafo de artigo - 18px/20px</p>
            <Separator className="my-2" />
            <p className="text-base">Parágrafo padrão - 16px</p>
            <Separator className="my-2" />
            <p className="text-sm">Parágrafo pequeno - 14px</p>
          </TabsContent>
          <TabsContent
            value="tipografia"
            className="bg-slate-50 dark:bg-slate-950 border rounded-md px-5 py-4 "
          >
            <h1 className="text-[40px] tracking-wide font-bold mb-2">
              Tipografia da interface
            </h1>
            {typos.map((typo, index) => (
              <div key={index} className="mb-4">
                <h3
                  className={`${typo.className} text-3xl tracking-wide font-bold mb-2`}
                >
                  {typo.name}
                </h3>
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
            <Separator className="my-4" />
            <h1 className="text-4xl tracking-wide font-bold mb-4">
              Tipografia de auxílio
            </h1>
            {auxTypos.map((typo, index) => (
              <div key={index} className="mb-4">
                <h3
                  className={`${typo.className} text-3xl tracking-wide font-bold mb-2`}
                >
                  {typo.name}
                </h3>
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
                <Separator className="my-4" />
              </div>
            ))}
          </TabsContent>
          <TabsContent
            value="cores"
            className="bg-slate-50 dark:bg-slate-950 border rounded-md px-5 py-4 "
          >
            <BaseColorGrid />
            <Separator className="my-4" />
            <AltBaseColorGrid />
            <Separator className="my-4" />
            <ColorPaletteDisplay />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
