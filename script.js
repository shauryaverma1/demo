const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

// Add Annaura's real business email here before launch.
const BUSINESS_EMAIL = "";

const form = document.getElementById("enquiry-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const interest = String(data.get("interest") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!BUSINESS_EMAIL) {
    status.textContent = "The enquiry form needs Annaura's business email (or a form service) before it can send enquiries. No information has been sent.";
    return;
  }

  const subject = encodeURIComponent(`Annaura enquiry — ${interest}`);
  const body = encodeURIComponent(
    `Hello Annaura,\n\nI'd like to enquire about: ${interest}.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message || "No additional message."}\n`
  );
  status.textContent = "Opening your email app to prepare the enquiry…";
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});