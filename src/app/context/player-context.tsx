import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { Song, songs as allSongs } from '../data/music-data';

interface PlayerContextType {
  currentSong: Song | null;
  playlist: Song[];
  currentIndex: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isShuffled: boolean;
  repeatMode: 'off' | 'all' | 'one';
  audioRef: React.RefObject<HTMLAudioElement>;
  playSong: (song: Song, playlistSongs?: Song[]) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  setPlaylist: (songs: Song[]) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [playlist, setPlaylistState] = useState<Song[]>(allSongs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');
  
  const audioRef = useRef<HTMLAudioElement>(null);

  // Play specific song
  const playSong = (song: Song, playlistSongs?: Song[]) => {
    if (playlistSongs) {
      setPlaylistState(playlistSongs);
      const index = playlistSongs.findIndex(s => s.id === song.id);
      setCurrentIndex(index !== -1 ? index : 0);
    } else {
      const index = playlist.findIndex(s => s.id === song.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // Update current song when index changes
  useEffect(() => {
    if (playlist.length > 0) {
      setCurrentSong(playlist[currentIndex]);
    }
  }, [currentIndex, playlist]);

  // Update audio source and play
  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.audioUrl;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error('Playback failed:', err));
      }
    }
  }, [currentSong]);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.error('Playback failed:', err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const playNext = () => {
    if (isShuffled) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentIndex(randomIndex);
    } else {
      setCurrentIndex((prev) => {
        if (repeatMode === 'all') {
          return (prev + 1) % playlist.length;
        }
        return prev < playlist.length - 1 ? prev + 1 : prev;
      });
    }
  };

  const playPrevious = () => {
    if (currentTime > 3) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    } else {
      setCurrentIndex((prev) => {
        if (repeatMode === 'all') {
          return prev === 0 ? playlist.length - 1 : prev - 1;
        }
        return prev > 0 ? prev - 1 : 0;
      });
    }
  };

  const seek = (time: number) => {
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
    if (isMuted && vol > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleShuffle = () => setIsShuffled(!isShuffled);
  const toggleRepeat = () => {
    setRepeatMode((prev) => {
      if (prev === 'off') return 'all';
      if (prev === 'all') return 'one';
      return 'off';
    });
  };

  const setPlaylist = (songs: Song[]) => {
    setPlaylistState(songs);
    setCurrentIndex(0);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSongEnd = () => {
    if (repeatMode === 'one') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      playNext();
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        playlist,
        currentIndex,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        isShuffled,
        repeatMode,
        audioRef,
        playSong,
        togglePlay,
        playNext,
        playPrevious,
        seek,
        setVolume,
        toggleMute,
        toggleShuffle,
        toggleRepeat,
        setPlaylist,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSongEnd}
      />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
}
