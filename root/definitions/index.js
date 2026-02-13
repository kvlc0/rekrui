const questions = document.querySelector(".questions")
const box = document.querySelector(".box")

const rollover = document.querySelectorAll(".btn-rollover")

rollover.forEach((acc) => {
    // Wewnątrz każdego kontenera szukamy jego własnego "contentu"
    const content = acc.querySelector(".btn-content");

    acc.onclick = () => {
        content.classList.toggle("max-h-0");
        content.classList.toggle("max-h-96");
        content.classList.toggle("opacity-0");
        content.classList.toggle("opacity-100");
    };
});