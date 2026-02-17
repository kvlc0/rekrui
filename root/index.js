import { passwrdList } from './data.js';

const loginInput = document.querySelector(".input-log");
const passwordInput = document.querySelector(".input-pass");
const inputBtn = document.querySelector(".input-btn-content"); 

inputBtn.addEventListener("click", () => {
    const Validation = passwrdList.some(x => x.Pass === passwordInput.value && x.Login === loginInput.value)

    if (Validation) {
        window.location.href = "main/index.html";
    } else if (loginInput.value === "" || passwordInput.value === "") {
        alert("Wpisz swój login oraz hasło!");
    } else {
        alert("Upewnij się, że hasło lub login jest poprawny!");
    }})
