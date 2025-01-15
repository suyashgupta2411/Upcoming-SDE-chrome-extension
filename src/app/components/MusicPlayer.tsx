export default function MusicPlayer() {
  return (
    <div className="h-full w-full p-3 rounded-xl">
      <iframe
        className="rounded-md w-full h-full"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
