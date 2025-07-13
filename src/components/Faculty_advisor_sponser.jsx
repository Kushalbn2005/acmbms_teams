import React from 'react';
import AnimateOnScroll from './ScrollAnimation';
import ProfileCard from './ProfileCard/ProfileCard';

const faculty = [{ name: 'Dr. Suresh Kumar', role: 'Faculty Advisor', image: '' }];
const sponsor = [{ name: 'TechNova Inc.', role: 'Sponsor', image: '/sponsor1.jpg' }];

const FacultyAndSponsor = () => {
  const people = [...faculty, ...sponsor];
  const rows = [];
  for (let i = 0; i < people.length; i += 3) {
    rows.push(people.slice(i, i + 3));
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bebas tracking-wide bg-gradient-to-r from-[#FFF9C4] via-[#F5B82E] to-[#B8860B] text-transparent bg-clip-text">
            Faculty Advisor & Sponsor
          </h2>
          <p className="mt-6 text-lg md:text-xl font-bellefair text-gray-300 max-w-2xl mx-auto">
            Academic leadership guiding our chapter's mission and vision
          </p>
        </div>
      </AnimateOnScroll>

      {rows.map((row, i) => (
        <AnimateOnScroll delay={i * 0.3} key={i}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full mb-8">
            {row.map((member, j) => (
              <div
                key={j}
                className="scale-90 sm:scale-95 lg:scale-90 transition-transform duration-300"
              >
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

export default FacultyAndSponsor;