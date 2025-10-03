"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(
    null
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 1024);
    handleResize();

    window.addEventListener("resize", handleResize);
    setRefreshToken(localStorage.getItem("refreshToken"));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isMobileView && isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isMobileView]);

  const handleAuthClick = () => {
    window.location.href = refreshToken ? "/dashboard/home" : "/login";
  };

  const handleMouseEnter = (index: number, hasSubmenu: boolean) => {
    if (!isMobileView && hasSubmenu) setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    if (!isMobileView) setActiveSubmenu(null);
  };

  return (
    <div className="relative z-[1000] w-full bg-white p-0">
      {!isMobileView && (
        <motion.div
          className="flex justify-between items-center h-20 w-full px-12 box-border xl:px-12 lg:px-8 md:px-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Mulearn Brand"
              width={160}
              height={160}
            />
          </Link>

          <ul className="flex items-center gap-8 list-none m-0 p-0 xl:gap-8 lg:gap-6 md:gap-4">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="relative text-gray-600 font-bold text-[0.95rem] cursor-pointer py-2 text-left transition-all duration-300 hover:text-blue-600 hover:-translate-y-px after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-500 hover:after:w-full lg:text-[0.9rem]"
                onMouseEnter={() => handleMouseEnter(index, !!item.submenu)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.href?.startsWith("http") ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : item.submenu ? (
                  <span>{item.label}</span>
                ) : (
                  <Link href={item.href!}>{item.label}</Link>
                )}

                <AnimatePresence>
                  {activeSubmenu === index && item.submenu && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-200 z-[1000] overflow-hidden mt-2 lg:min-w-[240px]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-6 grid gap-8 max-w-[600px] [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
                        {Object.entries(item.submenu).map(
                          ([category, items]) => (
                            <div
                              key={category}
                              className="submenu-section flex flex-col gap-3"
                            >
                              <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider m-0 pb-2 border-b border-gray-200">
                                {category}
                              </h4>
                              <ul className="list-none m-0 p-0 flex flex-col gap-1">
                                {items.map((subItem: any, subIndex: string) => (
                                  <li
                                    key={subIndex}
                                    className="text-gray-600 text-[0.7rem] font-medium cursor-pointer rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 
                                    lg:text-[0.8rem] lg:py-2.5 lg:px-3
                                    relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-500 
                                    hover:after:w-full"
                                  >
                                    {subItem.href?.startsWith("http") ? (
                                      <a
                                        href={subItem.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {subItem.label}
                                      </a>
                                    ) : (
                                      <Link href={subItem.href}>
                                        {subItem.label}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="bg-[var(--Primary)] text-white border-none py-3 px-6 rounded-[50px] font-semibold text-[0.9rem] cursor-pointer shadow-[0_4px_12px_rgba(49,130,206,0.3)] hover:bg-[var(--PrimaryLight)] active:bg-[var(--PrimaryDark)] lg:py-2.5 lg:px-5 lg:text-[0.85rem]"
            onClick={handleAuthClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {refreshToken ? "Dashboard" : "Login"}
          </motion.button>
        </motion.div>
      )}
      {isMobileView && (
        <>
          <div className="flex justify-between items-center p-4 relative z-[1000]">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Mulearn Brand"
                width={200}
                height={200}
              />
            </Link>

            <motion.button
              className="cursor-pointer flex items-center justify-center w-8 h-8 z-[2001]"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={30} />
            </motion.button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/50 z-[1001]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                />

                <motion.div
                  className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-gradient-to-br from-white to-slate-50 shadow-[-5px_0_25px_rgba(0,0,0,0.15)] z-[1002] flex flex-col p-8 overflow-y-auto"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.button
                    className="absolute top-6 right-4 cursor-pointer text-gray-600 w-10 h-10 flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={30} />
                  </motion.button>

                  <ul className="list-none mt-16 mb-8 p-0 flex-1">
                    {activeMobileSubmenu === null ? (
                      navItems.map((item, index) => (
                        <li
                          key={index}
                          className="mb-4 py-4 border-b border-gray-200 text-gray-600 font-medium text-[1.1rem] cursor-pointer transition-all duration-300 hover:text-blue-600 hover:pl-4 hover:bg-slate-50 hover:rounded-lg"
                          onClick={() =>
                            item.submenu
                              ? setActiveMobileSubmenu(index)
                              : window.location.assign(item.href!)
                          }
                        >
                          {item.label}{" "}
                          {item.submenu && (
                            <span className="float-right">{">"}</span>
                          )}
                        </li>
                      ))
                    ) : (
                      <>
                        <li
                          className="font-semibold mb-4 py-2 cursor-pointer text-blue-600"
                          onClick={() => setActiveMobileSubmenu(null)}
                        >
                          {"< Back"}
                        </li>
                        {Object.entries(
                          navItems[activeMobileSubmenu].submenu!
                        ).map(([category, items]) => (
                          <div key={category} className="mb-4">
                            <div className="font-semibold text-sm my-2 text-gray-600">
                              {category}
                            </div>
                            <ul className="pl-4 list-none">
                              {items.map((subItem: any, subIndex: string) => (
                                <li
                                  key={subIndex}
                                  className="py-2 text-gray-600 cursor-pointer hover:text-blue-600 hover:pl-2"
                                  onClick={() =>
                                    window.location.assign(subItem.href!)
                                  }
                                >
                                  {subItem.label}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </>
                    )}
                  </ul>

                  <motion.button
                    className="w-full p-4 mb-20 bg-[var(--Primary)] text-white border-none rounded-[50px] font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(49,130,206,0.3)] hover:bg-[var(--PrimaryLight)] active:bg-[var(--PrimaryDark)]"
                    onClick={handleAuthClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {refreshToken ? "Dashboard" : "Login"}
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default Navbar;
