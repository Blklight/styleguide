"use client";

import { useState } from "react";
import { Copy, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { colors } from "@/lib/colors";

// Define types for the color data structure
interface ColorShades {
  [key: string]: string;
}

interface ColorData {
  name: string;
  baseHex: string;
  baseOklch: string;
  baseHsl: string;
  hex: ColorShades;
  oklch: ColorShades;
  hsl: ColorShades;
}

interface SelectedColorInfo {
  name: string;
  shade: number;
  hex: string;
  oklch: string;
  hsl: string;
  tailwind: string;
}

export default function ColorPaletteDisplay() {
  const [selectedColor, setSelectedColor] = useState<SelectedColorInfo | null>(
    null
  );
  const [copiedFormat, setCopiedFormat] = useState<string>("");

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedFormat(value);
    setTimeout(() => setCopiedFormat(""), 2000);
  };

  const handleColorClick = (colorObj: ColorData, shade: number) => {
    setSelectedColor({
      name: colorObj.name,
      shade,
      hex: colorObj.hex[shade],
      oklch: colorObj.oklch[shade],
      hsl: colorObj.hsl[shade] || "Not available", // HSL might be empty
      tailwind: `theme('colors.${colorObj.name
        .toLowerCase()
        .replace(/\s+/g, "-")}.${shade}')`,
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Color Palette</h1>

      <div className="space-y-12">
        {colors.map((color) => (
          <div key={color.name} className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{color.name}</h2>
              <div
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: color.baseHex }}
              />
            </div>

            <div className="flex flex-wrap -mx-1">
              {shades.map((shade) => (
                <div
                  key={`${color.name}-${shade}`}
                  className="m-1 flex flex-col items-center"
                >
                  <button
                    className={`relative group h-16 w-16 rounded-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                    style={{
                      backgroundColor:
                        color.hex[
                          shade as
                            | 50
                            | 100
                            | 200
                            | 300
                            | 400
                            | 500
                            | 600
                            | 700
                            | 800
                            | 900
                            | 950
                        ],
                    }}
                    onClick={() => handleColorClick(color, shade)}
                  >
                    {shade === 500 && (
                      <Star className="absolute top-1.5 right-1.5 h-4 w-4 text-white/80 fill-white/80" />
                    )}
                  </button>
                  <span className="text-xs mt-1 text-muted-foreground">
                    {shade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Color Detail Dialog */}
      <Dialog
        open={!!selectedColor}
        onOpenChange={(open: boolean) => !open && setSelectedColor(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span>
                {selectedColor?.name} {selectedColor?.shade}
              </span>
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: selectedColor?.hex }}
              />
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>

          {selectedColor && (
            <div className="grid gap-4 py-4">
              <div
                className="h-24 rounded-md"
                style={{ backgroundColor: selectedColor.hex }}
              />

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="font-medium">HEX</div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      {selectedColor.hex}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(selectedColor.hex)}
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy HEX</span>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="font-medium">OKLCH</div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      {selectedColor.oklch}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(selectedColor.oklch)}
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy OKLCH</span>
                    </Button>
                  </div>
                </div>

                {selectedColor.hsl !== "Not available" && (
                  <div className="flex justify-between items-center">
                    <div className="font-medium">HSL</div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm">
                        {selectedColor.hsl}
                      </code>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(selectedColor.hsl)}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy HSL</span>
                      </Button>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div className="font-medium">Tailwind</div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      {selectedColor.tailwind}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(selectedColor.tailwind)}
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy Tailwind</span>
                    </Button>
                  </div>
                </div>
              </div>

              {copiedFormat && (
                <div className="text-center text-sm text-green-600 dark:text-green-400 mt-2">
                  Copied to clipboard!
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
