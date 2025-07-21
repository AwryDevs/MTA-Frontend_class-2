document.getElementById("signupForm").addEventListener("submit", function(e){
e.preventDefault();

 const firstname = document.getElementById("firstname").value.trim();
 const lastname = document.getElementById("lastname").value.trim();
 const signupEmail = document.getElementById("signupEmail").value.trim();
 const password = document.getElementById("password").value.trim();
 const ConfirmPassword = document.getElementById("Confirmpassword").value;
 const error1 = document.getElementById("SignupError");
 



    if(!firstname|| !lastname || !signupEmail || !password || !ConfirmPassword) {
        error1.textContent = "All fields are required.";
        return;
    } 
    
    if(password.length < 10) {
        error1.textContent = "Password less than 10.";
        return;
    }

    if(password!== ConfirmPassword) {
        error1.textContent = "Password do not match.";
        return;
    }

    

    //Simulate success and redirect to login
    window.location.href ="Login.html";
   



})