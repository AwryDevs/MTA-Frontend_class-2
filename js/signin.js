document.getElementById("signinForm").addEventListener("submit", function(e){
e.preventDefault();

 const Email = document.getElementById("email").value.trim();
 const Password = document.getElementById("password").value.trim();
 const error1 = document.getElementById("SignupError1");
 


    if(!Email|| !Password) {
        error1.textContent = "All fields are required.";
        return;
    }




    //Simulate success and redirect to login
    window.location.href ="Homepage.html";





})