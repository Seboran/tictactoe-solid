import { createSignal, type Component } from 'solid-js';

const [counter, setCounter] = createSignal(0)

const App: Component = () => {
  return (
    <div>
      <main>
        <button onClick={() =>setCounter(counter() + 1)}>Incrémenter</button>
        </main>
        <div>{counter()}</div>
    </div>
  );
};

export default App;
