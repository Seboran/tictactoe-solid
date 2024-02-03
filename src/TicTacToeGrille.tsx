import { Index, useContext } from 'solid-js';
import { TicTacToeContext } from './TicTacToeProvider';
import { TictactoeCase } from './TictactoeCase';

export const TicTacToeGrille = () => {
  const { grille, cocherCase } = useContext(TicTacToeContext)!;

  return (
    <table>
      <tbody>
        <Index each={grille}>
          {(ligne, i) => (
            <tr>
              <Index each={ligne()}>
                {(valeurCase, j) => (
                  <TictactoeCase
                    valeur={valeurCase()}
                    updateCase={() => cocherCase(i, j)}
                  />
                )}
              </Index>
            </tr>
          )}
        </Index>
      </tbody>
    </table>
  );
};
