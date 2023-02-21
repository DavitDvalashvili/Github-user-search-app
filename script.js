const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const title = document.querySelector(".title");
const themeText = document.querySelector(".theme-text");
const input = document.querySelector("#user");
const button = document.querySelector(".btn");



const flipTheme = (theme) => {
    if (theme === "dark") {
        moon.style.display = "none";
        sun.style.display = "block";
        document.body.style.backgroundColor = "#141D2F"
    } else {
        moon.style.display = "block";
        sun.style.display = "none";
        document.body.style.backgroundColor = "#f6f8ff";
    }
    title.classList.toggle("dark");
    themeText.classList.toggle("dark");
}
moon.addEventListener("click", () => flipTheme ("dark"));
sun.addEventListener("click", () => flipTheme ("light"));

button.addEventListener("click", async (event) => {
    event.preventDefault()
    try {
        const response = await axios.get("https://api.github.com/users/octocat");
        const user = response.data;
        console.log(user);
    } catch (error) {}
    
});