import { createBrowserRouter } from 'react-router';
import { Root } from './pages/root';
import { Home } from './pages/home';
import { Search } from './pages/search';
import { Library } from './pages/library';
import { LikedSongs } from './pages/liked-songs';
import { Playlists } from './pages/playlists';
import { AlbumDetail } from './pages/album-detail';
import { ArtistDetail } from './pages/artist-detail';
import { PlaylistDetail } from './pages/playlist-detail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'search', Component: Search },
      { path: 'library', Component: Library },
      { path: 'liked', Component: LikedSongs },
      { path: 'playlists', Component: Playlists },
      { path: 'album/:id', Component: AlbumDetail },
      { path: 'artist/:id', Component: ArtistDetail },
      { path: 'playlist/:id', Component: PlaylistDetail },
    ],
  },
]);
