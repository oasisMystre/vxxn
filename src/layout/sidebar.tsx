import React from 'react';
import { Sparkles } from 'lucide-react';
import CreatorCard from './components/CreatorCard';
import ChannelCard from './components/ChannelCard';
import SponsoredCard from './components/SponsoredCard';
import VideoPlayerModal from '../components/videoPlayer/videoPlayer';

interface Props {
  isRightSide?: boolean;
}
const Sidebar = ({ isRightSide }: Props) => {
  const trending = [
    {
      type: 'creator',
      username: 'cash.baker',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
      isVerified: true,
      postedAgo: '5h ago',
    },
    {
      type: 'channel',
      name: 'Simply Nails',
      avatar: 'https://images.unsplash.com/photo-1604654894610-df63bc536371',
      description: 'Nail obsessed? find the best tips, tricks, and hacks!',
    }
  ];
  const CardsSkeleton = () => (
    <div className="h-full">
      <div className="h-[216px] w-full bg-black mb-5  rounded-[20px]" />
      <div className="h-[216px] w-full bg-black mb-5  rounded-[20px]" />
      <div className="h-[216px] w-full bg-black mb-5  rounded-[20px]" />
    </div>
  );

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }), []


  return (
    <div className="pb-5">
      <h2 className={`text-2xl pl-6 md:text-2xl font-[500px] text-center text-white fixed top-3 z-10 bg-black w-[300px] py-5 rounded-[20px] min-h-[20px]`}>{!isRightSide && "Categories"}</h2>
      <div className="w-full p-6 pt-[40px] h-full">
        {isLoading ? <CardsSkeleton /> : isRightSide ? trending.map((item, index) => {
          if (item.type === 'channel') {
            if (!isRightSide) {
              return (
                <ChannelCard
                  key={index}
                  name={item.name}
                  avatar={item.avatar}
                  description={item.description}
                />
              );
            } else {
              return (
                <>
                  <VideoPlayerModal isRightSide={isRightSide} />
                  <div style={{ width: "250px", height: "400px" }} className="artboard phone-1 mt-2 bg-[#121212] rounded-[20px] relative">
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 rounded-full px-3 py-1">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm font-medium">Sponsored</span>
                    </div>
                  </div>
                </>
              )
            }
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
        }) : <></>}
      </div>
    </div>
  );
};

export default Sidebar;