import "./style.css";

function Content(): string {
  return `
  <div class="contentContainer w-[50vw] h-auto p-10">
    <div class="content flex flex-col gap-20">
      <section id="wprowadzenie" class="flex flex-col gap-10">
        <header class="pb-10 border-l-4 border-blue-700 h-[5px] pl-[20px]">
          <h1 class="font-bold text-4xl "> <span>👋</span> Wprowadzenie </h1>
        </header>

        <p class="text-[20px] pt-10">
          Cześć! W tej części poradnika otrzymasz ogólne
          wprowadzenie do sprawdzania
          <br />
          (tzw. <span class="text-blue-500">PC CHECKING</span>),

          dzięki któremu będziesz w stanie wykryć dośc powszechnie znane wspomagacze oraz cheaty, które są starannie ukryte.

          <br />
          <br />

          Perfekcyjne ukrycie cheata jest niemal <b>niemożliwe</b> – system operacyjny zawsze zostawia ślady, jeśli tylko wiesz, gdzie ich szukać.
          To instrukcja poruszania się po różnorodnych programach, które umożliwiają znalezienie cheatów po śladach,
          które zostawiają użytkownicy próbujący użyć popularnych cheatów.

          <br />
          <br />

          <b>Zalecam</b> czytanie każdych kroków uważnie.


        </p>

          <section id="spis" class="flex flex-col">
            <header class="pb-10 h-[5px]">
              <h1 class="font-bold text-4xl "> <span>☁️</span> Spis treści </h1>
            </header>

            <br />
            <br />
            <div class="rest border-l-4 pl-[20px]">
              <ul class="text-2xl select-none flex flex-col gap-5">
                <li class="font-bold hover:scale-98 transition-all duration-500 cursor-pointer"> <a href="#wprowadzenie"> <span>👋</span> Wprowadzenie </a><span class="text-green-500">(Jesteś tutaj!)</span> </li>
                <li class="font-bold hover:scale-98 transition-all duration-500 cursor-pointer"> <span>🔒</span> Sprawdzanie wstępne </li>
                <li class="font-bold hover:scale-98 transition-all duration-500 cursor-pointer"> <span>📂</span> Eksplorator plików </li>
                <li class="font-bold hover:scale-98 transition-all duration-500 cursor-pointer"> <span>🌿</span> Dziennik Minecrafta </li>
              </ul>
            </div>
          </section>
        </section>

        <hr />

        <section id="sprawdzanie-wstepne">
          <header class="pb-10 h-[5px]">
            <h1 class="font-bold text-4xl "> <span>🔒</span> Sprawdzanie wstępne </h1>
          </header>
        </section>



    </div>
  </div>
  `;
}

export default Content;
