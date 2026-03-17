import { RouterProvider } from 'react-router';
import { PlayerProvider } from './context/player-context';
import { router } from './routes';

export default function App() {
  return (
    <PlayerProvider>
      <RouterProvider router={router} />
    </PlayerProvider>
  );
}
