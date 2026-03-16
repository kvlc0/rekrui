import "./style.css";

function Content(): string {
  return /*html*/ `
  <div class="contentContainer w-[50vw] h-auto p-10">
    <div class="content flex flex-col gap-20 animate-show">
      <section id="wprowadzenie" class="flex flex-col gap-10">
        <header class="pb-10 border-l-4 border-cyan-100 h-[5px] pl-[20px]">
          <h1 class="font-bold"> <span>👋</span> Wprowadzenie </h1>
        </header>

        <p class="pt-10">
          Cześć! W tej części poradnika otrzymasz ogólne
          wprowadzenie do sprawdzania
          <br />
          (tzw. <span class="text-cyan-100 font-bold">PC CHECKING</span>),

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

        <hr />

        <section id="sprawdzanie-wstepne" class="flex flex-col gap-10">
        <header class="pb-10 border-l-4 border-cyan-100 h-[5px] pl-[20px]">
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
              <br />

              <ul>
                <li> <b>1.</b> Prosimy aby gracz otworzył menu Minecrafta</li>
                <li> <b>2.</b> Sprawdzamy statystyki gracza, w celu wykrycia cheata pod nazwą "wurst", który ma swoją opcje wyłączenia w dolnych rogach ekranu ( nazwa tej zakładki może się objawiać jako np. <span class="font-bold text-cyan-100">statistics</span> i może byc w dolnym rogu ekranu ) </li>

                <li>
                  <b>3.</b> Następnie prosimy gracza aby wszedł w
                  <br />
                    <div class="p-10">
                      <div class="p-5 bg-cyan-100 text-black rounded-[20px]">
                        <span class="flex-row flex text-xl items-center gap-5"> <img src="123401-icon.svg" class="w-[30px]" loading="lazy" draggable="false"> Ścieżka</span>
                        ustawienia → controls → przypisane klawisze (keybinds) →
                        ustawienia myszy (mouse settings) i sprawdzamy czy gracz nie ma tam opcji wyłączającej cheata
                      </div>
                    </div>
                </li>

                <li> <b>4.</b> Jeżeli poprzedni krok nic nie wykrył to w tej samej sekcji => przpisane klawisze (keybinds) i prosimy gracza aby powoli scrollował w dół — w ten sposób wykryjemy czy nie ma tam podejrzanego bindu włączającego cheaty </li>
                <li> <b>5.</b> Jeżeli poprzednie kroki ostatecznie nic nie wykryły to płynnie możemy przejść do następnej sekcji prosząc gracza aby wszedł w
                <br />
                  <div class="p-10">
                    <div class="p-5 bg-cyan-100 text-black rounded-[20px]">
                      <span class="flex-row flex text-xl items-center gap-5"> <img src="123401-icon.svg" class="w-[30px]" loading="lazy" draggable="false"> Ścieżka</span>
                      ustawienia → paczki zasobów (resource packs) → otwórz folder z paczkami
                    </div>
                  </div>
                </li>
              </ul>
            </p>

          </div>

          <br />

          <h2 class="font-bold"> KROK 2: PRZYGOTOWANIE EKSPLORATORA PLIKÓW GRACZA </h2>
          <div class="rest border-l-4 border-gray-500 pl-[20px]">
            <p>

              W tym kroku skupimy się na sprawdzeniu folderów znajdujących się lokalnie u gracza, czyli np.
              logi, texturepacki, screenshoty itd.
              <br />
              <br />

              <ul>
              <li>
                <b>1.</b> Po wejściu w ścieżkę z poprzedniego kroku znajdziemy się w folderze z paczkami zasobów. Ścieżka powinna wyglądać mniej więcej tak:

                <br />
                  <div class="p-10">
                    <div class="p-5 bg-cyan-100 text-black rounded-[20px]">
                      <span class="flex-row flex text-xl items-center gap-5"> <img src="123401-icon.svg" class="w-[30px]" loading="lazy" draggable="false"> Ścieżka</span>
                        <ul>
                          <li>
                            <span class="text-gray font-bold">•</span> <span class="text-green-600"> [LunarClient] </span>
                            Dysk lokalny (C:) → Users → $nazwa$ → AppData → Roaming → .lunar → resourcepacks
                          </li>
                          <li>
                            <span class="text-gray font-bold">•</span> <span class="text-green-600"> [Fabric/Vanilla] </span>
                            Dysk lokalny (C:) → Users → $nazwa$ → AppData → roaming → minecraft → resourcepacks
                          </li>
                          <li>
                            <span class="text-gray font-bold">•</span> <span class="text-green-600"> [FeatherClient] </span>
                            Dysk lokalny (C:) → Users → $nazwa$ → AppData → roaming → minecraft → resourcepacks
                          </li>
                          <li>
                            <span class="text-gray font-bold">•</span> <span class="text-green-600"> [Custom] </span>
                            Pamiętaj, że gracz może korzystać z innych launcherów jak np. PrismLauncher bądź TLauncher, w których ich ścieżki mogą się różnić
                          </li>
                        </ul>
                    </div>
                  </div>
              </li>

              <li>
                <b>2.</b> Teraz będziemy chcieli zmienić ustawienia eksploratora plików aby widzieć wszystkie pliki jasno i dokładnie, zaczniemy od następujących kroków:
                <ul>
                    <li class="pl-10">
                        <b>•</b> Prosimy gracza aby kliknął widoczny przycisk, <span class="font-bold text-cyan-100">wyświetl</span> abyśmy mogli zobaczyć dostępne opcje.
                        <br />
                        <br />
                        jak już zobaczymy dostępne opcje to musimy wejść w opcje <span class="font-bold text-cyan-100">Pokaż</span>
                        i następnie zaznaczamy dwie ostatnie opcje, czyli <span class="font-bold text-cyan-100">Rozszerzenia nazw plików, Ukryte elementy</span>
                        <br />
                        Dzięki temu będziemy w stanie zobaczyć ukryte pliki oraz rozszerzenia plików, które przydadzą nam się w następnych krokach.

                        <div class="p-10">
                          <div class="p-5 bg-cyan-100 text-black rounded-[20px]">
                            <span class="flex-row flex text-xl items-center gap-5"> <img src="123402-icon.svg" class="w-[30px]" loading="lazy" draggable="false"> Język </span>
                            Kiedy sprawdzamy gracza musimy być przygotowani do tego, że gracz może posiadać system w języku angielskim, w takim przypadku musimy wykazać
                            się wiedzą języka angielskiego.
                          </div>
                        </div>
                    </li>
                </ul>
              </li>
              <ul>

            </p>

          </div>

          <br />

          <h2 class="font-bold"> KROK 3: SPRAWDZENIE CZY GRACZ NIE NAGRYWA </h2>
          <div class="rest border-l-4 border-gray-500 pl-[20px]">
            <p>

              Zanim przejdziemy do dalszego sprawdzania gracza przydałoby się sprawdzić czy gracz nie nagrywa naszego sprawdzania, w ten sposób unikniemy nieporozumień
              oraz wstawienia naszego głosu na różne platformy (bez naszego pozwolenia)
              <br />
              Możemy to sprawdzić na kilka sposobów:
              <div class="p-10">
                <div class="p-5 bg-cyan-100 text-black rounded-[20px]">
                  <span class="flex-row flex text-xl items-center gap-5"> <img src="123403-icon.svg" class="w-[30px]" loading="lazy" draggable="false"> Sposoby </span>
                  <ul>
                      <li>
                        <span class="text-gray font-bold">•</span> <span class="text-green-600"> [Nvidia] </span>
                        Na pasku zadań, w prawym dolnym rogu możemy zauważyc strzałkę w górę <span class="font-bold">"∧"</span>, w której po rozwinięciu jesteśmy w stanie
                        zobaczyć, czy gracz ma w tle włączony program <span>Nvidia Experience</span>, po otworzeniu go będziemy mogli sprawdzić czy gracz ma włączone nagrywanie.
                      </li>
                      <li>
                        <span class="text-gray font-bold">•</span> <span class="text-green-600"> [AMD] </span>
                        W tym przypadku możemy bardzo łatwo sprawdzić czy gracz przypadkiem nie ma włączonego nagrywania, wystarczy abyśmy poprosili gracza o użycie binda
                        <span>Alt + R bądź Alt + Z</span>, dzięki któremu ukaże nam się aplikacja <span>Amd Adrenaline</span>, w której zobaczymy czy nagrywanie nie jest
                        włączone
                      </li>
                  </ul>
                </div>
              </div>




              <br />
              <br />


              <br />
              <br />

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
