let showUserData = document.getElementById("show-data")

function calculateAge(userValue) {
    let userAge = new Date(userValue.value)
    let now = new Date()

    let userYear = now.getFullYear() - userAge.getFullYear()
    let userMonth = now.getMonth() - userAge.getMonth()
    let userDate = now.getDate() - userAge.getDate()

    if (userMonth < 0 || (userMonth === 0 && userDate < 0)) {
        userYear--;
        userMonth += 12;
    }

    if (userDate < 0) {
        userMonth--;
        let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        userDate += prevMonth;
    }

    let showResult = `You are ${userYear} years, ${userMonth} months, and ${userDate} days old.`


    showUserData.textContent = showResult
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault()
    let getData = document.getElementById("getDate")
    if(getData.value === "") {
        alert("Please enter age")
    } else {
        calculateAge(getData)
    }
})

document.getElementById("clear-data").addEventListener("click", function() {
    showUserData.textContent = ""
})