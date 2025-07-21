document.getElementById("createAccount").addEventListener("submit", function(e){
e.preventDefault();

 const username = document.getElementById("username").value.trim();
 const password = document.getElementById("password").value.trim();
 const error3 = document.getElementById("SignupError3");
 


    if(!username|| !password) {
        error3.textContent = "All fields are required.";
        return;
    }




    //Simulate success and redirect to login
    window.location.href ="Homepage.html";





})