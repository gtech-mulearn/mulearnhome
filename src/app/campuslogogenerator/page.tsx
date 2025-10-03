'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import * as htmlToImage from 'html-to-image';

// Stripes Background Component - remains static, no color changes
const StripesBackground = ({ className = "" }: { className?: string }) => (
  <Image
    src="/logo-template/stripes.svg"
    alt="Stripes Background"
    fill
    className={`object-cover ${className}`}
    style={{ 
      opacity: 7,
      pointerEvents: 'none',
      zIndex: 1
    }}
  />
);

// Function to convert color to CSS filter for SVG color change
const colorToFilter = (color: string): string => {
  // Handle gradient case
  if (color.startsWith('linear-gradient')) {
    return 'brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(1180%) hue-rotate(200deg) brightness(95%) contrast(101%)'; // Default to blue for gradient
  }
  
  // Convert to filter values for solid colors
  if (color === '#FEFEFE') return 'brightness(0) invert(1)'; // White
  if (color === '#AF2EE6') return 'brightness(0) saturate(100%) invert(45%) sepia(84%) saturate(2274%) hue-rotate(244deg) brightness(97%) contrast(98%)'; // Purple
  if (color === '#2E85FE') return 'brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(1180%) hue-rotate(200deg) brightness(95%) contrast(101%)'; // Blue
  
  // Default fallback to blue
  return 'brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(1180%) hue-rotate(200deg) brightness(95%) contrast(101%)';
};

// MuLearn Logo Component with dynamic color
const MuLearnLogo = ({ color, width = 200, height = 50 }: { color: string, width?: number, height?: number }) => {
  const isGradient = color.startsWith('linear-gradient');
  
  if (isGradient) {
    return (
      <div 
        className="transition-all duration-300 relative"
        style={{ 
          width: width,
          height: height 
        }}
      >
        <Image
          src="/logo-template/logo.svg"
          alt="MuLearn Logo"
          width={width}
          height={height}
          className="w-full h-full absolute inset-0"
          style={{ 
            filter: 'brightness(0) invert(1)' // Make it white first
          }}
        />
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: color,
            mixBlendMode: 'multiply',
            mask: `url("/logo-template/logo.svg") no-repeat center/contain`,
            WebkitMask: `url("/logo-template/logo.svg") no-repeat center/contain`
          }}
        />
      </div>
    );
  }
  
  return (
    <div 
      className="transition-all duration-300"
      style={{ 
        width: width,
        height: height 
      }}
    >
      <Image
        src="/logo-template/logo.svg"
        alt="MuLearn Logo"
        width={width}
        height={height}
        className="w-full h-full transition-all duration-300"
        style={{ 
          filter: colorToFilter(color)
        }}
      />
    </div>
  );
};

