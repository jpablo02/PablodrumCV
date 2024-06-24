// page.tsx
"use client";

import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ProfileSection from "../components/ProfileSection";
import SkillsSection from "../components/SkillsSection";
import { NextPage } from "next";

// page.tsx

// page.tsx

// page.tsx

// page.tsx

// page.tsx

// page.tsx

// page.tsx

// page.tsx

// page.tsx

// page.tsx

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="w-full py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-6xl font-bold mb-4 animate-fade-in">I am Pablodrum</h1>
              <p className="text-2xl animate-fade-in">NFT artist & Web 3 builder</p>
            </div>
            <ProfileSection />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
