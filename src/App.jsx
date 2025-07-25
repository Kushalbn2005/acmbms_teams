import React from 'react';
import Heropage from './components/Heropage';
import Faculty_advisor_sponser from './components/faculty_advisor_sponser';
import CoreTeam from './components/CoreTeam';
import StudentAdvisor from './components/StudentAdvisor';
import ScrollLinked from './components/ScrollLinked';
import Navbar from './components/Navbar';
import SectionFadeTransition from './components/ScrollSection';
import Aurora from './Aurora';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="bg-[#0B0B0B] min-h-screen overflow-x-hidden">
      <ScrollLinked />
      <Navbar />

      <SectionFadeTransition>
        <div className="relative w-full h-screen overflow-hidden">
          <Aurora
            colorStops={["#0D47A1", "#82B1FF", "#1976D2"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <Heropage />
          </div>
        </div>
      </SectionFadeTransition>

      <SectionFadeTransition>
        <Faculty_advisor_sponser />
      </SectionFadeTransition>

      <SectionFadeTransition>
        <CoreTeam />
      </SectionFadeTransition>

      <SectionFadeTransition>
        <StudentAdvisor />
      </SectionFadeTransition>
      <Footer />
    </div>
  );
};

export default App;
