import { usePlayer } from '../context/player-context';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Slider } from './ui/slider';
import { useState } from 'react';
import { Link } from 'react-router';

export function PlayerBar() {
  const {
    currentSong,
    playlist,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isShuffled,
    repeatMode,
    togglePlay,
    playNext,
    playPrevious,
    seek,
    setVolume,
    toggleMute,
    toggleShuffle,
    toggleRepeat,
  } = usePlayer();

  const [showQueue, setShowQueue] = useState(false);

  if (!currentSong) return null;

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const handleSeek = (value: number[]) => {
    seek(value[0]);
  };

  return (
    <>
      <div className="h-24 bg-gradient-to-r from-black/95 via-purple-900/40 to-black/95 backdrop-blur-xl border-t border-white/10 px-2 md:px-4">
        <div className="h-full flex items-center justify-between gap-2 md:gap-4">
          {/* Current Song Info */}
          <div className="flex items-center gap-2 md:gap-4 w-40 md:w-80 min-w-0">
            <motion.img
              key={currentSong.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={currentSong.cover}
              alt={currentSong.title}
              className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover shadow-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <Link 
                to={`/album/${currentSong.albumId}`}
                className="text-white hover:underline block truncate text-sm md:text-base"
              >
                {currentSong.title}
              </Link>
              <Link 
                to={`/artist/${currentSong.artistId}`}
                className="text-white/60 text-xs md:text-sm hover:underline hover:text-white block truncate"
              >
                {currentSong.artist}
              </Link>
            </div>
            <button className="text-white/60 hover:text-white transition-colors hidden md:block">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Player Controls */}
          <div className="flex-1 max-w-2xl hidden md:block">
            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleShuffle}
                className={`transition-colors ${
                  isShuffled ? 'text-purple-500' : 'text-white/60 hover:text-white'
                }`}
              >
                <Shuffle className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={playPrevious}
                className="text-white hover:text-purple-300 transition-colors"
              >
                <SkipBack className="w-5 h-5" fill="currentColor" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="bg-white p-2 rounded-full text-black hover:scale-110 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" fill="currentColor" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={playNext}
                className="text-white hover:text-purple-300 transition-colors"
              >
                <SkipForward className="w-5 h-5" fill="currentColor" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleRepeat}
                className={`transition-colors relative ${
                  repeatMode !== 'off' ? 'text-purple-500' : 'text-white/60 hover:text-white'
                }`}
              >
                <Repeat className="w-4 h-4" />
                {repeatMode === 'one' && (
                  <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] w-3 h-3 rounded-full flex items-center justify-center">
                    1
                  </span>
                )}
              </motion.button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/60 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[currentTime]}
                max={duration || 100}
                step={0.1}
                onValueChange={handleSeek}
                className="flex-1"
              />
              <span className="text-xs text-white/60 w-10">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Mobile Controls - Center */}
          <div className="flex items-center gap-3 md:hidden flex-1 justify-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={playPrevious}
              className="text-white"
            >
              <SkipBack className="w-5 h-5" fill="currentColor" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="bg-white p-3 rounded-full text-black"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={playNext}
              className="text-white"
            >
              <SkipForward className="w-5 h-5" fill="currentColor" />
            </motion.button>
          </div>

          {/* Volume & Queue */}
          <div className="flex items-center gap-2 md:gap-4 w-20 md:w-80 justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowQueue(!showQueue)}
              className={`transition-colors hidden md:block ${
                showQueue ? 'text-purple-500' : 'text-white/60 hover:text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </motion.button>

            <div className="hidden md:flex items-center gap-2 w-32">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="text-white/60 hover:text-white transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </motion.button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                className="flex-1"
              />
            </div>
            
            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowQueue(!showQueue)}
              className="md:hidden text-white/60"
            >
              <List className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Queue Panel */}
      <AnimatePresence>
        {showQueue && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="p-4 max-h-96 overflow-y-auto">
              <h3 className="text-white mb-4">Queue</h3>
              <div className="space-y-2">
                {playlist.map((song, index) => (
                  <div
                    key={song.id}
                    className={`flex items-center gap-3 p-2 rounded-lg ${
                      song.id === currentSong.id ? 'bg-purple-500/20' : 'hover:bg-white/5'
                    }`}
                  >
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm truncate">{song.title}</p>
                      <p className="text-white/60 text-xs truncate">{song.artist}</p>
                    </div>
                    <span className="text-white/60 text-xs">{formatTime(song.duration)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}