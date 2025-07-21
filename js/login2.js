document.getElementById("createAccount").addEventListener("submit", function(e){
e.preventDefault();

 const username = document.getElementById("username").value.trim();
 const firstname = document.getElementById("firstname").value.trim();
 const lastname = document.getElementById("lastname").value.trim();
 const email = document.getElementById("email").value.trim();
 const password = document.getElementById("password").value.trim();
 const Confirmpassword = document.getElementById("Confirmpassword").value;
 const error2 = document.getElementById("SignupError2")



    if(!username || !firstname || !lastname || !email || !password || !Confirmpassword) {
        error2.textContent = "All fields are required"
        return;
    }

    if(!password.length < 10) {
        error2.textContent = "Password not up to 10"
        return;
    }



    //Simulate success and redirect to login
    window.location.href ="signin2.html";








})