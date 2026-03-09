import Header from "./components/Header.ts";
import Sidebar from "./components/Sidebar.ts";

function HomeApp(): string {
  const head = Header();
  const side = Sidebar();

  return `
    <div class="pageElements flex flex-col min-h-screen">
      <div class="pageHeader flex justify-center">
        ${head}
      </div>

      <div class="pageLoginElement flex flex-1 p-10">
        ${side}
      </div>
    </div>
  `;
}

export default HomeApp;
