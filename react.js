const App_button = document.getElementById("App.jsx_button")
const Post_button = document.getElementById("Post.jsx_button")

const App_image = document.getElementById("App.jsx")
const Post_image = document.getElementById("Post.jsx")

App_button.addEventListener("click", () => {
    document.querySelector("section#react .vscode-page.selected").classList.remove("selected")
    App_button.classList.add("selected")
    document.querySelector("section#react .vscode-img > .selected").classList.remove("selected")
    App_image.classList.add("selected")
})

Post_button.addEventListener("click", () => {
    document.querySelector("section#react .vscode-page.selected").classList.remove("selected")
    Post_button.classList.add("selected")
    document.querySelector("section#react .vscode-img > .selected").classList.remove("selected")
    Post_image.classList.add("selected")
})