function checkAwry(num) {
    if (num > 0) {
        return "Positive";
    } else if (num === 0) {
        return "Zero";
    } else {
        return "Negative";
    }
}
undefined
checkAwry(1)
'Positive'
function getAwry() {
    let hour = new Date()
    if (hour < 12) {
        return "Good morning";
    } else if (hour < 17) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}
undefined
getAwry()
'Good evening'
function checkAwry(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 70) {
        return "Good";
    } else if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}
undefined
checkAwry(90)
'Excellent'
function weatherAwry(weather) {
    if (weather === "rainy") {
        return "Take an umbrella";
    } else if (weather === "sunny") {
        return "Wear sunscreen";
    } else if (weather === "cold") {
        return "Dress warm";
    } else {
        return "Enjoy your day!";
    }
}
undefined
weatherAwry("rainy")
'Take an umbrella'
function checkAwry(age) {
    if (age < 13) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else if (age >= 20 && age <= 64) {
        return "Adult";
    } else {
        return "Senior";
    }
}
undefined
checkAwry(60)
'Adult'
function checkAwry() {
    let day = new Date();
    if (day === 0 || day === 6) {
        return "It's the weekend";
    } else {
        return "It's a weekday";
    }
}
undefined
checkAwry()
"It's a weekday"
function trafficAwry(color) {
    if (color === "green") {
        return "Go";
    } else if (color === "yellow") {
        return "Slow down";
    } else if (color === "red") {
        return "Stop";
    } else {
        return "Invalid traffic light color";
    }
}
undefined
trafficAwry("yellow")
'Slow down'
function welcomeAwry(role) {
    if (role === "admin") {
        return "Welcome Admin";
    } else if (role === "editor") {
        return "Welcome Editor";
    } else if (role === "viewer") {
        return "Welcome Viewer";
    } else {
        return "Role not recognized";
    }
}
undefined
welcomeAwry("editor")
'Welcome Editor'
function checkAwry(attendancePercentage) {
    if (attendancePercentage === 100) {
        return "Perfect Attendance";
    } else if (attendancePercentage >= 75) {
        return "Good Attendance";
    } else {
        return "Low Attendance";
    }
}
undefined
checkAwry(99)
'Good Attendance'