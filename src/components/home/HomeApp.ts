import Header from "./components/Header.ts";

function HomeApp(): string {
  const head = Header();

  return `
    <div class="pageElements flex flex-col min-h-screen">
      <div class="pageHeader flex justify-center">
        ${head}
      </div>

      <div class="pageLoginElement flex flex-1 justify-center items-center">
      </div>
    </div>
  `;
}

export default HomeApp;
