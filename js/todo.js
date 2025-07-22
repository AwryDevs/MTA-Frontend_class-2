//!get the button
const submit = document.getElementById("submit")

submit.addEventListener("click",function() {
    const Addanewtask =document.getElementById("Addanewtask");

    const typetask = Addanewtask.value.trim();

    if(typetask === "") {
        alert("Please enter a task");
        return;
    }

    
    const tracklist = document.getElementById("tracklist");

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "DELETE";

    const li = document.createElement("li");

    li.addEventListener("click", function() {
    li.style.textDecoration = "line-through"
    li.style.color = "orange";
    li.style.textTransform = "Uppercase"
    
    })
    deletebtn.addEventListener("click", function(){
        tracklist.removeChild(li)
    })

//Task: Create a button with javascript,Add the content called "delete" and add the tasklist with the button
    li.textContent = typetask;

    tracklist.appendChild(li);
    li.appendChild(deletebtn)

//Clear the input field
    Addanewtask.value = "";


})