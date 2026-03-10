import Render from "./main";
import LoginApp from "./components/login/LoginApp";
import Walidacja from "./components/login/walidacja";
import HomeApp from "./components/home/HomeApp";

function Router() {
  let page = location.hash;
  let test: string = "test";
  let login = LoginApp();
  let home = HomeApp();

  if (page === "#home") {
    Render(home);
    document.querySelector(".button-1")?.addEventListener("click", Walidacja);
  } else if (page.startsWith("#")) {
    Render(home);
  } else {
    Render(login);
    document.querySelector(".button-1")?.addEventListener("click", Walidacja);
  }
}

export default Router;

addEventListener("hashchange", Router);
Router();
