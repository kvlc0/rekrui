import Login from "./components/login";

function App(): string {
  return `
  <div class="fragment">
    ${Login()}
  </div>
  `;
}

export default App;
