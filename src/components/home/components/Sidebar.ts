import "./style.css";

function Sidebar(): string {
  return `
  <div class="sidebarContainer fixed animate-slide-l">
    <div class="sidebarContent flex flex-col gap-10">
      <h1 class="animate-pulse font-bold text-3xl"> Sprawdzanie </h1>
        <div class="text-list">
          <ul class=" gap-5 flex flex-col text-xl">
          <li class="font-bold hover:scale-98 transition-all duration-500 cursor-pointer"><a href="#wprowadzenie"> <span>👋</span> Wprowadzenie </a></li>
          <li class="font-bold hover:scale-98 transition-all duration-500 cursor-pointer"> <a href="#sprawdzanie-wstepne"> <span>🔒</span> Sprawdzanie wstępne </a></li>
          <li class="font-bold hover:scale-98 transition-all duration-500 cursor-pointer"> <span>📂</span> Eksplorator plików </li>
          <li class="font-bold hover:scale-98 transition-all duration-500 cursor-pointer"> <span>🌿</span> Dziennik Minecrafta </li>
          </ul>
        </div>
    </div>
  </div>
  `;
}

export default Sidebar;
