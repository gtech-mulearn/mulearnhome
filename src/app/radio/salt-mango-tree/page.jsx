"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navItems, footer, socials, contactInfo } from "@/data/data";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { saltMangoTree } from "../../../data/data";
export default function page() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEpisodes = saltMangoTree.upcomingEpisodes;
  const previousEpisodes = saltMangoTree.previousEpisodes;

  const allTags = [
    "All",
    "Culture",
    "Career Talks",
    "Tech from Kerala",
    "Life Stories",
    "Innovation",
    "Entertainment",
    "Environment",
  ];

  const currentEpisodes =
    activeTab === "upcoming" ? upcomingEpisodes : previousEpisodes;
  const filteredEpisodes =
    activeFilter === "All"
      ? currentEpisodes
      : currentEpisodes.filter((episode) =>
          episode.tags.includes(activeFilter)
        );
  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#FFF8F0",
        fontFamily: "var(--font-sans)",
        color: "#004D40",
      }}
    >
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-no-repeat bg-bottom bg-contain"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_zJd_kSQ_nwOvOpYrxqhpGu0OnA1LdQuAVM3zocCLmKGWk2xrwMYyMI2fOxwtRs0ErexCIYZafx9nMB34gIWM-YAYAIsUTBHh5b367j8JnJ5r-egUYCFUQ6VMu5sJOAozHQ5ntQV5a1G6AdOvUczt8Bki3FgGPm4PNi8ZIkA-2t_mErG2vvua3v6wtgZvUsS051exQbZt9ONjv7_Al1S71HGIJwvJUCPGWd23IlTlkTglHY0g0W2ZFhRfSuRAfXGdHIf0A4KsBxnL')",
          }}
        />
      </div>
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgba(255, 122, 89, 0.2)",
          animation: "subtle-wave 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgba(0, 77, 64, 0.2)",
          animation: "subtle-wave 12s ease-in-out infinite",
          animationDelay: "-6s",
        }}
      />

      {/* Decorative Leaves */}
      <div className="absolute top-20 left-10 opacity-20 z-5">
        <div
          className="leaf-1"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "0 40px",
            backgroundColor: "#1f801f",
            "--leaf-rotation": "15deg",
            animation: "leaf-float 8s ease-in-out infinite",
          }}
        />
      </div>

      <div className="absolute top-32 right-16 opacity-25 z-5">
        <div
          className="leaf-2"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "0 30px",
            backgroundColor: "#259925",
            "--leaf-rotation": "-25deg",
            animation: "leaf-float 10s ease-in-out infinite 2s",
          }}
        />
      </div>

      <div className="absolute top-48 left-20 opacity-15 z-5">
        <div
          className="leaf-3"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "0 50px",
            backgroundColor: "#2bb32b",
            "--leaf-rotation": "45deg",
            animation: "leaf-float 12s ease-in-out infinite 4s",
          }}
        />
      </div>

      <div className="absolute bottom-32 right-24 opacity-20 z-5">
        <div
          className="leaf-4"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "0 35px",
            backgroundColor: "#32cd32",
            "--leaf-rotation": "-15deg",
            animation: "leaf-float 9s ease-in-out infinite 1s",
          }}
        />
      </div>

      <div className="absolute bottom-48 left-16 opacity-18 z-5">
        <div
          className="leaf-1"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "0 25px",
            backgroundColor: "#1f801f",
            "--leaf-rotation": "60deg",
            animation: "leaf-float 11s ease-in-out infinite 3s",
          }}
        />
      </div>

      <div className="absolute top-64 right-32 opacity-22 z-5">
        <div
          className="leaf-2"
          style={{
            width: "65px",
            height: "65px",
            borderRadius: "0 45px",
            backgroundColor: "#259925",
            "--leaf-rotation": "-40deg",
            animation: "leaf-float 7s ease-in-out infinite 5s",
          }}
        />
      </div>

      <div className="absolute bottom-20 right-12 opacity-16 z-5">
        <div
          className="leaf-3"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "0 30px",
            backgroundColor: "#2bb32b",
            "--leaf-rotation": "30deg",
            animation: "leaf-float 13s ease-in-out infinite 2.5s",
          }}
        />
      </div>

      <div className="absolute top-80 left-32 opacity-19 z-5">
        <div
          className="leaf-4"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "0 20px",
            backgroundColor: "#32cd32",
            "--leaf-rotation": "-60deg",
            animation: "leaf-float 8.5s ease-in-out infinite 4.5s",
          }}
        />
      </div>

      {/* Additional smaller leaves for more natural look */}
      <div className="absolute top-40 right-8 opacity-12 z-5">
        <div
          className="leaf-1"
          style={{
            width: "25px",
            height: "25px",
            borderRadius: "0 15px",
            backgroundColor: "#1f801f",
            "--leaf-rotation": "75deg",
            animation: "leaf-float 6s ease-in-out infinite 1.5s",
          }}
        />
      </div>

      <div className="absolute bottom-60 left-8 opacity-14 z-5">
        <div
          className="leaf-2"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "0 18px",
            backgroundColor: "#259925",
            "--leaf-rotation": "-35deg",
            animation: "leaf-float 9.5s ease-in-out infinite 3.5s",
          }}
        />
      </div>

      <div className="absolute top-96 right-40 opacity-17 z-5">
        <div
          className="leaf-3"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "0 22px",
            backgroundColor: "#2bb32b",
            "--leaf-rotation": "50deg",
            animation: "leaf-float 10.5s ease-in-out infinite 0.5s",
          }}
        />
      </div>

      <div className="relative z-10 flex h-full grow flex-col">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* TopNavBar */}
          <header
            className="flex items-center justify-between whitespace-nowrap border-b py-5"
            style={{ borderColor: "rgba(255, 122, 89, 0.2)" }}
          >
            <Link
              href="/"
              className="flex items-center gap-3"
              style={{ color: "#004D40" }}
            >
              <h2
                className="text-xl font-bold leading-tight"
                style={{ color: "#004D40" }}
              >
                µLearn
              </h2>
            </Link>
            <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm font-medium leading-normal transition-colors hover:opacity-70"
                      style={{ color: "#004D40" }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className="text-sm font-medium leading-normal cursor-pointer"
                      style={{ color: "#004D40" }}
                    >
                      {item.label}
                    </span>
                  )}

                  {/* Dropdown for items with submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        {Object.entries(item.submenu).map(
                          ([category, items]) => (
                            <div key={category} className="mb-4 last:mb-0">
                              <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-2 pb-1 border-b border-gray-200">
                                {category}
                              </h4>
                              <ul className="space-y-1">
                                {items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link
                                      href={subItem.href}
                                      className="text-xs text-gray-600 hover:text-orange-500 transition-colors block py-1"
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </header>

          <main className="flex-1">
            {/* HeroSection */}
            <section className="py-24 sm:py-32 md:py-40">
              <div className="flex flex-col items-center justify-center gap-8 text-center">
                <div className="flex flex-col gap-4">
                  <h1
                    className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl"
                    style={{ color: "#004D40" }}
                  >
                    {saltMangoTree.title}{" "}
                    <span style={{ fontFamily: "Manjari, sans-serif" }}>
                      | സാൾട്ട് മാങ്ങോ ട്രീ
                    </span>
                  </h1>
                  <p
                    className="mx-auto max-w-2xl text-base md:text-lg"
                    style={{ color: "#6b4f3b" }}
                  >
                    {saltMangoTree.description}
                  </p>
                </div>
                <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center">
                  <button
                    className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 text-base font-bold leading-normal tracking-wide transition-transform hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: "#FF7A59",
                      color: "#FFF8F0",
                    }}
                  >
                    <span className="truncate">Listen Now</span>
                  </button>
                  <button
                    className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-transparent ring-2 transition-all hover:opacity-70 active:scale-95"
                    style={{
                      color: "#FF7A59",
                      borderColor: "#FF7A59",
                    }}
                  >
                    <span className="truncate font-bold tracking-wide">
                      Set Reminder
                    </span>
                  </button>
                </div>
              </div>
            </section>

            {/* Episodes Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
              {/* Leaves in Episode Section */}
              <div className="absolute top-10 left-4 opacity-15 z-5">
                <div
                  className="leaf-1"
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "0 20px",
                    backgroundColor: "#1f801f",
                    "--leaf-rotation": "20deg",
                    animation: "leaf-float 9s ease-in-out infinite 2s",
                  }}
                />
              </div>

              <div className="absolute top-20 right-8 opacity-18 z-5">
                <div
                  className="leaf-2"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "0 25px",
                    backgroundColor: "#259925",
                    "--leaf-rotation": "-30deg",
                    animation: "leaf-float 11s ease-in-out infinite 4s",
                  }}
                />
              </div>

              <div className="absolute top-32 left-8 opacity-12 z-5">
                <div
                  className="leaf-3"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "0 16px",
                    backgroundColor: "#2bb32b",
                    "--leaf-rotation": "55deg",
                    animation: "leaf-float 7s ease-in-out infinite 1s",
                  }}
                />
              </div>

              <div className="absolute bottom-20 right-6 opacity-16 z-5">
                <div
                  className="leaf-4"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "0 22px",
                    backgroundColor: "#32cd32",
                    "--leaf-rotation": "-45deg",
                    animation: "leaf-float 10s ease-in-out infinite 3s",
                  }}
                />
              </div>

              <div className="absolute bottom-32 left-6 opacity-14 z-5">
                <div
                  className="leaf-1"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "0 18px",
                    backgroundColor: "#1f801f",
                    "--leaf-rotation": "70deg",
                    animation: "leaf-float 8s ease-in-out infinite 5s",
                  }}
                />
              </div>

              <div className="absolute top-48 right-12 opacity-13 z-5">
                <div
                  className="leaf-2"
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "0 14px",
                    backgroundColor: "#259925",
                    "--leaf-rotation": "-20deg",
                    animation: "leaf-float 12s ease-in-out infinite 1.5s",
                  }}
                />
              </div>

              {/* CSS Mango */}
              <div className="absolute top-16 right-20 opacity-25 z-5">
                <div
                  className="mango"
                  style={{
                    width: "80px",
                    height: "100px",
                    position: "relative",
                    animation: "mango-sway 6s ease-in-out infinite",
                  }}
                >
                  {/* Mango Body */}
                  <div
                    style={{
                      width: "100%",
                      height: "85%",
                      backgroundColor: "#FFA500",
                      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                      position: "relative",
                      boxShadow: "inset -10px -5px 20px rgba(255, 140, 0, 0.3)",
                    }}
                  >
                    {/* Mango Highlight */}
                    <div
                      style={{
                        position: "absolute",
                        top: "15%",
                        left: "20%",
                        width: "25%",
                        height: "30%",
                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                        borderRadius: "50%",
                        filter: "blur(2px)",
                      }}
                    />

                    {/* Mango Texture Lines */}
                    <div
                      style={{
                        position: "absolute",
                        top: "30%",
                        left: "15%",
                        width: "70%",
                        height: "2px",
                        backgroundColor: "rgba(255, 140, 0, 0.3)",
                        borderRadius: "1px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "45%",
                        left: "20%",
                        width: "60%",
                        height: "2px",
                        backgroundColor: "rgba(255, 140, 0, 0.3)",
                        borderRadius: "1px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "60%",
                        left: "25%",
                        width: "50%",
                        height: "2px",
                        backgroundColor: "rgba(255, 140, 0, 0.3)",
                        borderRadius: "1px",
                      }}
                    />
                  </div>

                  {/* Mango Stem */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-8%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "8px",
                      height: "15px",
                      backgroundColor: "#8B4513",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />

                  {/* Mango Leaf */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-5%",
                      left: "60%",
                      width: "20px",
                      height: "12px",
                      backgroundColor: "#228B22",
                      borderRadius: "0 80% 0 80%",
                      transform: "rotate(15deg)",
                      animation: "leaf-float 4s ease-in-out infinite 2s",
                    }}
                  />
                </div>
              </div>

              {/* Second Mango */}
              <div className="absolute bottom-24 left-16 opacity-20 z-5">
                <div
                  className="mango"
                  style={{
                    width: "65px",
                    height: "80px",
                    position: "relative",
                    animation: "mango-sway 8s ease-in-out infinite 3s",
                  }}
                >
                  {/* Mango Body */}
                  <div
                    style={{
                      width: "100%",
                      height: "85%",
                      backgroundColor: "#FF8C00",
                      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                      position: "relative",
                      boxShadow: "inset -8px -4px 16px rgba(255, 140, 0, 0.4)",
                    }}
                  >
                    {/* Mango Highlight */}
                    <div
                      style={{
                        position: "absolute",
                        top: "18%",
                        left: "25%",
                        width: "20%",
                        height: "25%",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        borderRadius: "50%",
                        filter: "blur(1px)",
                      }}
                    />

                    {/* Mango Texture Lines */}
                    <div
                      style={{
                        position: "absolute",
                        top: "35%",
                        left: "20%",
                        width: "60%",
                        height: "1.5px",
                        backgroundColor: "rgba(255, 140, 0, 0.4)",
                        borderRadius: "1px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "25%",
                        width: "50%",
                        height: "1.5px",
                        backgroundColor: "rgba(255, 140, 0, 0.4)",
                        borderRadius: "1px",
                      }}
                    />
                  </div>

                  {/* Mango Stem */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-6%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "6px",
                      height: "12px",
                      backgroundColor: "#8B4513",
                      borderRadius: "3px 3px 0 0",
                    }}
                  />

                  {/* Mango Leaf */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-3%",
                      left: "65%",
                      width: "16px",
                      height: "10px",
                      backgroundColor: "#228B22",
                      borderRadius: "0 80% 0 80%",
                      transform: "rotate(20deg)",
                      animation: "leaf-float 5s ease-in-out infinite 1s",
                    }}
                  />
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#004D40" }}
                  >
                    Salt Mango Tree Episodes
                  </h2>
                  <p
                    className="text-lg max-w-2xl mx-auto mb-8"
                    style={{ color: "#6b4f3b" }}
                  >
                    Discover stories, insights, and conversations that celebrate
                    Kerala's rich culture and innovation.
                  </p>

                  {/* Tab Navigation */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-gray-100 rounded-full p-1">
                      <button
                        onClick={() => setActiveTab("upcoming")}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeTab === "upcoming"
                            ? "text-white shadow-lg"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                        style={{
                          backgroundColor:
                            activeTab === "upcoming"
                              ? "#FF7A59"
                              : "transparent",
                        }}
                      >
                        Upcoming Episodes
                      </button>
                      <button
                        onClick={() => setActiveTab("previous")}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeTab === "previous"
                            ? "text-white shadow-lg"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                        style={{
                          backgroundColor:
                            activeTab === "previous"
                              ? "#FF7A59"
                              : "transparent",
                        }}
                      >
                        Previous Episodes
                      </button>
                    </div>
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveFilter(tag)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeFilter === tag
                          ? "text-white shadow-lg transform scale-105"
                          : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                      }`}
                      style={{
                        backgroundColor:
                          activeFilter === tag ? "#FF7A59" : "transparent",
                        border:
                          activeFilter === tag ? "none" : "1px solid #e5e7eb",
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Episodes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEpisodes.map((episode) => (
                    <div
                      key={episode.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {/* Episode Image */}
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={episode.image}
                          alt={episode.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Air Date Badge */}
                        <div className="absolute top-3 right-3">
                          <span
                            className="px-3 py-1 text-xs font-medium rounded-full"
                            style={{
                              backgroundColor: episode.isUpcoming
                                ? "rgba(255, 193, 7, 0.9)"
                                : "rgba(0, 77, 64, 0.9)",
                              color: episode.isUpcoming ? "#000" : "#FFF8F0",
                            }}
                          >
                            {episode.isUpcoming ? "Upcoming" : "Aired"}
                          </span>
                        </div>
                        {/* Duration Badge */}
                        <div className="absolute bottom-3 left-3">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-black bg-opacity-70 text-white">
                            {episode.duration}
                          </span>
                        </div>
                      </div>

                      {/* Episode Content */}
                      <div className="p-6">
                        <h3
                          className="text-lg font-bold mb-2 line-clamp-2"
                          style={{ color: "#004D40" }}
                        >
                          {episode.title}
                        </h3>

                        {/* Guest Information */}
                        <div className="mb-3">
                          <p
                            className="text-sm font-semibold"
                            style={{ color: "#FF7A59" }}
                          >
                            {episode.guest}
                          </p>
                          <p className="text-xs" style={{ color: "#6b4f3b" }}>
                            {episode.guestTitle}
                          </p>
                        </div>

                        {/* Air Date */}
                        <p
                          className="text-xs mb-3"
                          style={{ color: "#6b4f3b" }}
                        >
                          {episode.isUpcoming ? "Airs on" : "Aired on"}{" "}
                          {new Date(episode.airDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>

                        <p
                          className="text-sm mb-4 leading-relaxed"
                          style={{ color: "#6b4f3b" }}
                        >
                          {episode.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {episode.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full"
                              style={{
                                backgroundColor: "rgba(255, 122, 89, 0.1)",
                                color: "#FF7A59",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          {episode.isUpcoming ? (
                            <>
                              <button
                                className="flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                style={{
                                  backgroundColor: "#FF7A59",
                                  color: "#FFF8F0",
                                }}
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Set Reminder
                              </button>
                              <button
                                className="px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"
                                style={{
                                  backgroundColor: "transparent",
                                  color: "#FF7A59",
                                  border: "2px solid #FF7A59",
                                }}
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </>
                          ) : (
                            <button
                              className="w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                              style={{
                                backgroundColor: "#FF7A59",
                                color: "#FFF8F0",
                              }}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Listen Now
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                  <button
                    className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "transparent",
                      color: "#FF7A59",
                      border: "2px solid #FF7A59",
                    }}
                  >
                    Load More Episodes
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Footer */}
        <footer
          className="mt-auto border-t py-12"
          style={{
            borderColor: "rgba(255, 122, 89, 0.2)",
            backgroundColor: "#FFF8F0",
          }}
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
              {/* Logo and Description */}
              <div className="lg:col-span-2">
                <div className="flex flex-col md:items-start items-center justify-center space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center">
                       <Image src={"/assets/logo-template/logo-blue.svg"} alt={saltMangoTree.title} width={84} height={84} />
                    </div>
                  </div>
                  <p
                    className="text-sm text-justify leading-relaxed max-w-md"
                    style={{ color: "#6b4f3b" }}
                  >
                    Empowering learners through community-driven education and
                    innovative learning pathways. Join us in shaping the future
                    of education.
                  </p>
                  <div className="flex flex-col space-y-3">
                    <h3
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "#004D40" }}
                    >
                      Connect With Us
                    </h3>
                    <div className="flex space-x-3">
                      {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                          <Link
                            key={social.label}
                            href={social.url}
                            aria-label={social.label}
                            className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-105"
                            style={{ color: "#6b4f3b" }}
                          >
                            <Icon />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              {footer.map((section) => (
                <div
                  key={section.title}
                  className={`space-y-4 text-center lg:text-left ${
                    ["Quick Links", "Legal", "Be Part of Us"].includes(
                      section.title
                    )
                      ? "mt-8 lg:mt-12"
                      : ""
                  }`}
                >
                  <h3
                    className="text-sm font-semibold uppercase"
                    style={{ color: "#004D40" }}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.url}
                          className="text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                          style={{ color: "#6b4f3b" }}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              className="border-t border-gray-200 my-8"
              style={{ borderColor: "rgba(255, 122, 89, 0.2)" }}
            ></div>
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-center lg:text-left">
                <div
                  className="text-sm font-medium"
                  style={{ color: "#6b4f3b" }}
                >
                  {contactInfo.copyright}
                </div>
                <div className="text-xs mt-1" style={{ color: "#6b4f3b" }}>
                  {contactInfo.address}
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-sm">
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-2 transition-colors duration-300 group"
                  style={{ color: "#6b4f3b" }}
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: "#FF7A59" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{contactInfo.email}</span>
                </Link>

                <Link
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center space-x-2 transition-colors duration-300 group"
                  style={{ color: "#6b4f3b" }}
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: "#FF7A59" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>{contactInfo.phone}</span>
                </Link>

                <Link
                  href={`https://${contactInfo.website}`}
                  className="flex items-center space-x-2 transition-colors duration-300 group"
                  style={{ color: "#6b4f3b" }}
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: "#FF7A59" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                  <span>{contactInfo.website}</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
