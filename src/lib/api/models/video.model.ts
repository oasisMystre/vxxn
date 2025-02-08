export type Video = {
  id: string;
  url: string;
  thumbnail?: string;
  title: string;
  duration: string;
  quality: string;
  views: number;
  uploader: string;
  uploadProgress?: number;
  source: "youtube" | "twitch" | "other";
  uploadStatus: "pending" | "uploading" | "uploaded";
};
