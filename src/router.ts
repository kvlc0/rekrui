import Render from "./main";
import LoginApp from "./components/login/LoginApp";

function Router() {
  let page = location.hash;
  let test: string = "test";
  let login = LoginApp();

  if (page === "#home") {
    Render(login);
  } else if (page === "#test") {
    Render(test);
  } else {
    location.href = "#login";
    Render(login);
  }
}

export default Router;

addEventListener("hashchange", Router);
Router();
