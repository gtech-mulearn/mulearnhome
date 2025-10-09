'use client';
import React, { useEffect, useRef, useState } from "react";

const CampusLogoGenerator = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = "Campus Logo Generator";
    
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setBottomOffset(mobile ? "4rem" : "5.5rem");
    };

    // Set initial value
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

  //  USE CSS VARIABLES INSTEAD OF HARDCODED COLORS
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

  // Logo variants for µLearn (using the same logo file with different CSS filters)
  const logoVariants = {
    white: mulearnLogo,
    blue: mulearnLogo, 
    violet: mulearnLogo,
    gradient: mulearnLogo
  };

  const [selectedLogoVariant, setSelectedLogoVariant] = useState<keyof typeof logoVariants>("white");

  const yipLogoImages = {
    Black: yipLogoBlack,
    Red: yipLogoRed,
    Dark: yipLogoDark,
  };

  const yipLogoTextColors = {
    Black: "var(--mulearn-blackish)",
    Red: "#FA5252", // Keeping this as it's not in the brand colors
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

  const handleGenerate = () => {
    if (!campusCode) return alert("Campus Code is required");

    alert(
      `Generating logo with:
      Campus Code: ${campusCode}
      Logo Variant: ${logoType}
      File Type: ${fileType}`
    );
  };

  // Get filter style based on selected variant
  const getLogoFilter = () => {
    switch(selectedLogoVariant) {
      case "white": return { filter: "brightness(0) invert(1)" };
      case "blue": return { filter: "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(198deg) brightness(101%) contrast(101%)" };
      case "violet": return { filter: "brightness(0) saturate(100%) invert(39%) sepia(91%) saturate(2585%) hue-rotate(266deg) brightness(94%) contrast(101%)" };
      case "gradient": return {}; // Gradient will be handled by SVG itself
      default: return {};
    }
  };

  return (
    <div className="min-h-screen h-screen bg-background text-foreground overflow-hidden">
      {/* Main Content */}
     <div className="flex flex-col sm:flex-row min-h-screen bg-mulearn-whitish border-2 border-mulearn-greyish overflow-auto">

        {/* Logo Preview Section */}
        <div 
          className="flex justify-center items-center gap-8 sm:gap-16 w-full py-8 sm:py-6 px-4 sm:px-6 sm:h-screen border-b-2 sm:border-b-0 sm:border-r-2 border-mulearn-greyish"
          style={{ background: "var(--mulearn-blackish)" }}
        >
          {/* Square Display */}
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
              src={logoType === "MuLearn" ? mulearnLogo : yipLogoImages[yipLogoVariant]}
              className={
                logoType === "MuLearn"
                  ? "w-2/3 absolute top-1/2 transform -translate-y-1/2 z-10"
                  : yipLogoVariant === "Dark"
                  ? "ml-4 w-3/5 top-6 absolute"
                  : "w-1/2 top-6 absolute"
              }
              style={logoType === "MuLearn" ? getLogoFilter() : {}}
              alt="Logo"
            />

            <span
              className={
                logoType === "MuLearn"
                  ? "absolute font-light text-2xl tracking-wide text-center w-full"
                  : "absolute text-2xl text-center w-full font-bold"
              }
              style={
                logoType === "YIP"
                  ? {
                      color: yipLogoTextColors[yipLogoVariant],
                      position: "absolute",
                      bottom: "1.5rem",
                      zIndex: 20
                    }
                  : {
                      position: "absolute",
                      bottom: bottomOffset,
                      zIndex: 20,
                       color: "var(--mulearn-whitish)" 
                     
                    }
              }
            >
              {campusCode ? campusCode : "Campus"}
            </span>
          </div>

          {/* Round Display */}
          {(logoType === "YIP" || muLogoVariant === "Profile Pic") && (
            <div
              className="relative overflow-hidden hidden rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:flex justify-center shadow-lg"
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
                src={logoType === "MuLearn" ? mulearnLogo : yipLogoImages[yipLogoVariant]}
                className={
                  logoType === "MuLearn"
                    ? "w-2/3 absolute top-1/2 transform -translate-y-1/2 z-10"
                    : yipLogoVariant === "Dark"
                    ? "ml-4 w-3/5 top-6 absolute"
                    : "w-1/2 top-6 absolute"
                }
                style={logoType === "MuLearn" ? getLogoFilter() : {}}
                alt="Logo"
              />
              <span
                className={
                  logoType === "MuLearn"
                    ? "absolute font-light text-2xl tracking-wide text-center w-full"
                    : "absolute text-2xl text-center w-full font-bold"
                }
                style={
                  logoType === "YIP"
                    ? {
                        color: yipLogoTextColors[yipLogoVariant],
                        position: "absolute",
                        bottom: "1.5rem",
                        zIndex: 20
                      }
                    : {
                        position: "absolute",
                        bottom: "5.5rem",
                        zIndex: 20,
                        color: "var(--mulearn-whitish)"
                      }
                }
              >
                {campusCode ? campusCode : "Campus"}
              </span>
            </div>
          )}
        </div>

        {/* Controls */}
        <form className="w-full sm:w-1/2 md:w-1/3 sm:max-w-lg sm:h-screen p-3 sm:p-5 sm:pl-8 lg:p-8 lg:pl-12 flex flex-col justify-between bg-background overflow-hidden"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground font-display">
              Logo Generator
            </h2>

            <label className="block mb-1 text-sm font-semibold text-mulearn-gray-600 h-5">Campus Code</label>
            <input
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

            <label className="block mb-1 text-sm font-semibold text-mulearn-gray-600 h-5">Logo Type</label>
            <div className="flex gap-2 mb-3">
              {logoTypes.map((type) => (
                <button
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
                </button>
              ))}
            </div>

            <label className="block mb-1 text-sm font-semibold text-mulearn-gray-600 h-5">Logo Variant</label>
            <div className="flex gap-2 mb-3">
              {logoType === "MuLearn" &&
                muLogoVariants.map((variant) => (
                  <button
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
                  </button>
                ))}
              {logoType === "YIP" &&
                yipLogoVariants.map((variant) => (
                  <button
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
                  </button>
                ))}
            </div>

            {/* Logo Color Selection for µLearn */}
            {(logoType === "MuLearn" && muLogoVariant === "Transparent Bg") && (
              <div className="bg-mulearn-whitish p-2 rounded-lg mb-3 h-auto shadow-md">
                <label className="block mb-2 text-xs font-semibold text-mulearn-gray-600 h-5">Foreground Color</label>
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
                <label className="block mb-2 text-xs font-semibold text-mulearn-gray-600 h-5">
                  Foreground Color
                </label>
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
                
                <label className="block mb-1 text-xs font-semibold text-mulearn-gray-600 h-5">
                  Background Color
                </label>
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

            <label className="block mb-1 text-sm font-semibold text-mulearn-gray-600 h-5">File Type</label>
            <div className="flex gap-2 mb-2">
              {fileTypes.map((type) => (
                <button
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
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="text-mulearn-whitish font-medium rounded-lg text-base px-4 py-3 h-12 shadow-lg transition-all duration-200 w-full mt-0 mb-2 z-10 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed font-display"
            style={{ 
              backgroundColor: isDownloading ? 'var(--mulearn-gray-600)' : 'var(--mulearn-trusty-blue)'
            }}
            onClick={handleGenerate}
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
                Generating...
              </div>
            ) : (
              "Download Logo"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CampusLogoGenerator;