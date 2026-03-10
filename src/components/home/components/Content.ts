import "./style.css";

function Content(): string {
  return `
  <div class="contentContainer border-4 w-[50vw] h-auto p-10">
    <div class="content">
      <section id="wprowadzenie" class="flex flex-col min-h-screen">
        <header class="pb-10 border-l-4 border-blue-700 h-[5px] pl-[20px]">
          <h1 class="font-bold text-4xl "> <span>👋</span> Wprowadzenie </h1>
        </header>

        <p class="text-[20px] pt-10">
        Cześć! W tej części poradnika otrzymasz <span class="text-blue-500">ogólne</span>
        wprowadzenie do sprawdzania
        <br />
        (tzw. <span class="text-blue-500"><a href="#">PC CHECKING </a></span>)


        </p>

      </section>
    </div>
  </div>
  `;
}

export default Content;
