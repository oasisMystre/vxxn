import React from 'react';
import { Sparkles } from 'lucide-react';

interface SponsoredCardProps {
  title: string;
  description: string;
  image: string;
  sponsorName: string;
  sponsorLogo: string;
}

const SponsoredCard = ({ title, description, image, sponsorName, sponsorLogo }: SponsoredCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden max-h-[450px] max-w-[450px] w-full h-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <img
          src={image}
          alt={title}
          className="w-full h-[216px] object-cover"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 rounded-full px-3 py-1">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-white text-sm font-medium">Sponsored</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={sponsorLogo}
            alt={sponsorName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-gray-400 text-sm">{sponsorName}</span>
        </div>
        <h3 className="lg:text-xl text-[14px] font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 lg:text-[16px] text-[12px]">{description}</p>
      </div>
    </div>
  );
};

export default SponsoredCard;