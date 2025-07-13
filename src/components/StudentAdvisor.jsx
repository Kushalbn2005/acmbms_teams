import React from 'react';
import AnimateOnScroll from './ScrollAnimation';
import ProfileCard from './ProfileCard/ProfileCard';

const advisors = [
  { name: 'Ritika Rao', role: 'Student Advisor', image: '/student1.jpg' },
  { name: 'Ritika Rao', role: 'Student Advisor', image: '/student1.jpg' },
];

const StudentAdvisor = () => {
  const rows = [];
  for (let i = 0; i < advisors.length; i += 3) {
    rows.push(advisors.slice(i, i + 3));
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4">
      <AnimateOnScroll>
        <div className="text-center mb-12">
         <h2 className="text-6xl md:text-7xl font-bebas tracking-wide bg-gradient-to-r from-[#FFF9C4] via-[#F5B82E] to-[#B8860B] text-transparent bg-clip-text">
            Student Advisors
          </h2>
          <p className="mt-6 text-lg md:text-xl font-bellefair text-gray-300 max-w-2xl mx-auto">
            Graduate students and alumni providing mentorship and industry connections
          </p>
        </div>
      </AnimateOnScroll>

      {rows.map((row, i) => (
        <AnimateOnScroll delay={i * 0.3} key={i}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 w-full max-w-7xl mb-8">
            {row.map((member, j) => (
              <div key={j} className="flex justify-center">
                <ProfileCard
                  name={member.name}
                  title={member.role}
                  avatarUrl={member.image}
                  handle={member.name.split(" ")[0].toLowerCase()}
                  status="Active"
                  miniAvatarUrl={member.image}
                  showUserInfo={false}
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      ))}
    </section>
  );
};

export default StudentAdvisor;