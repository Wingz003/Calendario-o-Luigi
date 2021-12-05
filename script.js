let currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format('dddd MMMM Do');
document.getElementById("9am").classList.add(getTimeClass(9));
document.getElementById("10am").classList.add(getTimeClass(10));
document.getElementById("11am").classList.add(getTimeClass(11));
document.getElementById("12pm").classList.add(getTimeClass(12));
document.getElementById("1pm").classList.add(getTimeClass(13));
document.getElementById("2pm").classList.add(getTimeClass(14));
document.getElementById("3pm").classList.add(getTimeClass(15));
document.getElementById("4pm").classList.add(getTimeClass(16));
document.getElementById("5pm").classList.add(getTimeClass(17));

document.getElementById("save9").addEventListener("click", saveText);
document.getElementById("save10").addEventListener("click", saveText);
document.getElementById("save11").addEventListener("click", saveText);
document.getElementById("save12").addEventListener("click", saveText);
document.getElementById("save1").addEventListener("click", saveText);
document.getElementById("save2").addEventListener("click", saveText);
document.getElementById("save3").addEventListener("click", saveText);
document.getElementById("save4").addEventListener("click", saveText);
document.getElementById("save5").addEventListener("click", saveText);
function saveText(event) {
    let time = event.target.id;
    let text = $(event.target).parent().siblings()[1].value
    localStorage.setItem(time, text)
}

function loadText() {
    document.getElementById("9am").value = localStorage.getItem("save9");
    document.getElementById("10am").value = localStorage.getItem("save10");
    document.getElementById("11am").value = localStorage.getItem("save11");
    document.getElementById("12pm").value = localStorage.getItem("save12");
    document.getElementById("1pm").value = localStorage.getItem("save1");
    document.getElementById("2pm").value = localStorage.getItem("save2");
    document.getElementById("3pm").value = localStorage.getItem("save3");
    document.getElementById("4pm").value = localStorage.getItem("save4");
    document.getElementById("5pm").value = localStorage.getItem("save5");

}
loadText();
function getTimeClass(time) {
    if(moment().hour() > time) {
        return "past";
    }
    if(moment().hour() < time) {
        return "future";
    }
    if (moment().hour() === time) {
        return "present";
    }
}
