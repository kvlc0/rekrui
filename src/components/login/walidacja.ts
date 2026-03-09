import { Login } from "./data/loginData";
import Router from "../../router";

function Walidacja(): void {
  const loginInput =
    document.querySelector<HTMLInputElement>(".loginInput")?.value;
  const passInput =
    document.querySelector<HTMLInputElement>(".passInput")?.value;

  if (loginInput === Login[0].Login && passInput === Login[0].Pass) {
    location.href = "#home";
    Router();
  } else {
    console.log("error!, repeat!");
    alert("Stop!");
  }
}

export default Walidacja;
