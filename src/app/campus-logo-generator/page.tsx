'use client';

import React, { useState, useRef } from 'react';
import MuImage from '@/components/MuImage';
import * as htmlToImage from 'html-to-image';

const StripesBackground = ({ className = "" }: { className?: string }) => (
  <MuImage
    src="/assets/logo-template/stripes (1).svg"
    alt="Stripes Background"
    fill
    className={`object-cover ${className}`}
    style={{ 
      opacity: 0.7,
      pointerEvents: 'none',
      zIndex: 1
    }}
  />
);

const colorToFilter = (color: string): string => {
  if (color.startsWith('linear-gradient') || color.includes('--mulearn-trusty)')) {
    return 'brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(1180%) hue-rotate(200deg) brightness(95%) contrast(101%)'; // Default to blue for gradient
  }
  
  if (color === '#FEFEFE') return 'brightness(0) invert(1)';
  if (color === '#AF2EE6' || color.includes('--mulearn-duke-purple')) return 'brightness(0) saturate(100%) invert(45%) sepia(84%) saturate(2274%) hue-rotate(244deg) brightness(97%) contrast(98%)'; // Purple
  if (color === '#2E85FE' || color.includes('--mulearn-trusty-blue')) return 'brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(1180%) hue-rotate(200deg) brightness(95%) contrast(101%)'; // Blue
  
  return 'brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(1180%) hue-rotate(200deg) brightness(95%) contrast(101%)';
};

