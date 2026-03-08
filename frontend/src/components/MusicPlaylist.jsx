export default function MusicPlaylist({ mood, weather }) {

  const playlists = {

    adventure: {
      cold: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd",
      hot: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb",
      mild: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0"
    },

    relax: {
      cold: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",
      hot: "https://open.spotify.com/embed/playlist/37i9dQZF1DX889U0CL85jj",
      mild: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT"
    },

    party: {
      cold: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
      hot: "https://open.spotify.com/embed/playlist/37i9dQZF1DXaXB8fQg7xif",
      mild: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1lVhptIYRda"
    }

  };

  const selectedPlaylist =
    playlists[mood]?.[weather] ||
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd";

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6">

      <h2 className="text-lg font-semibold text-white mb-3">
        🎵 Travel Playlist
      </h2>

      <p className="text-sm text-white/70 mb-4">
        Perfect music for your {mood} trip
      </p>

      <iframe
        src={selectedPlaylist}
        width="100%"
        height="260"
        frameBorder="0"
        allow="encrypted-media"
        className="rounded-lg"
      />

    </div>

  );
}