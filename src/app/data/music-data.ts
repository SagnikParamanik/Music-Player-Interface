export interface Song {
  id: number;
  title: string;
  artist: string;
  artistId: number;
  album: string;
  albumId: number;
  duration: number;
  cover: string;
  audioUrl: string;
  genre: string;
  plays: number;
  releaseDate: string;
}

export interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
  followers: number;
  bio: string;
}

export interface Album {
  id: number;
  title: string;
  artist: string;
  artistId: number;
  cover: string;
  releaseDate: string;
  songs: number[];
  genre: string;
}

export interface Playlist {
  id: number;
  title: string;
  description: string;
  cover: string;
  songs: number[];
  curator: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Electric Pulse",
    genre: "Synthwave",
    image: "https://images.unsplash.com/photo-1768936919089-857e18c38cf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBtdXNpYyUyMHdhdmVzfGVufDF8fHx8MTc3MzY3NDc2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 1250000,
    bio: "Pioneering the modern synthwave movement with nostalgic 80s vibes and futuristic sounds."
  },
  {
    id: 2,
    name: "The Retro Souls",
    genre: "Soul/R&B",
    image: "https://images.unsplash.com/photo-1761682704492-b7ed11edfda7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHZpbnlsJTIwcmVjb3JkJTIwYWxidW18ZW58MXx8fHwxNzczNzU2NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 890000,
    bio: "Bringing back the golden era of soul with contemporary production and timeless melodies."
  },
  {
    id: 3,
    name: "Horizon Waves",
    genre: "Indie/Alternative",
    image: "https://images.unsplash.com/photo-1673264699019-c777a036a666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW50aHdhdmUlMjBzdW5zZXQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzM3NTY3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 2100000,
    bio: "Coastal indie band creating dreamy soundscapes and introspective lyrics."
  },
  {
    id: 4,
    name: "Abstract Minds",
    genre: "Experimental",
    image: "https://images.unsplash.com/photo-1721052921257-f1ec18f80e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBibHVlJTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzczNzU2NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 650000,
    bio: "Pushing boundaries with experimental electronic and psychedelic fusion."
  },
  {
    id: 5,
    name: "Beat Makers",
    genre: "Hip-Hop/Electronic",
    image: "https://images.unsplash.com/photo-1642522843063-5d254aca2a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHR1cm50YWJsZXxlbnwxfHx8fDE3NzM3NTY3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 1800000,
    bio: "Master producers crafting beats that define the modern hip-hop sound."
  },
  {
    id: 6,
    name: "The Thunder Kings",
    genre: "Rock",
    image: "https://images.unsplash.com/photo-1684679106461-dae134df8da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGNvbmNlcnQlMjBzdGFnZXxlbnwxfHx8fDE3NzM3NTY5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 3200000,
    bio: "High-energy rock anthems that shake stadiums around the world."
  },
  {
    id: 7,
    name: "Smooth Jazz Collective",
    genre: "Jazz",
    image: "https://images.unsplash.com/photo-1613412140788-9ed674d57c41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWNpYW4lMjBzYXhvcGhvbmV8ZW58MXx8fHwxNzczNzM2ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 720000,
    bio: "Contemporary jazz fusion with soulful improvisations and smooth grooves."
  },
  {
    id: 8,
    name: "DJ Nexus",
    genre: "EDM",
    image: "https://images.unsplash.com/photo-1624703307604-744ec383cbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBkaiUyMGZlc3RpdmFsfGVufDF8fHx8MTc3MzY0MTE2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 4500000,
    bio: "Festival headliner bringing explosive energy with cutting-edge electronic music."
  }
];

