import { queryAllByRole, queryByRole } from '@testing-library/dom';
import { clear, render2 } from '../../tests/setup';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    clear();
  });
  test('Affiche le titre tictactoe solid', () => {
    const { container } = render2(<App />);
    const title = queryByRole(container, 'heading');
    expect(title?.innerText).toEqual('Tictac Toe Solid');
  });

  test('Affiche une grille de 9 cases', () => {
    const { container } = render2(<App />);
    const cells = queryAllByRole(container, 'cell');
    expect(cells).toHaveLength(9);
  });
});
