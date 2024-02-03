import type { JSXElement } from 'solid-js';
import { render } from 'solid-js/web';

const root = document.body;
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}
export function render2(component: JSXElement) {
  render(() => component, root!);
  return { container: root };
}

export function clear() {
  root.innerHTML = '';
}
