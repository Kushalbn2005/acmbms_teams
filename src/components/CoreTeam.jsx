import React from 'react';
import AnimateOnScroll from './ScrollAnimation';
import ProfileCard from './ProfileCard/ProfileCard';

const coreTeam = [
  { name: 'H S Adwi', role: 'Chair', image: '/core1.jpg' },
  { name: 'Indraneel M', role: 'Vice Chair', image: '/core2.jpg' },
  { name: 'Roshini B', role: 'Secretary', image: '/core3.jpg' },
  { name: 'Hrithik M', role: 'Web Master', image: '/core3.jpg' },
  { name: 'Kanishka Sharma', role: 'Membership Chair', image: '/core3.jpg' },
  { name: 'Dhruva G S', role: 'Treasurer', image: '/core3.jpg' },
  { name: 'Srikanth M', role: 'Senior Coordinator', image: '/core3.jpg' },
];

const CoreTeam = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-12 overflow-x-hidden">
      <AnimateOnScroll delay={0}>
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bebas tracking-wide bg-gradient-to-r from-[#FFF9C4] via-[#F5B82E] to-[#B8860B] text-transparent bg-clip-text">
            Current Core Team
          </h2>
          <p className="mt-4 text-lg md:text-xl font-bellefair text-gray-300 max-w-2xl mx-auto">
            Student leaders driving innovation and community engagement
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.5}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 w-full max-w-7xl">
          {coreTeam.map((member, i) => (
            <div key={i} className="flex justify-center">
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
    </section>
  );
};

export default CoreTeam;