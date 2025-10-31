"use client";

import React from "react";
import { artOfTeachingUrls } from "@/data/data";
import { cdnUrl } from "@/services/cdn";

const Guidelines = () => {
  const artOfTeachingGuidelines = cdnUrl("/assets/Guidlines1-BgJl08J_.pdf");

  const timelineStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start' as const,
    marginLeft: '20px'
  };

  const timelineItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center' as const,
    position: 'relative',
    marginBottom: '20px'
  };

  const circleStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    backgroundColor: 'var(--mulearn-gray-600)',
    borderRadius: '50%',
    position: 'relative',
    zIndex: 1,
    minWidth: '20px',
    minHeight: '20px',
  };

  const lineStyle: React.CSSProperties = {
    width: '2px',
    height: '40px',
    backgroundColor: 'var(--mulearn-gray-600)',
    position: 'absolute',
    top: '20px',
    left: '9px',
    zIndex: 0
  };

  const mobilelineStyle: React.CSSProperties = {
    width: '2px',
    height: '40px',
    backgroundColor: 'var(--mulearn-trusty-blue)',
    position: 'absolute',
    top: '42px',
    left: '9px',
    zIndex: 0
  };

  const contentStyle = {
    marginLeft: '40px',
  };

  return (
    <>
      <div className="px-8 py-8 bg-white lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <p className="text-lg lg:text-2xl text-gray-600 font-normal font-noto-sans mb-2">
                Theme: Lessons of The Future.
              </p>
              <h2 className="text-4xl lg:text-7xl font-semibold text-gray-800 leading-tight">
                What is <span className="text-[var(--mulearn-trusty-blue)]">Art of Teaching???</span>
              </h2>
              <p className="mt-2 text-base lg:text-lg text-gray-600 lg:w-4/5">
                The &apos;Art of Teaching&apos; is a contest that celebrates educators who creatively simplify complex 
                topics for better student understanding and retention.
                <br />
                <br />
                To participate in the &quot;Art of Teaching&quot; contest, submit a 5-minute video for Level 1 showcasing your innovative approach to a selected topic.
                After which for Level 2, provide a detailed course design document based on your video presentation to further develop your ideas.
              </p>
            </div>

            <div className="hidden lg:block lg:w-1/2">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg max-w-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  <span className="text-[var(--mulearn-trusty-blue)]">Guidelines</span>
                </h3>
                <div style={timelineStyle}>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Level 1</h4>
                  </div>
                  <div className="pl-4" style={timelineItemStyle}>
                    <div className="pl-4" style={circleStyle}></div>
                    <div className="ml-4" style={lineStyle}></div>
                    <div style={contentStyle}>
                      <p className="text-lg">Task 1 - Self introduction.</p>
                    </div>
                  </div>
                  <div className="pl-4" style={timelineItemStyle}>
                    <div className="pl-4" style={circleStyle}></div>
                    <div className="ml-4" style={lineStyle}></div>
                    <div style={contentStyle}>
                      <p className="text-lg">Task 2 - Video submission explaining a selected topic.</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Level 2</h4>
                  </div>
                  <div className="pl-4" style={timelineItemStyle}>
                    <div className="pl-4" style={circleStyle}></div>
                    <div className="ml-4" style={lineStyle}></div>
                    <div style={contentStyle}>
                      <p className="text-lg">Task 1 - Detailed document submission of the designed course curriculum.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={artOfTeachingGuidelines}
                      download="Art of Teaching Guidelines.pdf"
                    >
                      <button className="bg-[var(--mulearn-trusty-blue)] text-white border-none px-4 py-2 text-base font-bold rounded-md w-[180px] hover:bg-[var(--mulearn-duke-purple)] transition-colors">
                        Download Pdf
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block lg:hidden mt-12 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <span className="text-[var(--mulearn-trusty-blue)]">Guidelines</span>
              </h3>
              <div style={timelineStyle}>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Level 1</h4>
                </div>
                <div className="pl-4" style={timelineItemStyle}>
                  <div className="pl-4" style={circleStyle}></div>
                  <div className="ml-4" style={mobilelineStyle}></div>
                  <div style={contentStyle} className="text-gray-600">
                    Task 1 - Self introduction with welcome ticket.
                  </div>
                </div>
                <div className="pl-4" style={timelineItemStyle}>
                  <div className="pl-4" style={circleStyle}></div>
                  <div className="ml-4" style={mobilelineStyle}></div>
                  <div style={contentStyle} className="text-gray-600">
                    Task 2 - Video submission explaining a selected topic.
                  </div>
                </div>
                <div className="mt-3 pt-2">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Level 2</h4>
                </div>
                <div className="pl-4" style={timelineItemStyle}>
                  <div className="pl-4 pb-5" style={circleStyle}></div>
                  <div className="ml-4" style={mobilelineStyle}></div>
                  <div style={contentStyle} className="text-gray-600">
                    <p className="pt-3">Task 1 - Detailed document submission of the designed course curriculum.</p>
                  </div>
                </div>
                
                <div className="mt-5">
                  <a
                    href={artOfTeachingGuidelines}
                    download="Art of Teaching Guidelines.pdf"
                    className="download-button"
                  >
                    <button className="bg-[var(--mulearn-trusty-blue)] text-white border-none px-4 py-2 text-base font-bold rounded-md w-[180px] hover:bg-[var(--mulearn-duke-purple)] transition-colors">
                      Download Pdf
                    </button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full max-w-md lg:max-w-2xl mt-8">
              <iframe
                className="w-full h-56 lg:h-70 xl:h-96 rounded-lg"
                src={artOfTeachingUrls.mainVideo}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center h-[500px] mb-4">
        <div className="w-full max-w-md lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          <iframe
            className="flex items-center justify-center mx-auto lg:w-[750px] h-56 lg:h-70 xl:h-96 rounded-lg"
            src={artOfTeachingUrls.mainVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Guidelines;
