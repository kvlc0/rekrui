import Render from "./main";
import Walidacja from "./components/login/walidacja";
import("./style.css");

const { default: LoginApp } = await import("./components/login/LoginApp");
const { default: HomeApp } = await import("./components/home/HomeApp");
const { cAdd } = await import("./utils/utils");

function Router() {
  let page = location.hash;
  let login = LoginApp();
  let home = HomeApp();

  if (page === "#home") {
    Render(home);
    cAdd(".header-0", "w-[90vw]", "w-[10vw]");
  } else if (page.startsWith("#")) {
    Render(home);
    cAdd(".header-0", "w-[90vw]", "w-[10vw]");
  } else {
    Render(login);
    document.querySelector(".button-1")?.addEventListener("click", Walidacja);
  }
}

export default Router;

addEventListener("hashchange", Router);
Router();
