import type { ValeurCase } from './ValeurCase';

type Props = {
  updateCase: () => void;
  valeur: ValeurCase;
};

export function TictactoeCase(props: Props) {
  return (
    <td
      class="border border-black size-16 text-center text-2xl"
      onClick={props.updateCase}
    >
      {props.valeur}
    </td>
  );
}
