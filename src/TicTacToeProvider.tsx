import { createContext, type ParentProps } from 'solid-js';
import { useTicTacToeGrille } from './useTicTacToeGrille';
import type { ValeurCase } from './ValeurCase';

export const TicTacToeContext = createContext<{
  grille: ValeurCase[][];
  gagnant: () => ValeurCase;
  cocherCase: (i: number, j: number) => void;
}>();

export function TicTacToeProvider(props: ParentProps<{}>) {
  const { grille, gagnant, mettreAJourCase } = useTicTacToeGrille();

  return (
    <TicTacToeContext.Provider
      value={{ gagnant, grille, cocherCase: mettreAJourCase }}
    >
      {props.children}
    </TicTacToeContext.Provider>
  );
}
