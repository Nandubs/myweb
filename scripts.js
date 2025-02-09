let currentVisibleSection = null;

function navigateToSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    const targetSection = document.getElementById(sectionId);

    // Hide the currently visible section
    if (currentVisibleSection) {
        currentVisibleSection.classList.add("hidden");
        currentVisibleSection.classList.remove("visible");
    }

    // Show the target section
    targetSection.classList.remove("hidden");
    targetSection.classList.add("visible");

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Update the currently visible section
    currentVisibleSection = targetSection;

    // Toggle back-to-top button
    const backToTop = document.getElementById("backToTop");
    if (sectionId !== "hero") {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}
