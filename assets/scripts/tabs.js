document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".pageTab");
    const contents = document.querySelectorAll(".tabContent");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const target = tab.dataset.target;

            // hide all tab contents
            contents.forEach(c => c.classList.remove("active"));
            // show selected content
            document.getElementById(target).classList.add("active");
        });
    });
});