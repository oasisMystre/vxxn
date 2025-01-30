import React from 'react';

interface ChannelCardProps {
  name: string;
  avatar: string;
  description: string;
}

const ChannelCard = ({ name, avatar, description }: ChannelCardProps) => {
  return (
    <div className="mb-5 rounded-xl overflow-hidden">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702"
          alt="Preview"
          className="w-full rounded-[20px] max-w-[311px] h-[216px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex gap-2">
            <img
              src={avatar}
              className="w-8 h-8 min-w-[32px] min-h-[32px] rounded-full object-cover"
            />
            <div className="flex items-center gap-1">
              <div>
                <h3 className="lg:text-xl text-[14px] font-bold text-white">{name}</h3>
              </div>
            </div>
          </div>
          <p className="text-white text-sm font-semibold mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;