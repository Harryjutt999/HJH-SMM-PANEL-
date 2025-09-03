/* ========================
   HJH SMM PANEL - SCRIPT
======================== */

// Simple form validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll("input, select, textarea");

  for (let input of inputs) {
    if (input.hasAttribute("required") && !input.value.trim()) {
      alert("⚠️ Please fill all required fields!");
      input.focus();
      return false;
    }
  }

  alert("✅ Form submitted successfully!");
  return true;
}

// Password match check (Profile Page)
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

if (password && confirm) {
  confirm.addEventListener("input", () => {
    if (password.value !== confirm.value) {
      confirm.setCustomValidity("Passwords do not match!");
    } else {
      confirm.setCustomValidity("");
    }
  });
}

// Example dashboard greeting
window.onload = function () {
  const navbar = document.querySelector(".navbar");
  if (navbar && navbar.innerText.includes("Dashboard")) {
    navbar.innerText += " | Welcome, HJH User 🚀";
  }
};
