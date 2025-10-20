"use client";

import React from "react";
import LevelStructureHero from "./_components/LevelStructureHero";
import LevelTimeline from "./_components/LevelTimeline";
import LevelBenefits from "./_components/LevelBenefits";

const LevelStructurePage = () => {
  return (
    <div className="min-h-screen">
      <LevelStructureHero />
      <LevelTimeline />
      <LevelBenefits />
    </div>
  );
};

export default LevelStructurePage;
