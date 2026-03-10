import "./style.css";

function Sidebar(): string {
  return `
  <div class="sidebarContainer fixed">
    <div class="sidebarContent flex flex-col gap-10">
      <h1 class="animate-pulse font-bold text-4xl"> Assets </h1>
      <h2 class="font-bold text-2xl text-shadow-[0_0_30px]"> 📃 Sprawdzanie </h2>
        <div class="text-list">
          <ul class="ml-10 gap-5   flex flex-col">
          <li class="font-bold hover:scale-98 transition-all text-2xl duration-500 cursor-pointer"><a href="#wprowadzenie"> <span>👋</span> Wprowadzenie </a></li>
          <li class="font-bold hover:scale-98 transition-all text-2xl duration-500 cursor-pointer"> <span>🔒</span> Sprawdzanie wstępne </li>
          <li class="font-bold hover:scale-98 transition-all text-2xl duration-500 cursor-pointer"> <span>📂</span> Eksplorator plików </li>
          <li class="font-bold hover:scale-98 transition-all text-2xl duration-500 cursor-pointer"> <span>🌿</span> Dziennik Minecrafta </li>
          </ul>
        </div>
    </div>
  </div>
  `;
}

export default Sidebar;
