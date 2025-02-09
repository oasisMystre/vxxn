import { Video } from "lucide-react";

export default function VideoEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <Video className="size-12 text-gray-500" />
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium">No videos yet</h3>
        <p className="text-gray-400">Add a video URL to get started</p>
      </div>
    </div>
  );
}
