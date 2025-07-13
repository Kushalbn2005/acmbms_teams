import React from 'react';
import Heropage from './components/Heropage';
import Faculty_advisor_sponser from './components/faculty_advisor_sponser';
import CoreTeam from './components/CoreTeam';
import StudentAdvisor from './components/StudentAdvisor';
import ScrollLinked from './components/ScrollLinked'; // if you're using the scroll progress bar
import Navbar from './components/Navbar';
import SectionFadeTransition from './components/ScrollSection';

const App = () => {
  return (
    <div className="bg-[#0B0B0B] min-h-screen overflow-x-hidden">
      <ScrollLinked /> 
      <Navbar/>

      <SectionFadeTransition>
        <Heropage />
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
    </div>
  );
};

export default App;
