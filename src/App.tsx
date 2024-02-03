import { type Component } from 'solid-js';
import { TicTacToeGrille } from './TicTacToeGrille';
import { TicTacToeProvider } from './TicTacToeProvider';
import { Gagnant } from './Gagnant';

const App: Component = () => {
  return (
    <div class="flex flex-col">
      <main class="m-auto">
        <h1>Tictac Toe Solid</h1>
        <TicTacToeProvider>
          <TicTacToeGrille />
          <Gagnant />
        </TicTacToeProvider>
      </main>
    </div>
  );
};
export default App;
