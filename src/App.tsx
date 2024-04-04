import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div class="bg-green-950">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="h-1 w-1" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="h-1 w-1" alt="Solid logo" />
        </a>
      </div>
      <h1>Mud & Moss</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  );
}

export default App;