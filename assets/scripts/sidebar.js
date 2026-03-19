const sidebar = document.querySelector(".sidebar");
const collapseBtn = document.querySelector(".collapseButton");

collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");       // shrink/expand sidebar
    collapseBtn.classList.toggle("collapsed");  // rotate arrow
});

