// ===============================
// 🔹 Step 1: Captcha Generate Function
// ===============================
const captchaTextEl = document.getElementById("captchaText");
const refreshBtn = document.getElementById("refreshCaptcha");

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  captchaTextEl.innerText = captcha;
}

// Page load आणि refresh वर captcha तयार करा
window.addEventListener("load", generateCaptcha);
refreshBtn.addEventListener("click", generateCaptcha);

// ===============================
// 🔹 Step 2: Login Form Validation + Redirect
// ===============================
const form = document.querySelector("form");
const messageBox = document.getElementById("loginMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Input values मिळवा
  const username = document.querySelector('input[type="text"]').value.trim();
  const password = document.querySelector('input[type="password"]').value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim();
  const currentCaptcha = captchaTextEl.innerText.trim();

  // Captcha तपासा
  if (captchaInput.toUpperCase() !== currentCaptcha.toUpperCase()) {
    messageBox.style.color = "#ff6b6b";
    messageBox.textContent = "❌ Captcha does not match";
    generateCaptcha(); // नवीन captcha तयार करा
    return;
  }

  // Username & Password तपासा
  if (username === "Gite@0486" && password === "Shreyas18") {
    messageBox.style.color = "#34d399";
    messageBox.textContent = "✅ Login Successful! Redirecting...";

    const loginContainer = document.querySelector(".login-container");
    loginContainer.style.transition = "transform 0.4s, box-shadow 0.4s, opacity 0.4s";
    loginContainer.style.boxShadow = "0 12px 60px rgba(52,211,153,0.12)";
    loginContainer.style.transform = "translateY(-6px)";

    // थोड्या वेळानंतर redirect करा
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    messageBox.style.color = "#ff6b6b";
    messageBox.textContent = "❌ Invalid username or password";
  }
  if (username === "Gite@0486" && password === "Shreyas18") {
  sessionStorage.setItem("loggedIn", "true"); // login status लक्षात ठेवतो
  window.location.href = "dashboard.html";    // dashboard वर पाठवतो
} else {
  alert("Invalid username or password");
}
});
