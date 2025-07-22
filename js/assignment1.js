const form = document.getElementById("signupForm");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(!firstname|| !lastname || !signupEmail || !password || !ConfirmPassword) {
        error1.textContent = "All fields are required.";
        return;
    } 

    if (username.length >= 10) {
      errorMsg.textContent = "Username must be less than 10 characters.";
      return;
    }
    if (firstname === "" || firstname.length < 4) {
      errorMsg.textContent = "First name must be at least 4 characters and not empty.";
      return;
    }
    if (lastname === "" || lastname.length < 4) {
      errorMsg.textContent = "Last name must be at least 4 characters and not empty.";
      return;
    }
    if (email.length < 6 || !email.includes("@")) {
      errorMsg.textContent = "Email must be at least 6 characters and include '@'.";
      return;
    }
    if (password.length < 10) {
      errorMsg.textContent = "Password must be at least 10 characters.";
      return;
    }
    if (password !== confirmPassword) {
      errorMsg.textContent = "Passwords do not match.";
      return;
    }

    errorMsg.style.color = "green";
    errorMsg.textContent = "Registration successful!";




});