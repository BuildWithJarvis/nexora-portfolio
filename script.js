
// Update the footer year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Reveal sections as you scroll
const sections = document.querySelectorAll(
  ".about, .services, .projects, .contact"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  });

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
} else {
  sections.forEach((section) => {
    section.classList.add("is-visible");
  });
}

// Highlight navigation links when clicked
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
