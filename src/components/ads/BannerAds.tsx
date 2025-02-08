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
    <div className={clsx("flex flex-col space-y-4 bg-dark", className)}>
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
      <div className="flex flex-col space-y-2 px-4 rounded-b-xl">
        <div className="flex items-center space-x-2">
          <img
            src={avatar}
            width={32}
            height={32}
            className="rounded-full"
          />
          <p>{name}</p>
        </div>
        <div>
          <h1 className="text-xl">{title}</h1>
          <p className="text-sm text-white/75 md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
