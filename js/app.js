const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form:first-child input");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = 'username'
const output = document.querySelector(".output");
// const loginButton = document.querySelector("#login-form input");

function loginSubmit(what) {
    what.preventDefault()
    console.log(loginInput.value)
    logadd(`Hello ${loginInput.value}`)
    // logadd(what)
    console.log(what)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    output.classList.remove(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    // greeting.classList.remove(HIDDEN_CLASSNAME)
    // greeting.innerText = `hello ${loginInput.value}

}

function logadd(text) {
    output.innerText = text
}
// logadd(loginInput.value)
// loginButton.addEventListener('click',loginBtnClick)
// loginForm.addEventListener("submit", loginSubmit);

const userName = localStorage.getItem(USERNAME_KEY);

if (userName===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    output.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginSubmit);
}else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    output.classList.remove(HIDDEN_CLASSNAME);
    logadd(`Hello ${userName}`)
}