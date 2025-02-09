import clsx from "clsx";
import { Sparkles } from "lucide-react";

type BannerAdsProps = {
  name: string;
  avatar: string;
  title: string;
  description: string;
  largeImage: string;
  className?: string;
};

export default function BannerAds({
  name,
  avatar,
  title,
  description,
  largeImage,
  className,
}: BannerAdsProps) {
  return (
    <div className={clsx("flex flex-col  bg-dark-700 rounded-xl", className)}>
      <div className="relative flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute top-4 left-2 flex items-center space-x-2 bg-black/50 px-3 py-1 rounded-full">
          <Sparkles className="size-4 text-yellow" />
          <span className="text-sm">Sponsored</span>
        </div>
        <img
          src={largeImage}
          width={712}
          height={512}
          className="w-full h-64 rounded-t-xl"
        />
      </div>
      <div className="flex flex-col space-y-4 p-6 rounded-b-xl">
        <div className="flex items-center space-x-2">
          <img
            src={avatar}
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="text-gray-400 text-sm">{name}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-sm lg:text-xl">{title}</h1>
          <p className="text-[12px] text-gray-4 lg:text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
}
