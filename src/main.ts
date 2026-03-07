const Build = document?.querySelector<HTMLDivElement>("#app");

function Render(ren: string): void {
  Build!.innerHTML = ren;
}
export default Render;
