"use client";
import React, { useState, useEffect } from "react";
import { saltMangoTree } from "../../../data/data";
export default function page() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [episodesToShow, setEpisodesToShow] = useState(6);

  const upcomingEpisodes = saltMangoTree.upcomingEpisodes;
  const previousEpisodes = saltMangoTree.previousEpisodes;

  const allTags = saltMangoTree.tags;

  const currentEpisodes =
    activeTab === "upcoming" ? upcomingEpisodes : previousEpisodes;
  const filteredEpisodes =
    activeFilter === "All"
      ? currentEpisodes
      : currentEpisodes.filter((episode) =>
          episode.tags.includes(activeFilter)
        );

  // Reset episodes to show when filter or tab changes
  useEffect(() => {
    setEpisodesToShow(6);
  }, [activeFilter, activeTab]);

  // Slice episodes based on episodesToShow
  const displayedEpisodes = filteredEpisodes.slice(0, episodesToShow);

  // Check if there are more episodes to load
  const supportsMore = filteredEpisodes.length > episodesToShow;

  // Load more episodes handler
  const handleLoadMore = () => {
    setEpisodesToShow((prev) => prev + 6);
  };

  const createGoogleCalendarUrl = (episode) => {
    const dateStr = episode.airDate.replace(/-/g, "");
    const startTime = `${dateStr}T140000Z`;
    const endTime = `${dateStr}T150000Z`;

    const params = new URLSearchParams({
      text: episode.title,
      dates: `${startTime}/${endTime}`,
      details: `Guest: ${episode.guest} - ${episode.guestTitle}\n\n${episode.description}`,
      location: "Salt Mango Tree Podcast",
    });

    return `https://calendar.google.com/calendar/u/0/r/eventedit?${params.toString()}`;
  };

  const handleSetReminder = (episode) => {
    const url = createGoogleCalendarUrl(episode);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out both;
        }
      `,
        }}
      />
      <div
        className="relative flex min-h-screen w-full flex-col overflow-x-hidden"
        style={{
          backgroundColor: "#FFFFFF",
          fontFamily: "var(--font-sans)",
          color: "#C4C4C4",
        }}
      >
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

        {/* smaller leaves */}
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
            <main className="flex-1">
              {/* HeroSection */}
              <section className="py-24 sm:py-32 md:pt-40 md:pb-28">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                  <div className="flex flex-col gap-4">
                    <h1
                      className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl"
                      style={{
                        background:
                          "linear-gradient(133.8deg, #2E85FE -8.97%, #AF2EE6 91.41%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {saltMangoTree.title}{" "}
                      <span style={{ fontFamily: "Manjari, sans-serif" }}>
                        | സാൾട്ട് മാങ്ങോ ട്രീ
                      </span>
                    </h1>
                    <p
                      className="mx-auto max-w-2xl text-base md:text-lg"
                      style={{ color: "#333333" }}
                    >
                      {saltMangoTree.description}
                    </p>
                    <p
                      className="mx-auto max-w-3xl text-base md:text-lg"
                      style={{ color: "#333333" }}
                    >
                      <em>"{saltMangoTree.tagLine}"</em>
                    </p>
                  </div>
                  <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center">
                    <button
                      className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 text-base font-bold leading-normal tracking-wide transition-transform hover:scale-105 active:scale-95"
                      style={{
                        backgroundColor: "#2E85FE",
                        color: "#FEFEFE",
                      }}
                      onClick={() => {
                        window.open(saltMangoTree.latestAudioUrl, "_blank");
                      }}
                    >
                      <span className="truncate">Listen Now</span>
                    </button>
                    <button
                      onClick={() => {
                        if (upcomingEpisodes.length > 0) {
                          handleSetReminder(
                            upcomingEpisodes[upcomingEpisodes.length - 1]
                          );
                        }
                      }}
                      disabled={upcomingEpisodes.length === 0}
                      className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-transparent ring-2 transition-all hover:opacity-70 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        color: "#1A1A1A",
                        borderColor: "#2E85FE",
                      }}
                    >
                      <span className="truncate font-bold tracking-wide">
                        Set Reminder
                      </span>
                    </button>
                  </div>
                </div>
              </section>

              {/* What is Salt Mango Tree - Intro */}
              <section className="py-12 px-4 sm:px-6 lg:px-8">
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                  .gradient-title {
                    background: linear-gradient(90deg, #2E85FE, #AF2EE6);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                  }
                  .intro-card {
                    background: radial-gradient(1200px 400px at 50% -100%, rgba(46, 133, 254, 0.15), transparent 50%),
                                radial-gradient(900px 300px at 110% 20%, rgba(175, 46, 230, 0.08), transparent 40%),
                                radial-gradient(900px 300px at -10% 80%, rgba(46, 133, 254, 0.08), transparent 40%),
                                #FEFEFE;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
                    border: 1px solid rgba(26, 26, 26, 0.06);
                    position: relative;
                    overflow: hidden;
                  }
                  .divider-dot:before, .divider-dot:after {
                    content: "";
                    display: inline-block;
                    width: 6px; height: 6px; border-radius: 9999px;
                    background: #2E85FE; margin: 0 10px;
                  }
                  @keyframes float-soft { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
                  /* Minimal Kathakali mask motif - geometric, decorative only */
                  .kathakali {
                    position: absolute; inset: auto auto -30px -30px; width: 140px; height: 140px; opacity: 0.08;
                    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.12));
                    animation: float-soft 6s ease-in-out infinite;
                  }
                  .k-circle { position: absolute; border-radius: 9999px; }
                  .k-base { width: 100%; height: 100%; background: #16a34a; }
                  .k-face { width: 70%; height: 70%; background: #fef08a; top: 15%; left: 15%; }
                  .k-red  { width: 85%; height: 85%; border: 6px solid #dc2626; top: 7.5%; left: 7.5%; }
                  .k-mark { width: 18%; height: 18%; background: #dc2626; top: 30%; left: 41%; border-radius: 6px; }
                  .k-eye  { width: 12%; height: 12%; background: #1f2937; top: 44%; border: 3px solid #22c55e; }
                  .k-eye.left  { left: 34%; }
                  .k-eye.right { left: 54%; }
                  .k-chin { width: 70%; height: 24%; background: #22c55e; bottom: 12%; left: 15%; border-radius: 0 0 60px 60px; }
                  /* Mohiniyattam anklet motif */
                  .mohini {
                    position: absolute; inset: -20px -30px auto auto; width: 150px; height: 150px; opacity: 0.08;
                    animation: float-soft 7s ease-in-out infinite 1s;
                  }
                  .ring { position: absolute; border-radius: 9999px; border: 5px solid; }
                  .ring.r1 { width: 120px; height: 120px; border-color: #d97706; }
                  .ring.r2 { width: 90px; height: 90px; border-color: #fde047; top: 15px; left: 15px; }
                  .ring.r3 { width: 60px; height: 60px; border-color: #10b981; top: 30px; left: 30px; }
                `,
                  }}
                />
                <div className="relative">
                  <div className="intro-card mx-auto max-w-4xl rounded-3xl p-8 sm:p-12">
                    {/* Decorative motifs */}
                    <div className="kathakali" aria-hidden>
                      <div className="k-circle k-base" />
                      <div className="k-circle k-red" />
                      <div className="k-circle k-face" />
                      <div className="k-circle k-mark" />
                      <div className="k-circle k-eye left" />
                      <div className="k-circle k-eye right" />
                      <div className="k-circle k-chin" />
                    </div>
                    <div className="mohini" aria-hidden>
                      <div className="ring r1" />
                      <div className="ring r2" />
                      <div className="ring r3" />
                    </div>
                    <div className="text-center space-y-6 relative z-10">
                      <h2
                        className="gradient-title text-2xl md:text-3xl font-bold tracking-tight"
                        style={{ fontFamily: "var(--font-malayalam)" }}
                      >
                        What is Salt Mango Tree?
                      </h2>
                      <div className="divider-dot inline-flex items-center text-xs uppercase tracking-wider text-[#666666]">
                        Kerala • Culture • Community • Stories
                      </div>
                      <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: "#333333" }}
                      >
                        Salt Mango Tree is µLearn’s Malayalam community series —
                        a warm, homegrown space where Kerala’s culture, lived
                        experiences, innovation, and local perspectives come
                        alive. It’s about the stories we carry, the places we
                        come from, and the pride that keeps us rooted while we
                        grow.
                      </p>
                      <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: "#333333" }}
                      >
                        Through friendly, relatable conversations, we celebrate
                        the spirit of community: voices that feel familiar,
                        memories that feel nostalgic, and ideas that feel
                        possible. From everyday wisdom to bold new thinking,
                        each episode connects us — Keralites everywhere —
                        through language, culture, and storytelling.
                      </p>
                    </div>
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
                        boxShadow:
                          "inset -10px -5px 20px rgba(255, 140, 0, 0.3)",
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
                        boxShadow:
                          "inset -8px -4px 16px rgba(255, 140, 0, 0.4)",
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
                      style={{ color: "#1A1A1A" }}
                    >
                      Salt Mango Tree Episodes
                    </h2>
                    <p
                      className="text-lg max-w-2xl mx-auto mb-8"
                      style={{ color: "#333333" }}
                    >
                      Discover stories, insights, and conversations that
                      celebrate Kerala's rich culture and innovation.
                    </p>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8">
                      <div className="bg-gray-100 rounded-full p-1">
                        <button
                          onClick={() => setActiveTab("upcoming")}
                          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeTab === "upcoming"
                              ? "text-black shadow-lg"
                              : "text-gray-600 hover:text-gray-800"
                          }`}
                          style={{
                            backgroundColor:
                              activeTab === "upcoming"
                                ? "#2E85FE"
                                : "transparent",
                            color:
                              activeTab === "upcoming" ? "#FEFEFE" : "#333333",
                          }}
                        >
                          Upcoming Episodes
                        </button>
                        <button
                          onClick={() => setActiveTab("previous")}
                          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeTab === "previous"
                              ? "text-black shadow-lg"
                              : "text-gray-600 hover:text-gray-800"
                          }`}
                          style={{
                            backgroundColor:
                              activeTab === "previous"
                                ? "#2E85FE"
                                : "transparent",
                            color:
                              activeTab === "previous" ? "#FEFEFE" : "#333333",
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
                            ? "text-black shadow-lg transform scale-105"
                            : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                        }`}
                        style={{
                          backgroundColor:
                            activeFilter === tag ? "#2E85FE" : "transparent",
                          border:
                            activeFilter === tag ? "none" : "1px solid #e5e7eb",
                          color: activeFilter === tag ? "#FEFEFE" : "#333333",
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Episodes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedEpisodes.map((episode, index) => (
                      <div
                        key={episode.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col animate-fade-in-up"
                        style={{
                          height: "600px",
                          animationDelay: `${index * 0.08}s`,
                          animationDuration: "1s",
                          animationFillMode: "both",
                          backgroundColor: "#FEFEFE",
                        }}
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
                                  ? "#2E85FE"
                                  : "#1A1A1A",
                                color: "#FEFEFE",
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
                        <div className="p-6 flex flex-col flex-grow">
                          <h3
                            className="text-lg font-bold mb-2 line-clamp-2"
                            style={{ color: "#1A1A1A" }}
                          >
                            {episode.title}
                          </h3>

                          {/* Guest Information */}
                          <div className="mb-3">
                            <p
                              className="text-sm font-semibold"
                              style={{ color: "#1A1A1A" }}
                            >
                              {episode.guest}
                            </p>
                            <p className="text-xs" style={{ color: "#333333" }}>
                              {episode.guestTitle}
                            </p>
                          </div>

                          {/* Air Date */}
                          <p
                            className="text-xs mb-3"
                            style={{ color: "#333333" }}
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
                            className="text-sm mb-4 leading-relaxed line-clamp-3"
                            style={{ color: "#333333" }}
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
                                  backgroundColor: "rgba(46, 133, 254, 0.1)",
                                  color: "#1A1A1A",
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 mt-auto">
                            {episode.isUpcoming ? (
                              <>
                                <button
                                  onClick={() => handleSetReminder(episode)}
                                  className="flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                                  style={{
                                    backgroundColor: "#2E85FE",
                                    color: "#FEFEFE",
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
                                  onClick={() => setSelectedEpisode(episode)}
                                  name="More info Button"
                                  className="px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center cursor-pointer"
                                  style={{
                                    backgroundColor: "transparent",
                                    color: "#1A1A1A",
                                    border: "2px solid #1A1A1A",
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
                                onClick={() => {
                                  window.open(episode.audioUrl, "_blank");
                                }}
                                disabled={!episode.audioUrl}
                                style={{
                                  opacity: episode.audioUrl ? 1 : 0.5,
                                  cursor: episode.audioUrl
                                    ? "pointer"
                                    : "not-allowed",
                                  backgroundColor: "#2E85FE",
                                  color: "#FEFEFE",
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
                  {supportsMore && (
                    <div className="text-center mt-12">
                      <button
                        onClick={handleLoadMore}
                        className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
                        style={{
                          backgroundColor: "transparent",
                          color: "#1A1A1A",
                          border: "2px solid #2E85FE",
                        }}
                      >
                        Load More Episodes
                      </button>
                    </div>
                  )}
                </div>
              </section>
            </main>
          </div>
        </div>

        {/* Modal */}
        {selectedEpisode && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={() => setSelectedEpisode(null)}
            style={{ backdropFilter: "blur(4px)" }}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: "#FEFEFE" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEpisode(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                style={{ zIndex: 10 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Episode Image */}
              <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-orange-200 to-yellow-200">
                <img
                  src={selectedEpisode.image}
                  alt={selectedEpisode.title}
                  className="w-full h-full object-cover"
                />
                {/* Air Date Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-4 py-2 text-sm font-medium rounded-full"
                    style={{
                      backgroundColor: selectedEpisode.isUpcoming
                        ? "#2E85FE"
                        : "#1A1A1A",
                      color: "#FEFEFE",
                    }}
                  >
                    {selectedEpisode.isUpcoming ? "Upcoming" : "Aired"}
                  </span>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-black bg-opacity-70 text-white">
                    {selectedEpisode.duration}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#1A1A1A" }}
                >
                  {selectedEpisode.title}
                </h2>

                {/* Guest Information */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{ color: "#1A1A1A" }}
                  >
                    {selectedEpisode.guest}
                  </h3>
                  <p className="text-base" style={{ color: "#333333" }}>
                    {selectedEpisode.guestTitle}
                  </p>
                </div>

                {/* Air Date */}
                <div className="mb-4">
                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ color: "#666666" }}
                  >
                    {selectedEpisode.isUpcoming ? "AIRS ON" : "AIRED ON"}
                  </p>
                  <p className="text-lg" style={{ color: "#1A1A1A" }}>
                    {new Date(selectedEpisode.airDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ color: "#666666" }}
                  >
                    ABOUT THIS EPISODE
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#333333" }}
                  >
                    {selectedEpisode.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: "#666666" }}
                  >
                    TAGS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedEpisode.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm font-medium rounded-full"
                        style={{
                          backgroundColor: "rgba(46, 133, 254, 0.2)",
                          color: "#1A1A1A",
                          border: "1px solid rgba(46, 133, 254, 0.3)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {selectedEpisode.isUpcoming ? (
                    <>
                      <button
                        onClick={() => handleSetReminder(selectedEpisode)}
                        className="flex-1 py-4 px-6 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                        style={{
                          backgroundColor: "#2E85FE",
                          color: "#FEFEFE",
                        }}
                      >
                        <svg
                          className="w-5 h-5"
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
                    </>
                  ) : (
                    <button
                      className="w-full py-4 px-6 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: "#2E85FE",
                        color: "#FEFEFE",
                      }}
                    >
                      <svg
                        className="w-5 h-5"
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
          </div>
        )}
      </div>
    </>
  );
}