export const songs: Song[] = [
  {
    id: 1,
    title: "Neon Dreams",
    artist: "Electric Pulse",
    artistId: 1,
    album: "Synthwave Nights",
    albumId: 1,
    duration: 234,
    cover: "https://images.unsplash.com/photo-1768936919089-857e18c38cf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBtdXNpYyUyMHdhdmVzfGVufDF8fHx8MTc3MzY3NDc2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    genre: "Synthwave",
    plays: 4500000,
    releaseDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Vinyl Memories",
    artist: "The Retro Souls",
    artistId: 2,
    album: "Golden Era",
    albumId: 2,
    duration: 198,
    cover: "https://images.unsplash.com/photo-1761682704492-b7ed11edfda7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHZpbnlsJTIwcmVjb3JkJTIwYWxidW18ZW58MXx8fHwxNzczNzU2NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    genre: "Soul",
    plays: 3200000,
    releaseDate: "2023-11-20"
  },
  {
    id: 3,
    title: "Sunset Boulevard",
    artist: "Horizon Waves",
    artistId: 3,
    album: "Coastal Vibes",
    albumId: 3,
    duration: 267,
    cover: "https://images.unsplash.com/photo-1673264699019-c777a036a666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW50aHdhdmUlMjBzdW5zZXQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzM3NTY3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    genre: "Indie",
    plays: 5800000,
    releaseDate: "2024-02-10"
  },
  {
    id: 4,
    title: "Purple Haze",
    artist: "Abstract Minds",
    artistId: 4,
    album: "Color Theory",
    albumId: 4,
    duration: 212,
    cover: "https://images.unsplash.com/photo-1721052921257-f1ec18f80e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBibHVlJTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzczNzU2NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    genre: "Experimental",
    plays: 2100000,
    releaseDate: "2023-09-05"
  },
  {
    id: 5,
    title: "Studio Sessions",
    artist: "Beat Makers",
    artistId: 5,
    album: "Behind the Decks",
    albumId: 5,
    duration: 189,
    cover: "https://images.unsplash.com/photo-1642522843063-5d254aca2a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHR1cm50YWJsZXxlbnwxfHx8fDE3NzM3NTY3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    genre: "Hip-Hop",
    plays: 6700000,
    releaseDate: "2024-03-01"
  },
  {
    id: 6,
    title: "Thunder Road",
    artist: "The Thunder Kings",
    artistId: 6,
    album: "Electric Highway",
    albumId: 6,
    duration: 245,
    cover: "https://images.unsplash.com/photo-1684679106461-dae134df8da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGNvbmNlcnQlMjBzdGFnZXxlbnwxfHx8fDE3NzM3NTY5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    genre: "Rock",
    plays: 8900000,
    releaseDate: "2023-12-15"
  },
  {
    id: 7,
    title: "Midnight Jazz",
    artist: "Smooth Jazz Collective",
    artistId: 7,
    album: "After Hours",
    albumId: 7,
    duration: 278,
    cover: "https://images.unsplash.com/photo-1613412140788-9ed674d57c41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWNpYW4lMjBzYXhvcGhvbmV8ZW58MXx8fHwxNzczNzM2ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    genre: "Jazz",
    plays: 1800000,
    releaseDate: "2024-01-05"
  },
  {
    id: 8,
    title: "Festival Anthem",
    artist: "DJ Nexus",
    artistId: 8,
    album: "Mainstage",
    albumId: 8,
    duration: 192,
    cover: "https://images.unsplash.com/photo-1624703307604-744ec383cbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBkaiUyMGZlc3RpdmFsfGVufDF8fHx8MTc3MzY0MTE2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    genre: "EDM",
    plays: 12000000,
    releaseDate: "2024-02-28"
  },
  {
    id: 9,
    title: "Urban Poetry",
    artist: "Beat Makers",
    artistId: 5,
    album: "Street Chronicles",
    albumId: 9,
    duration: 176,
    cover: "https://images.unsplash.com/photo-1565970460548-9a073fd8e6ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjB1cmJhbiUyMGdyYWZmaXRpfGVufDF8fHx8MTc3Mzc1Njk0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    genre: "Hip-Hop",
    plays: 5400000,
    releaseDate: "2023-10-12"
  },
  {
    id: 10,
    title: "Symphony No. 9",
    artist: "Smooth Jazz Collective",
    artistId: 7,
    album: "Classical Reimagined",
    albumId: 10,
    duration: 312,
    cover: "https://images.unsplash.com/photo-1719479757967-c61fd530c625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBvcmNoZXN0cmElMjBjb25jZXJ0fGVufDF8fHx8MTc3Mzc0MDY2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    genre: "Classical",
    plays: 980000,
    releaseDate: "2023-08-20"
  },
  {
    id: 11,
    title: "Acoustic Sunset",
    artist: "Horizon Waves",
    artistId: 3,
    album: "Unplugged Sessions",
    albumId: 11,
    duration: 223,
    cover: "https://images.unsplash.com/photo-1760160741839-c272378f0bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGZvbGslMjBhY291c3RpYyUyMGd1aXRhcnxlbnwxfHx8fDE3NzM2NTQ3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    genre: "Folk",
    plays: 3600000,
    releaseDate: "2024-01-25"
  },
  {
    id: 12,
    title: "Neon Lights",
    artist: "Electric Pulse",
    artistId: 1,
    album: "City Nights",
    albumId: 12,
    duration: 201,
    cover: "https://images.unsplash.com/photo-1760931657876-116605bd9dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3AlMjBtdXNpYyUyMG5lb24lMjBsaWdodHN8ZW58MXx8fHwxNzczNzU2OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    genre: "Pop",
    plays: 7200000,
    releaseDate: "2024-03-10"
  }
];

