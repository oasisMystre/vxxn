import { VerticalVideoPlayer } from './player'

export const VideoPlayer = () => {
    return (
        <VerticalVideoPlayer
            videoUrl="https://your-s3-bucket.com/path/to/video.mp4"
            videoTitle="Happy 1 Year to this"
            videoTags={["anniversary", "celebration", "milestone"]}
            thumbnailUrl="https://your-s3-bucket.com/path/to/thumbnail.jpg"
        />
    )
}
