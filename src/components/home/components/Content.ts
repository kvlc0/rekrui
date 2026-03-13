import "./style.css";

function Content(): string {
  return `
  <div class="contentContainer w-[50vw] h-auto p-10">
    <div class="content flex flex-col gap-20 animate-show">
      <section id="wprowadzenie" class="flex flex-col gap-10">
        <header class="pb-10 border-l-4 border-blue-700 h-[5px] pl-[20px]">
          <h1 class="font-bold"> <span>👋</span> Wprowadzenie </h1>
        </header>

        <p class="pt-10">
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

          Ten poradnik powstał po to, żeby każdy z nas wiedział jak dokładnie przeprowadzić sprawdzanie gracza od początku do samego końca bez pomijania ważnych szczegółów.


        </p>

        <div class="flex flex-row items-center gap-1">
          <p class="pr-10"> test </p>
          <p class="text-[150px] flex"> } </p>
        </div>

        <hr />

        <section id="sprawdzanie-wstepne" class="flex flex-col gap-10">
        <header class="pb-10 border-l-4 border-blue-700 h-[5px] pl-[20px]">
          <h1 class="font-bold"> <span>🔒</span> Sprawdzanie wstępne </h1>
        </header>

        <p>

          <p>

          Na samym początku sprawdzania należy zapytać gracza o jego dokładny nick w grze Minecraft oraz zadać pytanie o przyznanie się do
          używania niedozwolonych modyfikacji. Należy poinformować gracza, że dobrowolne przyznanie się skutkuje łagodniejszym wymiarem kary,
          natomiast wykrycie cheatów podczas sprawdzania wiąże się z banem.

          <br />
          <br />

          Po przesłuchaniu wstępnym prosimy gracza o udostępnienie całego ekranu komputera. Wyraźnie zaznaczamy, że jakakolwiek odmowa, wyjście z
          serwera lub wyłączenie gry w tym momencie zostanie potraktowane jako brak współpracy i zakończy się natychmiastową blokadą konta.
          Kolejnym krokiem jest weryfikacja ustawień wewnątrz samej gry.
          </p>

          <h2 class="font-bold"> KROK 1: SPRAWDZENIE INSTANCJI MINECRAFTA GRACZA </h2>
          <div class="rest border-l-4 border-gray-500 pl-[20px]">
            <p>

              W tym kroku skupimy się na sprawdzeniu tego co widzimy aktualnie u gracza, czyli samego minecrafta.
              <br />
              Pierw sprawdzamy wizualne anomalie na ekranie gracza, tzn.
              <br />
              <br />

              <ul>
                <li> <b>></b> Potencjalny HUD cheata </li>
              <ul>
            </p>

          </div>

        </p>
        </section>
      </section>


    </div>
  </div>
  `;
}

export default Content;
