let nameArr = [];
let scoreArr = [];
let timeArr = [];

window.onload = () => {
    nameArr = nameArr + localStorage.getItem("name");
    scoreArr = scoreArr + localStorage.getItem("score");
    timeArr = timeArr + localStorage.getItem("time");

    console.log(nameArr);

    localStorage.setItem("nameArr", JSON.stringify(nameArr));
    localStorage.setItem("scoreArr", JSON.stringify(scoreArr));
    localStorage.setItem("timeArr", JSON.stringify(timeArr));
}