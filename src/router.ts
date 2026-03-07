import Render from "./main";

let page = location.hash;
let test: string = "test";

function Router() {
  if (page === "#home") {
    Render(test);
  } else if (page === "#test") {
    Render(test);
  } else {
    Render(test);
  }
}

export default Router;

addEventListener("hashchange", Router);
Router();
