import React from 'react';

interface ChannelCardProps {
  name: string;
  avatar: string;
  description: string;
}

const ChannelCard = ({ name, avatar, description }: ChannelCardProps) => {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <img
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702"
          alt="Channel cover"
          className="w-full aspect-[16/9] object-cover"
        />
        <img
          src={avatar}
          alt={name}
          className="absolute left-4 bottom-0 transform translate-y-1/2 w-16 h-16 rounded-full border-4 border-zinc-900 object-cover"
        />
      </div>
      <div className="p-6 pt-12">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ChannelCard;