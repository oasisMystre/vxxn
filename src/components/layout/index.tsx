import { Outlet } from "react-router-dom";

import BannerAds from "../../components/ads/BannerAds";
import Navigation from "../../components/layout/Navigation";
import InterstitialAds from "../../components/ads/InterstitialAds";

import VideoAds from "../../components/ads/VideoAds";
import { bannerAds } from "../../config/mock/adsource";

export default function RootLayout() {
  return (
    <main className="mx-auto flex-1 flex gap-8 sm:p-4 lt-md:flex-col">
      <div className="w-sm flex flex-col bg-black p-4 rounded-xl lt-xl:hidden">
        <InterstitialAds />
      </div>
      <div className="relative flex flex-col overflow-y-scroll sm:w-lg lt-sm:w-screen lt-md:h-[calc(100vh-32px)] md:mx-auto md:w-lg">
        <Navigation className="max-w-sm absolute z-10 self-center" />
        <Outlet />
      </div>
      <div className="w-sm grid grid-rows-2 space-y-4 bg-black p-4 rounded-xl lt-xl:hidden">
        <VideoAds
          src="/videos/3.mp4"
          className="h-md w-full object-cover"
        />
        <BannerAds {...bannerAds[0]} />
      </div>
    </main>
  );
}
