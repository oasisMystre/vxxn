import { Video } from "../../lib/api/models";

export const homeFeeds: Video[] = [
  {
    id: crypto.randomUUID(),
    url: "/videos/1.mp4",
    title: "Test this",
    duration: "1H",
    quality: "720p",
    views: 0,
    uploader: "",
    source: "other",
    uploadStatus: "pending",
  },
  {
    id: crypto.randomUUID(),
    url: "/videos/2.mp4",
    title: "Test this",
    duration: "1H",
    quality: "720p",
    views: 0,
    uploader: "",
    source: "other",
    uploadStatus: "pending",
  },
];
