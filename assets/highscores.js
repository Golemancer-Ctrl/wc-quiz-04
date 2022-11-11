let nameArr = [];
let scoreArr = [];
let timeArr = [];

window.onload = () => {
    nameArr = nameArr + localStorage.getItem("name");
    scoreArr = scoreArr + localStorage.getItem("score");
    timeArr = timeArr + localStorage.getItem("time");

    console.log(nameArr);
}