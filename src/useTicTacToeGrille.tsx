import { createSignal } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import type { ValeurCase } from './ValeurCase';

export const useTicTacToeGrille = () => {
  const [grille, setGrille] = createStore<ValeurCase[][]>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);
  const [joueur, setJouer] = createSignal<'X' | 'O'>('X');
  const gagnant = () => checkWinner(grille);

  function flipJoueur() {
    switch (joueur()) {
      case 'O':
        setJouer('X');
        break;
      case 'X':
        setJouer('O');
        break;
    }
  }

  const mettreAJourCase = (i: number, j: number) => {
    setGrille(
      produce((ligne) => {
        ligne[i][j] = joueur();
      }),
    );
    flipJoueur();
  };

  function checkWinner(grid: ValeurCase[][]): 'X' | 'O' | undefined {
    const lines = [
      [grid[0][0], grid[0][1], grid[0][2]],
      [grid[1][0], grid[1][1], grid[1][2]],
      [grid[2][0], grid[2][1], grid[2][2]],
      [grid[0][0], grid[1][0], grid[2][0]],
      [grid[0][1], grid[1][1], grid[2][1]],
      [grid[0][2], grid[1][2], grid[2][2]],
      [grid[0][0], grid[1][1], grid[2][2]],
      [grid[0][2], grid[1][1], grid[2][0]],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (a !== undefined && a === b && a === c) {
        return a;
      }
    }

    if (isNullGame()) {
      return undefined;
    }

    return undefined;

    function isNullGame() {
      return grid.flatMap((row) => row).every((cell) => cell !== undefined);
    }
  }

  return {
    grille,
    mettreAJourCase,
    gagnant,
  };
};
