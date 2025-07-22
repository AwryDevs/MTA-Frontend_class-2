const tasking = document.getElementById("tasking")

tasking.addEventListener("click",function() {
    const texttask =document.getElementById("texttask");

    const tilting = texttask.value.trim();

    if(tilting === "") {
        alert("Please enter a task");
        return;
    }
})
