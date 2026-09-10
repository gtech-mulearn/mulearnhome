import Image, { type ImageProps } from "next/image";
import React from "react";

/**
 * MuImage: A wrapper for Next.js Image that ensures aspect ratio is preserved.
 * If only width or height is set, sets the other to 'auto' via style prop.
 */
const MuImage = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { width, height, style, ...rest } = props;
  const newStyle = { ...style } as React.CSSProperties;

  // grab className early so we can detect Tailwind tokens before deciding
  // whether to set pixel inline styles below.
  const className = (rest as any)?.className as string | undefined;

  // Preserve aspect ratio when either dimension is modified via props or CSS.
  // If the component receives a width but not a height, set height to auto.
  // If it receives a height but not a width, set width to auto.
  if (width && !height) {
    newStyle.height = newStyle.height ?? "auto";
  } else if (height && !width) {
    newStyle.width = newStyle.width ?? "auto";
  }

  // Determine if `fill` is used — for `fill`, Next/Image controls sizing via the parent
  // and we must not set inline width/height styles (Next will error if style.width is set).
  const isFill = (props as any).fill === true;

  // If the caller provided an explicit style that changes one dimension
  // (e.g. `style={{ height: 'auto' }}`), ensure the complementary
  // dimension is set to 'auto' when a numeric prop exists. This handles
  // cases like the Navbar logo where both width/height props are provided
  // but style overrides one side.
  const incomingStyle = style as React.CSSProperties | undefined;
  if (incomingStyle) {
    if (incomingStyle.height != null && width) {
      newStyle.width = newStyle.width ?? "auto";
    }
    if (incomingStyle.width != null && height) {
      newStyle.height = newStyle.height ?? "auto";
    }
  }

  // detect tailwind tokens if className present
  let hasH = false;
  let hasW = false;
  try {
    if (className) {
      const tokens = className.split(/\s+/);
      hasH = tokens.some((t) => t.startsWith("h-"));
      hasW = tokens.some((t) => t.startsWith("w-"));
    }
  } catch (_e) {
    /* ignore */
  }

  // Decide whether CSS (incoming style or className) modifies width/height
  const cssModifiesHeight = !!(incomingStyle && incomingStyle.height != null) || hasH;
  const cssModifiesWidth = !!(incomingStyle && incomingStyle.width != null) || hasW;

  // If both numeric width and height are provided, handle three cases:
  // 1) CSS modifies height -> set complementary width to 'auto'
  // 2) CSS modifies width -> set complementary height to 'auto'
  // 3) CSS modifies neither -> set inline pixel styles to preserve exact sizing
  const isWidthNumber = typeof width === "number";
  const isHeightNumber = typeof height === "number";
  if (width && height) {
    if (cssModifiesHeight && cssModifiesWidth) {
      // CSS changes both dimensions (e.g. Tailwind `w-32 h-32`) — ensure
      // both inline styles are 'auto' so aspect ratio is preserved.
      newStyle.width = newStyle.width ?? "auto";
      newStyle.height = newStyle.height ?? "auto";
    } else if (cssModifiesHeight) {
      newStyle.width = newStyle.width ?? "auto";
    } else if (cssModifiesWidth) {
      newStyle.height = newStyle.height ?? "auto";
    } else {
      if (!newStyle.width) newStyle.width = isWidthNumber ? `${width}px` : String(width);
      if (!newStyle.height) newStyle.height = isHeightNumber ? `${height}px` : String(height);
    }
  }

  // Additionally, if a `className` is provided (common with Tailwind classes
  // like `max-w-full h-auto`), CSS may change one dimension. In that case
  // ensure the complementary dimension is set to 'auto' to avoid Next.js warnings.
  if (className) {
    // If className present and fill, ensure both dims default to auto
    const isFill = (props as any).fill === true;
    if (isFill) {
      newStyle.width = newStyle.width ?? "auto";
      newStyle.height = newStyle.height ?? "auto";
    }
    // Other className-based adjustments already handled above via hasH/hasW
  }

  // If `fill` is used without a className, still ensure default auto dims
  // to avoid warnings when parent container controls sizing.
  const isFillOnly = (props as any).fill === true && !className;
  if (isFillOnly) {
    newStyle.width = newStyle.width ?? "auto";
    newStyle.height = newStyle.height ?? "auto";
  }

  const alt = rest.alt ?? "";

  // If `fill` is used, remove any inline width/height styling — Next.js expects
  // the parent to control dimensions and will error if `style.width` is provided.
  if (isFill) {
    if (Object.hasOwn(newStyle, "width")) delete (newStyle as any).width;
    if (Object.hasOwn(newStyle, "height")) delete (newStyle as any).height;
  }
  // Detect if the image src is an SVG file or a remote CDN/S3 host
  // and disable Next.js image optimization to ensure direct, uncorrupted SVG rendering.
  let shouldUnoptimized = false;
  try {
    const srcVal = (rest as any).src;
    if (typeof srcVal === "string") {
      if (srcVal.endsWith(".svg") || srcVal.includes(".svg")) {
        shouldUnoptimized = true;
      }
      if (/^https?:\/\//.test(srcVal)) {
        const parsed = new URL(srcVal);
        const host = parsed.hostname;
        if (
          host === "s3.ap-south-1.amazonaws.com" ||
          host.endsWith("cdn.mulearn") ||
          host.includes("cdn.mulearn")
        ) {
          shouldUnoptimized = true;
        }
      }
    }
  } catch (_e) {
    /* ignore parsing errors */
  }

  const imageProps = {
    ...(rest as object),
    unoptimized: shouldUnoptimized || (rest as any).unoptimized,
  } as ImageProps;

  return (
    <Image ref={ref} width={width} height={height} style={newStyle} {...imageProps} alt={alt} />
  );
});

MuImage.displayName = "MuImage";

export default MuImage;
