// STRICT pathname comparison only. One active link; no includes(); no default dashboard active; no dropdown logic.
document.addEventListener("DOMContentLoaded", () => {
    const pathname = window.location.pathname;
    const currentFile = pathname.split("/").pop() || "index.html";

    let navLinks = document.querySelectorAll(".nav-link");
    if (navLinks.length === 0) navLinks = document.querySelectorAll("#desktop-menu a, #mobile-menu a");

    navLinks.forEach(link => {
        const rawHref = (link.getAttribute("href") || "").trim();
        const hrefPath = rawHref.split("?")[0];
        const linkFile = hrefPath.split("/").pop() || "";
        const isActive = linkFile && linkFile === currentFile;

        link.classList.remove("text-primary", "font-bold", "dark:text-primary");
        link.classList.add("font-medium", "dark:text-gray-300");
        if (isActive) {
            link.classList.remove("font-medium", "dark:text-gray-300");
            link.classList.add("text-primary", "font-bold", "dark:text-primary");
        }
    });
});
