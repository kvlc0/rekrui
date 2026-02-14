const zawartosc = document.querySelector(".zawartosc") 
const push = document.querySelector(".push-element")
const taryfikator = document.querySelector("#taryfikator")
const taryfikatorShow = document.querySelector(".taryfikator-container")

zawartosc.onclick = () => {
    const text = "test"

    push.classList.add("absolute");
    push.classList.add("fadeinupp")
    push.classList.remove("hidden")

    setTimeout(() => {

    push.classList.remove("absolute");
    push.classList.remove("fadeinupp")
    push.classList.add("hidden")

    }, 2000)

    navigator.clipboard.writeText(text);
};

taryfikator.onclick = () => {
    zawartosc.classList.add("hidden")
    taryfikator.classList.add("text-blue-300")

    taryfikatorShow.classList.remove("hidden")
}