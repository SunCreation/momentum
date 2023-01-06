const clock = document.querySelector(".js-clock");
const toChristmas = document.querySelector(".to-christmas");
const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
function hi() {
    const now = new Date();
    clock.innerText = `now time: ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`
    const difference = new Date(xmasDay - now);
    toChristmas.innerText = `upto christmas: ${Math.ceil(difference/1000/60/60/24)} days` //${difference}`.slice(0,-31);
    console.log(xmasDay,now, difference/1000/60/60/24);
    // 날짜 차에서 개월수가 올림으로 처리되니 유의
}
hi()
setInterval(hi,1000);