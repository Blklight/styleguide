"use client";

import type React from "react";

import { useState } from "react";
import { Copy, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { colorsAux } from "@/lib/colors";

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
  baseHex: string;
  baseOklch: string;
  baseHsl: string;
}

export default function AuxBaseColorGrid() {
  const [selectedColor, setSelectedColor] = useState<SelectedColorInfo | null>(
    null
  );
  const [copiedFormat, setCopiedFormat] = useState<string>("");

  // Fixed shade (500 - base color)
  const BASE_SHADE = 500;

  const copyToClipboard = (value: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    navigator.clipboard.writeText(value);
    setCopiedFormat(value);
    setTimeout(() => setCopiedFormat(""), 2000);
  };

  const handleColorClick = (color: ColorData) => {
    setSelectedColor({
      name: color.name,
      baseHex: color.baseHex,
      baseOklch: color.baseOklch,
      baseHsl: color.baseHsl,
    });
  };

  // Check if a color is dark (for text contrast)
  const isDarkColor = (hex: string): boolean => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return false;

    const r = Number.parseInt(result[1], 16);
    const g = Number.parseInt(result[2], 16);
    const b = Number.parseInt(result[3], 16);

    // Calculate perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  return (
    <div className="container mb-5">
      <h1 className="text-[40px] font-bold mb-4">Cores auxiliares</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {colorsAux.map((color: ColorData) => (
          <div
            key={color.name}
            className="flex flex-col cursor-pointer group"
            onClick={() => handleColorClick(color)}
          >
            <div
              className="h-28 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-shadow"
              style={{ backgroundColor: color.hex[BASE_SHADE] }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors" />

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-7 w-7 bg-white/80 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleColorClick(color);
                      }}
                    >
                      <Info className="h-3.5 w-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex flex-col">
              <div className="font-medium text-sm">{color.name}</div>
              <div className="flex items-center mt-1">
                <code className="text-xs text-muted-foreground uppercase">
                  {color.baseHex}
                </code>
                {/* <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 ml-1"
                  onClick={(e) => copyToClipboard(color.baseHex, e)}
                >
                  {copiedFormat === color.baseHex ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button> */}
              </div>
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
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: selectedColor?.baseHex }}
              />
              <span>{selectedColor?.name}</span>
            </DialogTitle>
          </DialogHeader>

          {selectedColor && (
            <div className="grid gap-4 py-4">
              <div
                className="h-32 rounded-md flex items-center justify-center"
                style={{ backgroundColor: selectedColor.baseHex }}
              >
                {/* <div
                  className={`px-3 py-1.5 rounded-md text-sm font-medium bg-white/90 dark:bg-black/90 ${
                    isDarkColor(selectedColor.baseHex)
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {selectedColor.name}
                </div> */}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="font-medium">HEX</div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      {selectedColor.baseHex}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(selectedColor.baseHex)}
                    >
                      {copiedFormat === selectedColor.baseHex ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="font-medium">OKLCH</div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      {selectedColor.baseOklch}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(selectedColor.baseOklch)}
                    >
                      {copiedFormat === selectedColor.baseOklch ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="font-medium">HSL</div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      {selectedColor.baseHsl}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(selectedColor.baseHsl)}
                    >
                      {copiedFormat === selectedColor.baseHsl ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* <div className="flex justify-between items-center">
                  <div className="font-medium">Tailwind</div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      {selectedColor.name.toLowerCase().replace(/\s+/g, "-")}-
                      {BASE_SHADE}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        copyToClipboard(
                          `${selectedColor.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}-${BASE_SHADE}`
                        )
                      }
                    >
                      {copiedFormat ===
                      `${selectedColor.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}-${BASE_SHADE}` ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div> */}
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