export default function CampusLogoGenerator() {
  // State for form data and download functionality
  const [formData, setFormData] = useState({
    campusCode: '',
    logoType: 'MuLearn',
    logoVariant: 'Profile Pic',
    foregroundColor: '#2E85FE',
    backgroundColor: '#1A1A1A',
    fileType: 'PNG'
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const squareLogoRef = useRef<HTMLDivElement>(null);

  // Color options
  const foregroundColors = [
    { name: 'White', value: '#FEFEFE' },
    { name: 'Purple', value: '#AF2EE6' },
    { name: 'Blue', value: '#2E85FE' },
    { name: 'Gradient', value: 'linear-gradient(133.8deg, #2E85FE -8.97%, #AF2EE6 91.41%)' }
  ];

  const backgroundColors = [
    { name: 'Dark', value: '#1A1A1A' },
    { name: 'Purple', value: '#AF2EE6' },
    { name: 'Blue', value: '#2E85FE' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDownload = async () => {
    if (!squareLogoRef.current) {
      console.error('Logo reference not found');
      alert('Logo not ready for download. Please wait a moment and try again.');
      return;
    }

    setIsDownloading(true);
    
    try {
      console.log('Starting download process...');
      
      // Get the actual dimensions of the element
      const rect = squareLogoRef.current.getBoundingClientRect();
      console.log('Element dimensions:', rect);
      
      const config = {
        backgroundColor: formData.logoVariant === 'Transparent Bg' ? 'transparent' : formData.backgroundColor,
        width: rect.width,
        height: rect.height,
        quality: 1.0,
        pixelRatio: 2, // Reduced for better compatibility
        useCORS: true,
        allowTaint: false,
        imageSmoothingEnabled: true,
        skipFonts: false,
        cacheBust: true,
        filter: (node: HTMLElement) => {
          // Include all nodes except script tags
          if (node.tagName === 'SCRIPT') return false;
          return true;
        }
      };

      let dataUrl: string;
      
      console.log('Generating image with config:', config);
      
      if (formData.fileType === 'PNG') {
        console.log('Generating PNG...');
        dataUrl = await htmlToImage.toPng(squareLogoRef.current, config);
      } else {
        console.log('Generating SVG...');
        dataUrl = await htmlToImage.toSvg(squareLogoRef.current, {
          ...config,
          pixelRatio: 1, // SVG doesn't need pixelRatio
        });
      }

      console.log('Image generated successfully');

      // Create download link
      const link = document.createElement('a');
      link.download = `${formData.campusCode || 'mulearn'}-logo.${formData.fileType.toLowerCase()}`;
      link.href = dataUrl;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download triggered successfully');
      
    } catch (error) {
      console.error('Error generating logo:', error);
      // Simple fallback with minimal config
      try {
        const simpleConfig = {
          quality: 1.0,
          backgroundColor: formData.backgroundColor,
        };
        
        const fallbackDataUrl = formData.fileType === 'PNG' 
          ? await htmlToImage.toPng(squareLogoRef.current, simpleConfig)
          : await htmlToImage.toSvg(squareLogoRef.current, simpleConfig);
          
        const link = document.createElement('a');
        link.download = `${formData.campusCode || 'mulearn'}-logo.${formData.fileType.toLowerCase()}`;
        link.href = fallbackDataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (fallbackError) {
        console.error('All download methods failed:', fallbackError);
        alert('Download failed. Please try a different browser or format.');
      }
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row m-2 lg:m-4 overflow-hidden bg-white">
       

        {/* Logo Preview Section - Mobile First */}
        <div className="order-1 lg:order-2 flex-1 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-6 lg:p-12 relative min-h-[50vh] lg:min-h-auto">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center relative z-10">
            {/* Conditional Rendering based on Logo Type */}
            {formData.logoType === 'YIP' ? (
              // YIP Logo - Show only text, no containers
              <div className="text-center">
                <div 
                  className="text-xl lg:text-2xl font-medium"
                  style={{ 
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-plus-jakarta)'
                  }}
                >
                  YIP Logo Not Available
                </div>
              </div>
            ) : (
              <>
                {/* Square Logo */}
                <div className="relative group">
                  <div 
                    ref={squareLogoRef}
                    className={`w-64 h-64 lg:w-72 lg:h-72 flex items-center justify-center text-white relative transform transition-all duration-300 overflow-hidden ${
                      formData.logoVariant === 'Transparent Bg' ? '' : 'shadow-2xl'
                    }`}
                    style={{ 
                      backgroundColor: formData.logoVariant === 'Transparent Bg' ? 'transparent' : formData.backgroundColor
                    }}
                  >
                    {/* Stripes Background - Only show for non-transparent backgrounds */}
                    {formData.logoVariant !== 'Transparent Bg' && <StripesBackground />}
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                      <div className="transition-all duration-300">
                        <div className="flex flex-col items-center">
                          <MuLearnLogo 
                            color={formData.foregroundColor} 
                            width={180} 
                            height={45} 
                          />
                          <div className="relative w-full">
                            <div 
                              className="text-2xl lg:text-3xl opacity-90 absolute right-0" 
                              style={{ 
          
                                fontFamily: 'var(--font-plus-jakarta)',
                                fontWeight: 400
                              }}
                            >
                              {formData.campusCode || 'Campus'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Circular Logo - Hidden on mobile */}
                {formData.logoVariant !== 'Transparent Bg' && (
                  <div 
                    className="hidden lg:block w-64 h-64 rounded-full flex items-center justify-center text-white relative overflow-hidden"
                    style={{ backgroundColor: formData.backgroundColor }}
                  >
                    {/* Stripes Background */}
                    <StripesBackground />
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                      <div className="transition-all duration-300">
                        <div className="flex flex-col items-center">
                          <MuLearnLogo 
                            color={formData.foregroundColor} 
                            width={160} 
                            height={40} 
                          />
                          <div className="relative w-full">
                            <div 
                              className="text-base mt-2 opacity-90 absolute right-0" 
                              style={{ 
                              
                                fontFamily: 'var(--font-plus-jakarta)',
                                fontWeight: 400
                              }}
                            >
                              {formData.campusCode || 'Campus'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Control Panel */}
        <div className="order-2 lg:order-1 w-full lg:w-110 bg-white p-4 lg:p-6 shadow-lg overflow-y-auto">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 
                className="font-bold mb-2" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(--color-text-normal)',
                  fontSize: 'var(--font-size-h4)',
                  
                }}
              >
                Logo Generator
              </h1>
            </div>

            {/* Campus Code Input */}
            <div>
              <label 
                className="block font-medium mb-2" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(--color-text-normal)',
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 500
                }}
              >
                Campus Code
              </label>
              <input
                type="text"
                placeholder="Enter Campus Code"
                className="w-full p-3 border-0 focus:outline-none bg-gray-50 focus:bg-white transition-all duration-200"
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontSize: 'var(--font-size-body)'
                }}
                value={formData.campusCode}
                onChange={(e) => handleInputChange('campusCode', e.target.value)}
              />
              <div className="text-right text-xs text-gray-400 mt-1">{formData.campusCode.length}/15</div>
            </div>

            {/* Logo Type */}
            <div>
              <label 
                className="block font-medium mb-2" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(--color-text-normal)',
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 500
                }}
              >
                Logo Type
              </label>
              <div className="flex gap-2">
                <button
                  className={`flex-1 p-3 rounded-lg font-medium transition-all ${
                    formData.logoType === 'MuLearn' 
                      ? 'text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={{ 
                    backgroundColor: formData.logoType === 'MuLearn' ? 'var(--color-highlight)' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.logoType !== 'MuLearn' ? 'var(--color-text-normal)' : undefined,
                    fontWeight: 500
                  }}
                  onClick={() => handleInputChange('logoType', 'MuLearn')}
                >
                  MuLearn
                </button>
                <button
                  className={`flex-1 rounded-lg p-3 font-medium transition-all ${
                    formData.logoType === 'YIP' 
                      ? 'text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={{ 
                    backgroundColor: formData.logoType === 'YIP' ? 'var(--color-highlight)' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.logoType !== 'YIP' ? 'var(--color-text-normal)' : undefined,
                    fontWeight: 500
                  }}
                  onClick={() => handleInputChange('logoType', 'YIP')}
                >
                  YIP
                </button>
              </div>
            </div>

            {/* Logo Variant */}
            <div>
              <label 
                className="block font-medium mb-2" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(--color-text-normal)',
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 500
                }}
              >
                Logo Variant
              </label>
              <div className="flex gap-2">
                <button
                  className={`flex-1 p-3 rounded-lg font-medium transition-all ${
                    formData.logoVariant === 'Profile Pic' 
                      ? 'text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={{ 
                    backgroundColor: formData.logoVariant === 'Profile Pic' ? 'var(--color-highlight)' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.logoVariant !== 'Profile Pic' ? 'var(--color-text-normal)' : undefined,
                    fontWeight: 500
                  }}
                  onClick={() => handleInputChange('logoVariant', 'Profile Pic')}
                >
                  Profile Pic
                </button>
                <button
                  className={`flex-1 p-3 rounded-lg font-medium transition-all ${
                    formData.logoVariant === 'Transparent Bg' 
                      ? 'text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={{ 
                    backgroundColor: formData.logoVariant === 'Transparent Bg' ? 'var(--color-highlight)' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.logoVariant !== 'Transparent Bg' ? 'var(--color-text-normal)' : undefined,
                    fontWeight: 500
                  }}
                  onClick={() => handleInputChange('logoVariant', 'Transparent Bg')}
                >
                  Transparent Bg
                </button>
              </div>
            </div>

            {/* Foreground Color */}
            <div>
              <label 
                className="block font-medium mb-3" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(--color-text-normal)',
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 500
                }}
              >
                Foreground Color
              </label>
              <div className="flex gap-3">
                {foregroundColors.map((color) => (
                  <button
                    key={color.value}
                    className={`w-12 h-12 rounded border border-gray-200 transition-all ${
                      formData.foregroundColor === color.value 
                        ? 'scale-110 ring-2 ring-blue-500' 
                        : 'hover:opacity-80'
                    }`}
                    style={{ 
                      backgroundColor: color.value
                    }}
                    onClick={() => handleInputChange('foregroundColor', color.value)}
                  />
                ))}
              </div>
            </div>

            {/* Background Color */}
            <div>
              <label 
                className="block font-medium mb-3" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(--color-text-normal)',
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 500
                }}
              >
                Background Color
              </label>
              <div className="flex gap-3">
                {backgroundColors.map((color) => (
                  <button
                    key={color.value}
                    className={`w-12 h-12 rounded border border-gray-200 transition-all ${
                      formData.backgroundColor === color.value 
                        ? 'scale-110 ring-2 ring-blue-500' 
                        : 'hover:opacity-80'
                    }`}
                    style={{ 
                      backgroundColor: color.value
                    }}
                    onClick={() => handleInputChange('backgroundColor', color.value)}
                  />
                ))}
              </div>
            </div>

            {/* File Type */}
            <div>
              <label 
                className="block font-medium mb-2" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(--color-text-normal)',
                  fontSize: 'var(--font-size-body)',
                  fontWeight: 500
                }}
              >
                File Type
              </label>
              <div className="flex gap-2">
                <button
                  className={`flex-1 p-3 rounded-lg font-medium transition-all ${
                    formData.fileType === 'PNG' 
                      ? 'text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={{ 
                    backgroundColor: formData.fileType === 'PNG' ? 'var(--color-highlight)' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.fileType !== 'PNG' ? 'var(--color-text-normal)' : undefined,
                    fontWeight: 500
                  }}
                  onClick={() => handleInputChange('fileType', 'PNG')}
                >
                  PNG
                </button>
                <button
                  className={`flex-1 p-3 rounded-lg font-medium transition-all ${
                    formData.fileType === 'SVG' 
                      ? 'text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={{ 
                    backgroundColor: formData.fileType === 'SVG' ? 'var(--color-highlight)' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.fileType !== 'SVG' ? 'var(--color-text-normal)' : undefined,
                    fontWeight: 500
                  }}
                  onClick={() => handleInputChange('fileType', 'SVG')}
                >
                  SVG
                </button>
              </div>
            </div>

            {/* Download Button */}
            <button
              className="w-full rounded-lg p-4 text-white font-medium transition-all hover:opacity-90 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: 'var(--color-highlight)',
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: 'var(--font-size-body)',
                fontWeight: 500
              }}
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Downloading...
                </div>
              ) : (
                'Download Logo'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
