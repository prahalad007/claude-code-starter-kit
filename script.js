// TODO (student task): make this toggle the .nav-links visibility on mobile
document.querySelector(".nav-toggle")?.addEventListener("click", () => {
  console.log("Nav toggle clicked — wire this up to show/hide .nav-links");
});

// TODO (student task): add real client-side validation (empty check, email format)
// and show a success/error message in #form-message instead of this placeholder.
document.getElementById("signup-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.getElementById("form-message");
  message.textContent = "Thanks! (this form isn't validated yet — that's your job)";
});
