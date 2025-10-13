'use client';
import React, { useEffect, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CampusLogoGenerator = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = "Campus Logo Generator";

    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setBottomOffset(mobile ? "4rem" : "5.5rem");
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const domEl = useRef<HTMLDivElement>(null);

  const [campusCode, setCampusCode] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [logoType, setLogoType] = useState<"MuLearn" | "YIP">("MuLearn");
  const [muLogoVariant, setMuLogoVariant] = useState<"Profile Pic" | "Transparent Bg">("Profile Pic");
  const [yipLogoVariant, setYipLogoVariant] = useState<"Black" | "Red" | "Dark">("Black");
  const [logoBgColor, setLogoBgColor] = useState("var(--mulearn-duke-purple)");
  const [fileType, setFileType] = useState<"PNG" | "SVG">("PNG");
  const [bottomOffset, setBottomOffset] = useState("5.5rem");
  const [isDownloading, setIsDownloading] = useState(false);

  const MAX_CHARS = 15;

  const logoTypes = ["MuLearn", "YIP"] as const;
  const muLogoVariants = ["Profile Pic", "Transparent Bg"] as const;
  const yipLogoVariants = ["Black", "Red", "Dark"] as const;
  const logoBgColors = [
    "var(--mulearn-duke-purple)", 
    "var(--mulearn-trusty-blue)", 
    "var(--mulearn-blackish)"
  ];
  const fileTypes = ["PNG", "SVG"] as const;

  const mulearnLogo = "/logo-template/logo.svg";
  const stripesPattern = "/logo-template/stripes (1).svg";
  const yipLogoBlack = "/logo-template/yip-logo-black.svg";
  const yipLogoRed = "/logo-template/yip-logo-red.svg";
  const yipLogoDark = "/logo-template/yip-logo-dark.svg";

  const logoVariants = {
    white: "/logo-template/logo-white.svg",
    blue: "/logo-template/logo-blue.svg", 
    violet: "/logo-template/logo-violet.svg",
    gradient: "/logo-template/logo-gradient.svg"
  };

  const [selectedLogoVariant, setSelectedLogoVariant] = useState<keyof typeof logoVariants>("white");

  const yipLogoImages = {
    Black: yipLogoBlack,
    Red: yipLogoRed,
    Dark: yipLogoDark,
  };

  const yipLogoTextColors = {
    Black: "var(--mulearn-blackish)",
    Red: "var(--destructive)",
    Dark: "var(--mulearn-whitish)",
  };

  const logoVariantColors = [
    { key: "white", color: "var(--mulearn-whitish)", label: "White" },
    { key: "blue", color: "var(--mulearn-trusty-blue)", label: "Blue" },
    { key: "violet", color: "var(--mulearn-duke-purple)", label: "Violet" },
    { key: "gradient", color: "var(--mulearn-trusty)", label: "Gradient" }
  ];

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (value.length <= MAX_CHARS) {
      setCampusCode(value);
      setCharCount(value.length);
    }
  }

  
  const downloadImg = async () => {
    let dataUrl;

    if (!campusCode) return alert("Campus Code is required");
    if (!domEl.current) return alert("Logo element not found");

    setIsDownloading(true);

    try {
     
      await new Promise(resolve => setTimeout(resolve, 500));

      switch (fileType) {
        case "PNG":
          dataUrl = await htmlToImage.toPng(domEl.current);
          break;
        case "SVG":
          dataUrl = await htmlToImage.toSvg(domEl.current);
          break;
        default:
          dataUrl = await htmlToImage.toPng(domEl.current);
      }

      const link = document.createElement("a");
      const prefix = logoType === "MuLearn" ? "mulearn" : "yip";
      link.download = `${prefix}-campus-logo.${fileType.toLowerCase()}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Error downloading image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const getLogoStyle = () => {
    return {}; 
  };

  const getCampusCodeStyle = (isRound: boolean = false) => {
    const baseStyle = {
      position: "absolute" as const,
      zIndex: 20,
      color: "var(--mulearn-whitish)"
    };

    if (logoType === "YIP") {
      return {
        ...baseStyle,
        color: yipLogoTextColors[yipLogoVariant],
        bottom: "1.5rem",
        textAlign: "center" as const,
        width: "100%"
      };
    }

    return {
    ...baseStyle,
    bottom: isRound
      ? isMobile
        ? "3.8rem" // ✅ lower position for small screens
        : "5.5rem" // ✅ normal position for desktop
      : bottomOffset,
    right: "3rem",
    textAlign: "right" as const,
    whiteSpace: "nowrap" as const,
    transform: "translateX(0)",
  };
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col sm:flex-row min-h-screen bg-mulearn-whitish">

        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 w-full py-8 sm:py-6 px-4 sm:px-6 border-b-2 sm:border-b-0 sm:border-r-2 border-mulearn-greyish"
          style={{ background: "var(--mulearn-blackish)" }}
        >
          <div
            ref={domEl}
            className="relative overflow-hidden w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex justify-center shadow-lg"
            style={
              logoType === "MuLearn"
                ? muLogoVariant === "Transparent Bg"
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: logoBgColor }
                : yipLogoVariant === "Dark"
                ? { backgroundColor: "var(--mulearn-blackish)" }
                : { backgroundColor: "var(--mulearn-whitish)" }
            }
          >
            {logoType === "MuLearn" && muLogoVariant === "Profile Pic" && (
              <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
                <img
                  alt="stripes background"
                  src={stripesPattern}
                  className="min-w-full min-h-full w-full h-full object-fill"
                  style={{ objectPosition: "center", transform: "scale(1.05)" }}
                />
              </div>
            )}

            <img
              src={logoType === "MuLearn" ? logoVariants[selectedLogoVariant] : yipLogoImages[yipLogoVariant]}
              className={
                logoType === "MuLearn"
                  ? "w-2/3 absolute top-1/2 transform -translate-y-1/2 z-10"
                  : yipLogoVariant === "Dark"
                  ? "ml-4 w-3/5 top-6 absolute"
                  : "w-1/2 top-6 absolute"
              }
              style={logoType === "MuLearn" ? getLogoStyle() : {}}
              alt="Logo"
            />

            <span
              className="absolute font-light text-2xl tracking-wide"
              style={getCampusCodeStyle(false)}
            >
              {campusCode ? campusCode : "Campus"}
            </span>
          </div>

          {(logoType === "YIP" || muLogoVariant === "Profile Pic") && (
            <div
              className="relative overflow-hidden rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex justify-center shadow-lg sm:hidden"
              style={
                logoType === "MuLearn"
                  ? muLogoVariant === "Transparent Bg"
                    ? { backgroundColor: "transparent" }
                    : { backgroundColor: logoBgColor }
                  : yipLogoVariant === "Dark"
                  ? { backgroundColor: "var(--mulearn-blackish)" }
                  : { backgroundColor: "var(--mulearn-whitish)" }
              }
            >
              {logoType === "MuLearn" && muLogoVariant === "Profile Pic" && (
                <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden rounded-full">
                  <img
                    src={stripesPattern}
                    alt="stripes background"
                    className="min-w-full min-h-full w-full h-full object-fill"
                    style={{ objectPosition: "center", transform: "scale(1.05)" }}
                  />
                </div>
              )}

              <img
                src={logoType === "MuLearn" ? logoVariants[selectedLogoVariant] : yipLogoImages[yipLogoVariant]}
                className={
                  logoType === "MuLearn"
                    ? "w-2/3 absolute top-1/2 transform -translate-y-1/2 z-10"
                    : yipLogoVariant === "Dark"
                    ? "ml-4 w-3/5 top-6 absolute"
                    : "w-1/2 top-6 absolute"
                }
                style={logoType === "MuLearn" ? getLogoStyle() : {}}
                alt="Logo"
              />

              <span
                className="absolute font-light text-2xl tracking-wide"
                style={getCampusCodeStyle(true)}
              >
                {campusCode ? campusCode : "Campus"}
              </span>
            </div>
          )}

          {(logoType === "YIP" || muLogoVariant === "Profile Pic") && (
            <div
              className="relative overflow-hidden hidden sm:flex rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:flex justify-center shadow-lg"
              style={
                logoType === "MuLearn"
                  ? muLogoVariant === "Transparent Bg"
                    ? { backgroundColor: "transparent" }
                    : { backgroundColor: logoBgColor }
                  : yipLogoVariant === "Dark"
                  ? { backgroundColor: "var(--mulearn-blackish)" }
                  : { backgroundColor: "var(--mulearn-whitish)" }
              }
            >
              {logoType === "MuLearn" && muLogoVariant === "Profile Pic" && (
                <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden rounded-full">
                  <img
                    src={stripesPattern}
                    alt="stripes background"
                    className="min-w-full min-h-full w-full h-full object-fill"
                    style={{ objectPosition: "center", transform: "scale(1.05)" }}
                  />
                </div>
              )}

              <img
                src={logoType === "MuLearn" ? logoVariants[selectedLogoVariant] : yipLogoImages[yipLogoVariant]}
                className={
                  logoType === "MuLearn"
                    ? "w-2/3 absolute top-1/2 transform -translate-y-1/2 z-10"
                    : yipLogoVariant === "Dark"
                    ? "ml-4 w-3/5 top-6 absolute"
                    : "w-1/2 top-6 absolute"
                }
                style={logoType === "MuLearn" ? getLogoStyle() : {}}
                alt="Logo"
              />

              <span
                className="absolute font-light text-2xl tracking-wide"
                style={getCampusCodeStyle(true)}
              >
                {campusCode ? campusCode : "Campus"}
              </span>
            </div>
          )}
        </div>

        <form className="w-full sm:w-1/2 md:w-1/3 p-3 sm:p-5 sm:pl-8 lg:p-8 lg:pl-12 flex flex-col justify-between bg-background">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground font-display">
              Logo Generator
            </h2>

            <Label className="block mb-1 text-sm font-semibold text-mulearn-gray-600 h-5">Campus Code</Label>
            <Input
              type="text"
              id="campusCode"
              className="bg-background border-none text-foreground text-sm rounded-lg block w-full h-10 px-3 shadow-md outline-none focus:border-none focus:outline-none transition-shadow duration-200" 
              placeholder="Enter Campus Code"
              value={campusCode}
              onChange={handleTextChange}
            />

            <span className="mb-3 mt-1 text-xs text-mulearn-gray-600 self-end h-5">
              {charCount}/{MAX_CHARS}
            </span>

            <Label className="block mb-1 text-sm font-semibold text-mulearn-gray-600 h-5">Logo Type</Label>
            <div className="flex gap-2 mb-3">
              {logoTypes.map((type) => (
                <Button
                  type="button"
                  key={type}
                  className={`${
                    logoType === type
                      ? "text-mulearn-whitish shadow-md"
                      : "border border-none text-mulearn-gray-600 hover:bg-mulearn-whitish shadow-md"
                  } px-2 h-8 rounded-md cursor-pointer flex-1 font-medium transition-all duration-200 flex items-center justify-center text-xs`} 
                  style={{
                    backgroundColor: logoType === type ? "var(--mulearn-trusty-blue)" : "transparent"
                  }}
                  onClick={() => setLogoType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>

            <Label className="block mb-1 text-sm font-semibold text-mulearn-gray-600 h-5">Logo Variant</Label>
            <div className="flex gap-2 mb-3">
              {logoType === "MuLearn" &&
                muLogoVariants.map((variant) => (
                  <Button
                    type="button"
                    key={variant}
                    className={`${
                      muLogoVariant === variant
                        ? "text-mulearn-whitish shadow-md"
                        : "border border-none text-mulearn-gray-600 hover:bg-mulearn-whitish shadow-md"
                    } px-2 h-8 rounded-md cursor-pointer flex-1 font-medium transition-all duration-200 text-xs flex items-center justify-center`} 
                    style={{
                      backgroundColor: muLogoVariant === variant ? "var(--mulearn-trusty-blue)" : "transparent"
                    }}
                    onClick={() => setMuLogoVariant(variant)}
                  >
                    {variant}
                  </Button>
                ))}
              {logoType === "YIP" &&
                yipLogoVariants.map((variant) => (
                  <Button
                    type="button"
                    key={variant}
                    className={`${
                      yipLogoVariant === variant
                        ? "text-mulearn-whitish shadow-md"
                        : "border border-none text-mulearn-gray-600 hover:bg-mulearn-whitish shadow-md"
                    } px-2 h-8 rounded-md cursor-pointer flex-1 font-medium transition-all duration-200 text-xs flex items-center justify-center`} 
                    style={{
                      backgroundColor: yipLogoVariant === variant ? "var(--mulearn-trusty-blue)" : "transparent"
                    }}
                    onClick={() => setYipLogoVariant(variant)}
                  >
                    {variant}
                  </Button>
                ))}
            </div>

            {(logoType === "MuLearn" && muLogoVariant === "Transparent Bg") && (
              <div className="bg-mulearn-whitish p-2 rounded-lg mb-3 h-auto shadow-md">
                <Label className="block mb-2 text-xs font-semibold text-mulearn-gray-600 h-5">Foreground Color</Label>
                <div className="flex justify-evenly">
                  {logoVariantColors.map((variant) => (
                    <button
                      type="button"
                      key={variant.key}
                      className={`w-8 h-8 rounded-md cursor-pointer transition-transform hover:scale-105 shadow-md ${
                        selectedLogoVariant === variant.key 
                          ? 'ring-2 ring-purple-300 shadow-purple-200' 
                          : ''
                      }`}
                      style={{ 
                        background: variant.color 
                      }}
                      onClick={() => setSelectedLogoVariant(variant.key as keyof typeof logoVariants)}
                    />
                  ))}
                </div>
              </div>
            )}

            {logoType === "MuLearn" && muLogoVariant === "Profile Pic" && (
              <div className="bg-mulearn-whitish p-2 rounded-lg mb-3 shadow-md"> 
                <Label className="block mb-2 text-xs font-semibold text-mulearn-gray-600 h-5">
                  Foreground Color
                </Label>
                <div className="flex justify-evenly mb-3">
                  {logoVariantColors.map((variant) => (
                    <button
                      type="button"
                      key={variant.key}
                      className={`w-8 h-8 rounded-md cursor-pointer transition-transform hover:scale-105 shadow-md ${
                        selectedLogoVariant === variant.key 
                          ? 'ring-2 ring-purple-300 shadow-purple-200' 
                          : ''
                      }`}
                      style={{ 
                        background: variant.color 
                      }}
                      onClick={() => setSelectedLogoVariant(variant.key as keyof typeof logoVariants)}
                    />
                  ))}
                </div>

                <Label className="block mb-1 text-xs font-semibold text-mulearn-gray-600 h-5">
                  Background Color
                </Label>
                <div className="flex justify-evenly">
                  {logoBgColors.map((color) => (
                    <button
                      type="button"
                      key={color}
                      className={`w-8 h-8 rounded-md cursor-pointer transition-transform hover:scale-105 shadow-md ${
                        logoBgColor === color 
                          ? 'ring-2 ring-purple-300 shadow-purple-200' 
                          : ''
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setLogoBgColor(color)}
                    />
                  ))}
                </div>
              </div>
            )}

            <Label className="block mb-1 text-sm font-semibold text-mulearn-gray-600 h-5">File Type</Label>
            <div className="flex gap-2 mb-2">
              {fileTypes.map((type) => (
                <Button
                  type="button"
                  key={type}
                  className={`${
                    fileType === type
                      ? "text-mulearn-whitish shadow-md"
                      : "border border-none text-mulearn-gray-600 hover:bg-mulearn-whitish shadow-md"
                  } px-2 h-8 rounded-md cursor-pointer flex-1 font-medium transition-all duration-200 text-xs flex items-center justify-center`} 
                  style={{
                    backgroundColor: fileType === type ? "var(--mulearn-trusty-blue)" : "transparent"
                  }}
                  onClick={() => setFileType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <Button
            type="button"
            className="text-mulearn-whitish font-medium rounded-lg text-base px-4 py-3 h-12 shadow-lg transition-all duration-200 w-full mt-0 mb-2 z-10 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed font-display"
            style={{ 
              backgroundColor: isDownloading ? 'var(--mulearn-gray-600)' : 'var(--mulearn-trusty-blue)'
            }}
            onClick={downloadImg}
            disabled={isDownloading || !campusCode}
          >
            {isDownloading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Downloading...
              </div>
            ) : (
              "Download Logo"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CampusLogoGenerator;