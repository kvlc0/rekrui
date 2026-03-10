import "./style.css";

function Sidebar(): string {
  return `
  <div class="sidebarContainer">
    <div class="sidebarContent flex flex-col gap-10">
      <h1 class="animate-pulse font-bold text-4xl"> Assets </h1>
      <h2 class="font-bold text-2xl text-shadow-[0_0_30px]"> 📃 Sprawdzanie </h2>
        <div class="text-list">
          <ul class="ml-10 ">
            <li class="text-shadow-[0_0_20px] text-2xl h-[50px] transition-all duration-500 hover:scale-105 select-none cursor-pointer"> <span>👋</span> Wprowadzenie </li>
            <li class="text-shadow-[0_0_20px] text-2xl h-[50px] select-none transition-all duration-500 hover:scale-105 cursor-pointer"> <span>☁️</span> Spis elementów </li>
            <li class="text-shadow-[0_0_20px] text-2xl h-[50px] select-none transition-all duration-500 hover:scale-105 cursor-pointer"> <span>😎</span> LastActivityView </li>
          </ul>
        </div>
    </div>
  </div>
  `;
}

export default Sidebar;
