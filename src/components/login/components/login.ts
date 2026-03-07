import Walidacja from "../walidacja";

function Login(): string {
  const enterV = Walidacja;

  return `
    <div class="container flex flex-row justify-center mx-auto items-center min-w-screen">
      <div class="flex h-full w-full bg-white justify-center items-center">
        <div class="container-p flex flex-col gap-5">
          <div class="content-p flex flex-col gap-10 justify-center items-center">
            <h1 class="font-bold md:text-[5vh]">Zaloguj się!</h1>

            <input class="loginInput border-4 md:p-2 rounded-full w-[20vw]" placeholder="Wpisz login!" />
            <input class="passInput border-4 md:p-2 rounded-full w-[20vw]" placeholder="Wpisz hasło!" />

            <button
            class="bg-purple-500 md:w-[30vw] md:h-[5vh] md:rounded-full text-white font-bold active:scale-95 duration-100 transition-all"
            onclick=${enterV}>
              Login
            </button>
          </div>
        </div>
      </div>

      <div class="flex bg-purple-500 h-full w-full">
        <div class="container-p flex items-center">
          <img
            src="/11932318.png"
            draggable="false"
          />
        </div>
      </div>
    </div>
  `;
}

export default Login;
