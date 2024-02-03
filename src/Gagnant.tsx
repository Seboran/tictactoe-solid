import { Show, useContext } from 'solid-js';
import { TicTacToeContext } from './TicTacToeProvider';

export function Gagnant() {
  const { gagnant } = useContext(TicTacToeContext)!;
  return (
    <Show when={gagnant()}>
      <div>Le gagnant est {gagnant()}</div>
    </Show>
  );
}
