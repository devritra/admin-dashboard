function setTheme(){
    const root = document.documentElement;
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
    let title = document.querySelector(".theme_toggle>title");
    let titleText = title.textContent === "Light Mode" ? "Dark Mode" : "Light Mode";
    title.textContent = titleText;
}
document.documentElement.className = "light";
document.querySelector(".theme_toggle").addEventListener("click",setTheme);
