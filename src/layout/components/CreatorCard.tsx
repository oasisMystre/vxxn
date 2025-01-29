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
    <div className="bg-zinc-900 rounded-xl overflow-hidden">
      <Link to={"/user-profile"}>
        <div className="aspect-[4/5] relative">
          <img
            src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf"
            alt="Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-2">
              <img
                src={avatar}
                alt={username}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex items-center gap-1">
                <span className="text-white font-medium">{username}</span>
                {isVerified && (
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                )}
              </div>
            </div>
            <div className="text-gray-400 text-sm mt-1">{postedAgo}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CreatorCard;