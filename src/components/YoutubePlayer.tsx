import YouTubePlayer from "react-player/youtube";

export default function YoutubePlayer({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="w-1/4 p-3 border-2 border-gray-200 shadow-gray-700 shadow-md">
      <div className="overflow-hidden">
        <YouTubePlayer
          url={videoUrl}
          controls
          playing={false}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
