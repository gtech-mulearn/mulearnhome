import React from "react";
import Image, { ImageProps } from "next/image";

/**
 * MuImage: A wrapper for Next.js Image that ensures aspect ratio is preserved.
 * If only width or height is set, sets the other to 'auto' via style prop.
 */
const MuImage = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { width, height, style, ...rest } = props;
  const newStyle = { ...style };

  if (width && !height) {
    newStyle.height = "auto";
  } else if (height && !width) {
    newStyle.width = "auto";
  }

  // Ensure alt is always present for accessibility
  const alt = rest.alt ?? "";
  return <Image ref={ref} width={width} height={height} style={newStyle} {...rest} alt={alt} />;
});

MuImage.displayName = "MuImage";

export default MuImage;
