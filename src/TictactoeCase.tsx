import type { ValeurCase } from './ValeurCase';

type Props = {
  updateCase: () => void;
  valeur: ValeurCase;
};

export function TictactoeCase(props: Props) {
  function mettreAJourCase() {
    if (props.valeur) {
      return;
    }
    props.updateCase();
  }
  return (
    <td
      class="border border-black size-16 text-center text-2xl"
      onClick={mettreAJourCase}
    >
      {props.valeur}
    </td>
  );
}
