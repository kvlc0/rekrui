import Header from "./components/Header.ts";
import Sidebar from "./components/Sidebar.ts";
import Content from "./components/Content.ts";

function HomeApp(): string {
  const head = Header();
  const side = Sidebar();
  const content = Content();
  return `
    <div class="pageElements flex flex-col min-h-screen">
      <div class="pageHeader flex justify-center pt-2 pb-10">
        ${head}
      </div>

      <div class="pageLoginElement flex p-10 absolute pt-40">
        ${side}
      </div>

      <div class="pageLoginElement flex flex-1 justify-center pb-10 pt-10">
        ${content}
      </div>
    </div>
  `;
}

export default HomeApp;
