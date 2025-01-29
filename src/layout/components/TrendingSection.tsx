import React from 'react';
import { Star } from 'lucide-react';
import CreatorCard from './CreatorCard';
import ChannelCard from './ChannelCard';
import SponsoredCard from './SponsoredCard';

const TrendingSection = () => {
  const trending = [
    {
      type: 'channel',
      name: 'Simply Nails',
      avatar: 'https://images.unsplash.com/photo-1604654894610-df63bc536371',
      description: 'Nail obsessed? find the best tips, tricks, and hacks!',
    },
    {
      type: 'creator',
      username: 'cash.baker',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
      isVerified: true,
      postedAgo: '5h ago',
    },
    {
      type: 'sponsored',
      title: 'Level Up Your Content Game',
      description: 'Create stunning videos with our professional editing suite. Start your free trial today!',
      image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2',
      sponsorName: 'EditPro Studio',
      sponsorLogo: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28',
    }
  ];

  return (
    <div className="px-4 pb-5">
      <h2 className="text-2xl pl-6 md:text-2xl font-[500px] text-white">Categories</h2>
      <div className="w-[350px] p-6 h-full">
        {trending.map((item, index) => {
          if (item.type === 'channel') {
            return (
              <ChannelCard
                key={index}
                name={item.name}
                avatar={item.avatar}
                description={item.description}
              />
            );
          } else if (item.type === 'creator') {
            return (
              <CreatorCard
                key={index}
                username={item.username}
                avatar={item.avatar}
                isVerified={item.isVerified}
                postedAgo={item.postedAgo}
              />
            );
          } else {
            return (
              <SponsoredCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                sponsorName={item.sponsorName}
                sponsorLogo={item.sponsorLogo}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default TrendingSection;