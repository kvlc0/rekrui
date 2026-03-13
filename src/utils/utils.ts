export function select(selector: string): void {
  document.querySelector<HTMLDivElement>(selector);
}

export function cAdd(element: string, add: string, rem: string): void {
  setTimeout(() => {
    const el = document.querySelector(`${element}`);
    el?.classList.add(`${add}`);
    el?.classList.remove(`${rem}`);
  }, 500);
}
