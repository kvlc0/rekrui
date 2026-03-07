function Render(ren: string): void {
  const Build = document!.querySelector<HTMLDivElement>("#app");
  Build!.innerHTML = ren;
}
export default Render;
