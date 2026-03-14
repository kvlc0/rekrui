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
                <li> <b>></b> Możliwe anomalie Scoreboarda ( <i>zaokrąglenie kiedy gracz nie ma clienta, custom czcionka </i> ) </li>
                <li> <b>></b> Ostatnia wiadomość na chatcie od cheata ( <i> możliwe, że gracz wyłączał huda i pojawiła się o tym informacja na chatcie </i> ) </li>
              <ul>

              <br />
              <br />

              Teraz będziemy sprawdzać ustawienia gracza, zaczniemy od następujących kroków:
              <br />
              <br />

              <ul>
                <li> <b>1.</b> Prosimy aby gracz otworzył menu Minecrafta</li>
                <li> <b>2.</b> Sprawdzamy statystyki gracza, w celu wykrycia cheata pod nazwą "wurst", który ma swoją opcje wyłączenia w dolnych rogach ekranu ( nazwa tej zakładki może się objawiać jako np. "statistics" i może byc w dolnym rogu ekranu ) </li>
                <li> <b>3.</b> Następnie prosimy gracza aby wszedł w ustawienia => controls => przypisane klawisze (keybinds) => ustawienia myszy (mouse settings) i sprawdzamy czy gracz nie ma tam opcji wyłączającej cheata</li>
                <li> <b>4.</b> Jeżeli poprzedni krok nic nie wykrył to w tej samej sekcji => przpisane klawisze (keybinds) i prosimy gracza aby powoli scrollował w dół — w ten sposób wykryjemy czy nie ma tam podejrzanego bindu włączającego cheaty </li>
                <li> <b>5.</b> Jeżeli poprzednie kroki ostatecznie nic nie wykryły to płynnie możemy przejść do następnej sekcji prosząc gracza aby wszedł w <br /><span class=" p-2 border-2 text-[#5a749e] rounded-[20px]">ustawienia => paczki zasobów (resource packs) => otwórz folder z paczkami</span>
              </ul>
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
