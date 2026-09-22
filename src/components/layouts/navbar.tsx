"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRedirectToApp } from "@/lib/utils";
import type { SubItem } from "@/shared";
import { navItems } from "@/shared";
import { MuImage } from "./mu-image";

type NavItem = (typeof navItems)[number];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(null);
  const redirect = useRedirectToApp();

  return (
    <div className="relative z-1000 w-full bg-mulearn-whitish p-2">
      {/* Desktop */}
      <nav className="hidden h-20 w-full items-center justify-between px-12 xl:px-12 lg:flex lg:px-8 md:px-5">
        <Link href="/" className="flex shrink-0 items-center">
          <MuImage
            src="/assets/logo.webp"
            alt="Mulearn Brand"
            width={170}
            height={170}
            priority
            className="h-auto"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-8 space-x-0 xl:gap-8 lg:gap-6 md:gap-4">
            {navItems.map((item) => renderMenuItem(item))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="px-8 py-2 text-lg font-semibold" onClick={() => redirect("/")}>
          Get Started
        </Button>
      </nav>

      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex shrink-0 items-center">
            <MuImage
              src="/assets/logo.webp"
              alt="Mulearn Brand"
              width={120}
              height={40}
              priority
              className="h-auto w-auto max-w-[120px]"
            />
          </Link>
          <Sheet
            open={open}
            onOpenChange={(next) => {
              setOpen(next);
              if (!next) setActiveMobileSubmenu(null);
            }}
          >
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="z-2001 flex h-8 w-8 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-mulearn-blackish"
              >
                <Menu size={30} />
              </button>
            </SheetTrigger>
            <SheetContent className="flex h-full flex-col p-8">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <ul className="mb-8 mt-16 flex-1 list-none overflow-y-auto p-0">
                {activeMobileSubmenu === null ? (
                  navItems.map((item, index) => (
                    <li key={item.label} className="mb-4 border-b border-mulearn-greyish">
                      {item.submenu ? (
                        <button
                          type="button"
                          className="w-full cursor-pointer py-4 text-left text-[1.1rem] font-medium text-mulearn-gray-600 transition-all duration-300 hover:rounded-lg hover:bg-mulearn-whitish hover:pl-4 hover:text-mulearn-trusty-blue"
                          onClick={() => setActiveMobileSubmenu(index)}
                        >
                          {item.label} <span className="float-right">{">"}</span>
                        </button>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={item.href ?? "#"}
                            className="block w-full py-4 text-left text-[1.1rem] font-medium text-mulearn-gray-600 transition-all duration-300 hover:rounded-lg hover:bg-mulearn-whitish hover:pl-4 hover:text-mulearn-trusty-blue"
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      )}
                    </li>
                  ))
                ) : (
                  <>
                    <li>
                      <button
                        type="button"
                        className="mb-4 w-full cursor-pointer py-2 text-left font-semibold text-mulearn-trusty-blue"
                        onClick={() => setActiveMobileSubmenu(null)}
                      >
                        {"< Back"}
                      </button>
                    </li>
                    {Object.entries(navItems[activeMobileSubmenu].submenu ?? {}).map(
                      ([category, items]) => (
                        <div key={category} className="mb-4">
                          <div className="my-2 text-sm font-semibold text-mulearn-gray-600">
                            {category}
                          </div>
                          <ul className="list-none pl-4">
                            {(items as SubItem[]).map((subItem) => (
                              <li key={subItem.label}>
                                <SheetClose asChild>
                                  <Link
                                    href={subItem.href}
                                    prefetch
                                    className="block w-full py-2 text-left text-mulearn-gray-600 transition-all duration-300 hover:pl-2 hover:text-mulearn-duke-purple"
                                  >
                                    {subItem.label}
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ),
                    )}
                  </>
                )}
              </ul>

              <SheetFooter className="mt-4 shrink-0">
                <SheetClose asChild>
                  <Button className="w-full p-4" onClick={() => redirect("/")}>
                    Get Started
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

const renderMenuItem = (item: NavItem) => {
  if (item.submenu) {
    return (
      <NavigationMenuItem key={item.label}>
        <NavigationMenuTrigger className={navTriggerClass}>{item.label}</NavigationMenuTrigger>
        <NavigationMenuContent className="z-1000 overflow-hidden rounded-xl border border-mulearn-greyish bg-mulearn-whitish shadow-[0_10px_40px_rgba(0,0,0,0.15)] lg:min-w-[240px]">
          <div className={`grid gap-8 p-6 ${getGridClass(item)}`}>
            {Object.entries(item.submenu).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-3">
                <h4 className="m-0 border-b border-mulearn-greyish pb-2 text-xs font-bold uppercase tracking-wider text-mulearn-gray-600">
                  {category}
                </h4>
                <ul className="m-0 flex list-none flex-col gap-0.5 p-0 lg:gap-0">
                  {(items as SubItem[]).map((subItem) => (
                    <NavigationMenuLink asChild key={subItem.label}>
                      <Link
                        href={subItem.href}
                        prefetch
                        className="relative block cursor-pointer rounded-lg text-mulearn-gray-600 text-[0.7rem] font-bold leading-snug transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-mulearn-trusty-blue after:transition-all after:duration-500 hover:bg-mulearn-trusty-blue/10 hover:text-mulearn-trusty-blue hover:after:w-full lg:px-2 lg:py-1 lg:text-[0.8rem]"
                      >
                        {subItem.label}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.label}>
      <NavigationMenuLink asChild>
        <Link href={item.href ?? "#"} className={navTriggerClass}>
          {item.label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const navTriggerClass =
  "relative cursor-pointer py-2 text-left text-base font-bold text-mulearn-gray-600 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-mulearn-trusty-blue after:transition-all after:duration-500 hover:-translate-y-px hover:text-mulearn-trusty-blue hover:after:w-full data-[state=open]:text-mulearn-trusty-blue";

const getGridClass = (item: NavItem) => {
  if (!item.submenu) return "grid-cols-1";
  if (item.label === "Be A Part of Us" || item.label === "Learning") {
    return "max-w-[600px] [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]";
  }
  const count = Object.keys(item.submenu).length;
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-2 min-w-[400px]";
  return "grid-cols-3 min-w-[600px]";
};
