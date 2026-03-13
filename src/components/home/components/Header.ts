function Header(): string {
  return `
  <div class="header-0 bg-[#161617]/50 border-4 border-[#3e3f40] rounded-full justify-center w-[20vw] fixed flex animate-show z-50 backdrop-blur-lg">
   <div class="headerContent-0 font-bold md:text-2xl md:p-2 flex ">
      <h2> sprawdzanie </h2>

      <div class="ico flex flex-row ">

      <a href="#home">
        <span class="material-symbols-outlined absolute flex absolute left-10 p-2 rounded-full scale-150 transition-all duration-500 hover:scale-155 active:scale-105">
        home
        </span>
      </a>
      </div>
   </div>


  </div>
  `;
}

export default Header;
