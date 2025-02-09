import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";
import BannerAds from "../../components/ads/BannerAds";
import InterstitialAds from "../../components/ads/InterstitialAds";

import VideoAds from "../../components/ads/VideoAds";
import { bannerAds } from "../../config/mock/adsource";

export default function RootLayout() {
  return (
    <main className="mx-auto flex-1 flex gap-8 lt-md:flex-col">
      <div className="w-sm flex flex-col bg-black p-4 rounded-xl my-4 lt-xl:hidden">
        <InterstitialAds />
      </div>
      <div className="relative flex flex-col overflow-y-scroll lt-sm:h-screen sm:w-lg lt-sm:w-screen md:mx-auto md:w-lg">
        <Navigation className="max-w-sm absolute z-10 self-center z-100" />
        <Outlet />
      </div>
      <div className="h-100dvh overflow-y-scroll snap-mandatory snap-y p-4 scrollbar-none">
        <div className="min-h-[calc(100vh-24px)] max-w-sm grid grid-rows-2 space-y-4 bg-black p-4 rounded-xl lt-xl:hidden">
          <VideoAds
            src="/videos/3.mp4"
            className="snap-end h-lg w-full object-cover overflow-y-hidden"
          />
          <BannerAds
            {...bannerAds[0]}
            className="snap-end"
          />
        </div>
      </div>
    </main>
  );
}
