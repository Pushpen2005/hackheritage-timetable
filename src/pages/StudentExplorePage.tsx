import React from "react";
import StudentFeatures from "./StudentFeatures";

const StudentExplorePage: React.FC = () => {
  return (
    <div className="student-explore-bg min-h-screen p-8 flex flex-col items-center animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-8 text-gradient">Explore Student Features</h1>
      <div className="w-full max-w-5xl">
        <StudentFeatures />
      </div>
    </div>
  );
};

export default StudentExplorePage;
