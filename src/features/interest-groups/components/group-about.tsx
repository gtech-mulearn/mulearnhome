"use client";

import { ChevronDown } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Block =
  | { type: "heading"; level: 1 | 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

/**
 * Parses the small markdown subset the IG `about` field uses (`#`–`###` headings, `*`/`-`
 * bullets, `---` rules, `**bold**`) into blocks. Rendering goes through React elements, so
 * nothing from the API is ever injected as HTML.
 */
function parseAbout(markdown: string): Block[] {
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flush = () => {
    if (paragraph.length) blocks.push({ type: "paragraph", text: paragraph.join(" ") });
    if (list.length) blocks.push({ type: "list", items: list });
    paragraph = [];
    list = [];
  };

  for (const raw of markdown.split("\n")) {
    const line = raw.trim();
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    // A line that is only bold text (e.g. "**What the Community Offers**") reads as a heading.
    const boldLabel = line.match(/^\*{2,}([^*]+)\*{2,}:?$/);
    const item = line.match(/^[*-]\s+(.*)$/);

    if (!line || /^(---|\*\*\*|___)$/.test(line)) {
      flush();
    } else if (heading || boldLabel) {
      flush();
      const level = heading ? (Math.min(heading[1].length, 3) as 1 | 2 | 3) : 3;
      blocks.push({ type: "heading", level, text: heading ? heading[2] : (boldLabel?.[1] ?? "") });
    } else if (item) {
      if (paragraph.length) flush();
      list.push(item[1]);
    } else {
      if (list.length) flush();
      paragraph.push(line);
    }
  }
  flush();

  // The opening heading is usually "About the X Interest Group", which the dialog already says.
  if (blocks[0]?.type === "heading") blocks.shift();
  return blocks;
}

function renderInline(text: string): ReactNode[] {
  return text
    .split(/(\*{2,}[^*]+?\*{2,})/g)
    .filter(Boolean)
    .map((part, index) => {
      const bold = part.match(/^\*{2,}([^*]+?)\*{2,}$/);
      // biome-ignore lint/suspicious/noArrayIndexKey: static parsed text, never reordered
      if (bold) return <strong key={index}>{bold[1]}</strong>;
      return part.replace(/\*{2,}/g, "");
    });
}

/** Collapsed height for long descriptions; anything taller gets a "Read more" toggle. */
const COLLAPSED_HEIGHT_PX = 224;

export function GroupAbout({ about }: { about: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [isLong, setIsLong] = useState(false);
  const blocks = parseAbout(about);

  useEffect(() => {
    const el = contentRef.current;
    if (el) setIsLong(el.scrollHeight > COLLAPSED_HEIGHT_PX + 24);
  }, []);

  if (blocks.length === 0) return null;
  const collapsed = isLong && !expanded;

  return (
    <div>
      <div
        ref={contentRef}
        id="ig-about"
        style={collapsed ? { maxHeight: COLLAPSED_HEIGHT_PX } : undefined}
        className={cn(
          "space-y-3 overflow-hidden text-mulearn-gray-600 [&_strong]:font-semibold [&_strong]:text-mulearn-blackish",
          collapsed && "mask-b-from-40%",
        )}
      >
        {blocks.map((block, index) => {
          // Index keys are safe: the blocks are parsed once from static text and never reordered.
          const key = index;
          if (block.type === "heading") {
            return (
              <p
                key={key}
                className={cn(
                  "pt-2 font-bold text-mulearn-blackish first:pt-0",
                  block.level === 3 ? "text-base" : "text-lg",
                )}
              >
                {renderInline(block.text)}
              </p>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={key} className="list-disc space-y-1 pl-5 marker:text-mulearn">
                {block.items.map((item, itemIndex) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static parsed text, never reordered
                  <li key={itemIndex}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          }
          return <p key={key}>{renderInline(block.text)}</p>;
        })}
      </div>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls="ig-about"
          className="mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-mulearn px-4 py-1.5 text-sm font-semibold text-mulearn transition-colors hover:bg-mulearn hover:text-mulearn-whitish"
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown
            className={cn("size-4 transition-transform", expanded && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}
