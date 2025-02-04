import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CreatorCardProps {
  username: string;
  avatar: string;
  isVerified: boolean;
  postedAgo: string;
}

const CreatorCard = ({ username, avatar, isVerified, postedAgo }: CreatorCardProps) => {
  return (
    <div className="mb-5 rounded-xl overflow-hidden max-h-[450px] max-w-[450px] w-full h-full bg-blue-500">
      <Link to={"/user-profile"}>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf"
            alt="Preview"
            className="w-full h-[450px] lg:max-w-[311px] lg:h-[216px] object-cover"
            />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-2">
              <img
                src={avatar}
                alt={username}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex items-center gap-1">
                <span className="text-white lg:text-[16px] text-[14px] font-medium">{username}</span>
                {isVerified && (
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                )}
              </div>
            </div>
            <div className="text-gray-400 text-sm mt-1 hidden lg:block">{postedAgo}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CreatorCard;