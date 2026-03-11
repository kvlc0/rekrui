function Header(): string {
  return `
  <div class="header-0 bg-white/30 border-4 shadow-[0_20px_50px_gray] border-white rounded-full justify-center w-[90vw] fixed flex backdrop-blur-sm">
   <div class="headerContent-0 font-bold md:text-2xl md:p-2 flex">
      <p class=""> Sprawdzanie </p>

      <div class="ico">
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
