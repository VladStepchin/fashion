const audio = new Audio("song.mp3")
const button = document.getElementById("secret")
const alina = document.getElementById("alina")

button.addEventListener("click", () => {
    audio.play()
    alina.classList.remove("hidden")
    alina.classList.add("visible")
})