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

// Set this to Annaura's real business email before launch.
const BUSINESS_EMAIL = "";
const form = document.getElementById("enquiry-form");
const status = document.getElementById("form-status");

document.querySelectorAll("[data-interest]").forEach((link) => {
  link.addEventListener("click", () => {
    const interest = document.getElementById("interest");
    if (interest) interest.value = link.dataset.interest;
  });
});

if (form) form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const company = String(data.get("company") || "").trim();
  const email = String(data.get("email") || "").trim();
  const interest = String(data.get("interest") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!BUSINESS_EMAIL) {
    status.textContent = "The enquiry form needs Annaura's business email (or a form service) before it can send enquiries. No information has been sent.";
    return;
  }

  const subject = encodeURIComponent(`Annaura business enquiry — ${interest}`);
  const body = encodeURIComponent(
    `Hello Annaura,\n\nI'm interested in: ${interest}.\n\nName: ${name}\nCompany: ${company || "Not provided"}\nEmail: ${email}\n\nRequirements:\n${message || "No additional message."}\n`
  );
  status.textContent = "Opening your email app to prepare the enquiry…";
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) { const targets=document.querySelectorAll(".section-pad, .brand-note, .category-card, .promise-grid article, .contact-form");targets.forEach(el=>el.classList.add("reveal"));const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");obs.unobserve(entry.target)}}),{threshold:.12});targets.forEach(el=>observer.observe(el));}