const MuLearnLogo = ({ color, width = 200, height = 50 }: { color: string, width?: number, height?: number }) => {
  const isGradient = color.startsWith('linear-gradient') || color.includes('--mulearn-trusty)');
  
  if (isGradient) {
    return (
      <div 
        className="transition-all duration-300 relative"
        style={{ 
          width: width,
          height: height 
        }}
      >
        <MuImage
          src="/assets/logo-template/logo.svg"
          alt="MuLearn Logo"
          width={width}
          height={height}
          className="w-full h-full absolute inset-0"
          style={{ 
            filter: 'brightness(0) invert(1)'
          }}
        />
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: color,
            mixBlendMode: 'multiply',
            mask: `url("/assets/logo-template/logo.svg") no-repeat center/contain`,
            WebkitMask: `url("/assets/logo-template/logo.svg") no-repeat center/contain`
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
      <MuImage
        src="/assets/logo-template/logo.svg"
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

const YIPLogo = ({ variant, width = 200, height = 50 }: { variant: string, width?: number, height?: number }) => {
  const getLogoPath = () => {
    switch (variant) {
      case 'red': return '/assets/logo-template/yip-logo-red.svg';
      case 'dark': return '/assets/logo-template/yip-logo-dark.svg';
      case 'black': return '/assets/logo-template/yip-logo-black.svg';
      default: return '/assets/logo-template/yip-logo-red.svg';
    }
  };

  return (
    <div 
      className="transition-all duration-300"
      style={{ 
        width: width,
        height: height 
      }}
    >
      <MuImage
        src={getLogoPath()}
        alt="YIP Logo"
        width={width}
        height={height}
        className="w-full h-full transition-all duration-300"
      />
    </div>
  );
};

export default function CampusLogoGenerator() {
  const [formData, setFormData] = useState({
    campusCode: '',
    logoType: 'MuLearn',
    logoVariant: 'Profile Pic',
    foregroundColor: 'var(--mulearn-trusty-blue)',
    backgroundColor: 'var(--mulearn-blackish)',
    fileType: 'PNG',
    yipVariant: 'red'
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const squareLogoRef = useRef<HTMLDivElement>(null);

  const foregroundColors = [
    { name: 'White', value: '#FEFEFE' },
    { name: 'Purple', value: 'var(--mulearn-duke-purple)' },
    { name: 'Blue', value: 'var(--mulearn-trusty-blue)' },
    { name: 'Gradient', value: 'var(--mulearn-trusty)' }
  ];

  const backgroundColors = [
    { name: 'Dark', value: 'var(--mulearn-blackish)' },
    { name: 'Purple', value: 'var(--mulearn-duke-purple)' },
    { name: 'Blue', value: 'var(--mulearn-trusty-blue)' }
  ];
  const yipVariants = [
    { name: 'Red', value: 'red', bgColor: '#ffffff' },
    { name: 'Dark', value: 'dark', bgColor: 'var(--mulearn-blackish)' },
    { name: 'Black', value: 'black', bgColor: '#ffffff' }
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
      
      const rect = squareLogoRef.current.getBoundingClientRect();
      console.log('Element dimensions:', rect);
      
      const config = {
        backgroundColor: formData.logoType === 'YIP' 
          ? (yipVariants.find(v => v.value === formData.yipVariant)?.bgColor || '#FFFFFF')
          : (formData.logoVariant === 'Transparent Bg' ? 'transparent' : formData.backgroundColor),
        width: rect.width,
        height: rect.height,
        quality: 1.0,
        pixelRatio: 2,
        useCORS: true,
        allowTaint: false,
        imageSmoothingEnabled: true,
        skipFonts: false,
        cacheBust: true,
        filter: (node: HTMLElement) => {
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
          pixelRatio: 1,
        });
      }

      console.log('Image generated successfully');

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
      try {
        const simpleConfig = {
          quality: 1.0,
          backgroundColor: formData.logoType === 'YIP' 
            ? (yipVariants.find(v => v.value === formData.yipVariant)?.bgColor || '#FFFFFF')
            : formData.backgroundColor,
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
      <div className="flex-1 flex flex-col lg:flex-row mr-2 overflow-hidden bg-mulearn-whitish">
        <div className="order-1 lg:order-2 flex-1 bg-mulearn-blackish flex items-center justify-center p-6 lg:p-12 relative min-h-[50vh] lg:min-h-auto">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center relative z-10">
            {formData.logoType === 'YIP' ? (
              <>
                <div className="relative group">
                  <div 
                    ref={squareLogoRef}
                    className="w-64 h-64 lg:w-72 lg:h-72 flex items-center justify-center text-white relative transform transition-all duration-300 overflow-hidden shadow-2xl"
                    style={{ 
                      backgroundColor: yipVariants.find(v => v.value === formData.yipVariant)?.bgColor || '#FFFFFF'
                    }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                      <div className="transition-all duration-300">
                        <div className="flex flex-col items-center gap-3">
                          <YIPLogo 
                            variant={formData.yipVariant}
                            width={220} 
                            height={145} 
                          />
                          <div className="text-center">
                            <div 
                              className="text-2xl lg:text-3xl opacity-90" 
                              style={{ 
                                color: formData.yipVariant === 'dark' ? '#FFFFFF' : '#000000',
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

                <div 
                  className="hidden lg:block w-64 h-64 rounded-full flex items-center justify-center text-white relative overflow-hidden shadow-2xl"
                  style={{ 
                    backgroundColor: yipVariants.find(v => v.value === formData.yipVariant)?.bgColor || '#FFFFFF'
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center z-10">
                    <div className="transition-all duration-300">
                      <div className="flex flex-col items-center gap-2 lg:gap-1">
                        <YIPLogo 
                          variant={formData.yipVariant}
                          width={160} 
                          height={135} 
                        />
                        <div className="text-center">
                          <div 
                            className="text-lg opacity-90" 
                            style={{ 
                              color: formData.yipVariant === 'dark' ? '#FFFFFF' : '#000000',
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
              </>
            ) : (
              <>
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

                {formData.logoVariant !== 'Transparent Bg' && (
                  <div 
                    className="hidden lg:block w-64 h-64 rounded-full flex items-center justify-center text-white relative overflow-hidden shadow-2xl"
                    style={{ backgroundColor: formData.backgroundColor }}
                  >
                    <StripesBackground />
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                      <div className="transition-all duration-300">
                        <div className="flex flex-col items-center">
                          <MuLearnLogo 
                            color={formData.foregroundColor} 
                            width={140} 
                            height={35} 
                          />
                          <div className="relative w-full">
                            <div 
                              className="text-base mt-2 opacity-90 absolute right-0" 
                              style={{ 
                                color: '#FFFFFF',
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

        <div className="order-2 lg:order-1 w-full lg:w-110 bg-white p-4 lg:p-10 shadow overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h1 
                className="font-bold mb-2" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(--mulearn-blackish)',
                  fontSize: '1.5rem',
                  
                }}
              >
                Logo Generator
              </h1>
            </div>

            <div>
              <label 
                className="block font-medium mb-2" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(  --mulearn-blackish-normal)',
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

            <div>
              <label 
                className="block font-medium mb-2" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(  --mulearn-blackish-normal)',
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
                    backgroundColor: formData.logoType === 'MuLearn' ? 'var(--mulearn-trusty-blue )' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.logoType !== 'MuLearn' ? 'var(  --mulearn-blackish-normal)' : undefined,
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
                    backgroundColor: formData.logoType === 'YIP' ? 'var(  --mulearn-trusty-blue )' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.logoType !== 'YIP' ? 'var(  --mulearn-blackish-normal)' : undefined,
                    fontWeight: 500
                  }}
                  onClick={() => handleInputChange('logoType', 'YIP')}
                >
                  YIP
                </button>
              </div>
            </div>

            {formData.logoType === 'YIP' ? (
              <div>
                <label 
                  className="block font-medium mb-2" 
                  style={{ 
                    fontFamily: 'var(--font-plus-jakarta)', 
                    color: 'var(  --mulearn-blackish-normal)',
                    fontSize: 'var(--font-size-body)',
                    fontWeight: 500
                  }}
                >
                  YIP Variant
                </label>
                <div className="flex gap-2">
                  {yipVariants.map((variant) => (
                    <button
                      key={variant.value}
                      className={`flex-1 p-3 rounded-lg font-medium transition-all ${
                        formData.yipVariant === variant.value 
                          ? 'text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      style={{ 
                        backgroundColor: formData.yipVariant === variant.value ? 'var(  --mulearn-trusty-blue )' : undefined,
                        fontFamily: 'var(--font-plus-jakarta)',
                        color: formData.yipVariant !== variant.value ? 'var(  --mulearn-blackish-normal)' : undefined,
                        fontWeight: 500
                      }}
                      onClick={() => handleInputChange('yipVariant', variant.value)}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <label 
                  className="block font-medium mb-2" 
                  style={{ 
                    fontFamily: 'var(--font-plus-jakarta)', 
                    color: 'var(  --mulearn-blackish-normal)',
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
                      backgroundColor: formData.logoVariant === 'Profile Pic' ? 'var(  --mulearn-trusty-blue )' : undefined,
                      fontFamily: 'var(--font-plus-jakarta)',
                      color: formData.logoVariant !== 'Profile Pic' ? 'var(  --mulearn-blackish-normal)' : undefined,
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
                      backgroundColor: formData.logoVariant === 'Transparent Bg' ? 'var(  --mulearn-trusty-blue )' : undefined,
                      fontFamily: 'var(--font-plus-jakarta)',
                      color: formData.logoVariant !== 'Transparent Bg' ? 'var(  --mulearn-blackish-normal)' : undefined,
                      fontWeight: 500
                    }}
                    onClick={() => handleInputChange('logoVariant', 'Transparent Bg')}
                  >
                    Transparent Bg
                  </button>
                </div>
              </div>
            )}

            {formData.logoType !== 'YIP' && (
              <>
                <div>
                  <label 
                    className="block font-medium mb-3" 
                    style={{ 
                      fontFamily: 'var(--font-plus-jakarta)', 
                      color: 'var(  --mulearn-blackish-normal)',
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
                          background: color.value
                        }}
                        onClick={() => handleInputChange('foregroundColor', color.value)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label 
                    className={`block font-medium mb-3 ${
                      formData.logoVariant === 'Transparent Bg' ? 'opacity-50' : ''
                    }`}
                    style={{ 
                      fontFamily: 'var(--font-plus-jakarta)', 
                      color: 'var(  --mulearn-blackish-normal)',
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
                        disabled={formData.logoVariant === 'Transparent Bg'}
                        className={`w-12 h-12 rounded border border-gray-200 transition-all ${
                          formData.backgroundColor === color.value 
                            ? 'scale-110 ring-2 ring-blue-500' 
                            : 'hover:opacity-80'
                        } ${
                          formData.logoVariant === 'Transparent Bg' 
                            ? 'opacity-30 cursor-not-allowed' 
                            : ''
                        }`}
                        style={{ 
                          backgroundColor: color.value
                        }}
                        onClick={() => handleInputChange('backgroundColor', color.value)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            <div>
              <label 
                className="block font-medium mb-2" 
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)', 
                  color: 'var(  --mulearn-blackish-normal)',
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
                    backgroundColor: formData.fileType === 'PNG' ? 'var(  --mulearn-trusty-blue )' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.fileType !== 'PNG' ? 'var(  --mulearn-blackish-normal)' : undefined,
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
                    backgroundColor: formData.fileType === 'SVG' ? 'var(  --mulearn-trusty-blue )' : undefined,
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: formData.fileType !== 'SVG' ? 'var(  --mulearn-blackish-normal)' : undefined,
                    fontWeight: 500
                  }}
                  onClick={() => handleInputChange('fileType', 'SVG')}
                >
                  SVG
                </button>
              </div>
            </div>

            <button
              className="w-full rounded-lg p-4 text-white font-medium transition-all hover:opacity-90 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: 'var(  --mulearn-trusty-blue )',
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: 'var(--font-size-body)',
                fontWeight: 500
              }}
              onClick={handleDownload}
              disabled={isDownloading || formData.campusCode.length < 3}
            >
              {isDownloading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Downloading...
                </div>
              ) : formData.campusCode.length < 3 ? (
                'Enter Campus Code'
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
