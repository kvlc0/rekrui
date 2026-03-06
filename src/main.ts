import App from "./App";

const Build = document?.querySelector<HTMLDivElement>("#app");
const appRender = App();

function Render(ren: string): void {
  Build!.innerHTML = ren;
}

Render(appRender);