export const albums: Album[] = [
  { id: 1, title: "Synthwave Nights", artist: "Electric Pulse", artistId: 1, cover: songs[0].cover, releaseDate: "2024-01-15", songs: [1, 12], genre: "Synthwave" },
  { id: 2, title: "Golden Era", artist: "The Retro Souls", artistId: 2, cover: songs[1].cover, releaseDate: "2023-11-20", songs: [2], genre: "Soul" },
  { id: 3, title: "Coastal Vibes", artist: "Horizon Waves", artistId: 3, cover: songs[2].cover, releaseDate: "2024-02-10", songs: [3, 11], genre: "Indie" },
  { id: 4, title: "Color Theory", artist: "Abstract Minds", artistId: 4, cover: songs[3].cover, releaseDate: "2023-09-05", songs: [4], genre: "Experimental" },
  { id: 5, title: "Behind the Decks", artist: "Beat Makers", artistId: 5, cover: songs[4].cover, releaseDate: "2024-03-01", songs: [5, 9], genre: "Hip-Hop" },
  { id: 6, title: "Electric Highway", artist: "The Thunder Kings", artistId: 6, cover: songs[5].cover, releaseDate: "2023-12-15", songs: [6], genre: "Rock" },
  { id: 7, title: "After Hours", artist: "Smooth Jazz Collective", artistId: 7, cover: songs[6].cover, releaseDate: "2024-01-05", songs: [7, 10], genre: "Jazz" },
  { id: 8, title: "Mainstage", artist: "DJ Nexus", artistId: 8, cover: songs[7].cover, releaseDate: "2024-02-28", songs: [8], genre: "EDM" },
];

export const playlists: Playlist[] = [
  {
    id: 1,
    title: "Today's Top Hits",
    description: "The biggest songs right now",
    cover: songs[7].cover,
    songs: [8, 6, 12, 5, 3],
    curator: "Soundwave"
  },
  {
    id: 2,
    title: "Chill Vibes",
    description: "Relax and unwind with these chill tracks",
    cover: songs[2].cover,
    songs: [3, 11, 7, 2],
    curator: "Soundwave"
  },
  {
    id: 3,
    title: "Workout Mix",
    description: "High energy tracks to power your workout",
    cover: songs[5].cover,
    songs: [6, 8, 5, 9],
    curator: "Fitness Beats"
  },
  {
    id: 4,
    title: "Electronic Dreams",
    description: "The best of electronic music",
    cover: songs[0].cover,
    songs: [1, 12, 8, 4],
    curator: "EDM Central"
  },
  {
    id: 5,
    title: "Late Night Jazz",
    description: "Smooth jazz for late night listening",
    cover: songs[6].cover,
    songs: [7, 10, 2],
    curator: "Jazz Lovers"
  },
  {
    id: 6,
    title: "Rock Classics",
    description: "Timeless rock anthems",
    cover: songs[5].cover,
    songs: [6],
    curator: "Rock Nation"
  }
];
