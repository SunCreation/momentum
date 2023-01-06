const form = document.querySelector("form");
const nowStatus = document.querySelector(".status");
const nowScore = document.querySelector(".mesage");
const result = document.querySelector(".result");
const inputList = form.querySelectorAll("input");
const btn = form.querySelector(".btn");
let count = 0; 
let num = 0;
const Status = document.querySelector("blockquote");

function genNumber() {
    num = Math.floor(Math.random()*(Number((inputList[0]).value)+1));
    nowStatus.innerText = "Randomnumber is generated!!";
    const toggle = document.createElement("details");
    const summary = document.createElement("summary");
    const contents = document.createElement("div");
    summary.innerText = "number check";
    contents.innerText = num;
    toggle.appendChild(summary);
    toggle.appendChild(contents);
    Status.appendChild(toggle);
    count = 0;

}
function submitEvent(event) {
    event.preventDefault();
    count = count + 1;
    if (count < 5) {
        if (num>Number(inputList[1].value)) {
            result.innerText = `Up! count: ${count}`;
        } else if (num<Number(inputList[1].value)) {
            result.innerText = `Down! count: ${count}`;
        }else{
            result.innerText = "You won!";
        }
    } else {
        if (num===Number(inputList[1].value)) {
            result.innerText = "You won!";
        } else{
            result.innerText = "You lose!"
            nowScore.innerText = `You chose: ${inputList[1].value}, the machine chose: ${num}`;
        }
    }
}
// form으로 버튼을 누르는 방식
form.addEventListener("submit", submitEvent);
// 클릭으로 하는 방식 중 onclick을 사용하는 방식
btn.onclick = genNumber