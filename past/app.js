// alert("hi");

// const title = document.getElementById('title')

var hi = document.querySelector('div:first-child h1#title')
// console.log(title)
// console.dir(title)

hi.innerText = 'hello';

function handleTitleClick() {
    text = document.querySelector('#title');
    text.innerText = 'Clicked!';
    console.log('title was clicked!');
    box = document.querySelector('input');
    ot = document.querySelector('textarea');

    box.in = 'title was clicked!!!';
    ot.innerText = 'title was clicked!!!';
    text.classList.toggle('active');

}

function handleMouseEnter() {
    text = document.querySelector('#title');
    text.innerText = 'Mouse is Here!!!!';
    ot = document.querySelector('textarea');
    ot.innerText = 'mouse is here'
}
function handleMouseLeave() {
    text = document.querySelector('#title');
    text.innerText = 'The mouse is gone';
    ot = document.querySelector('textarea');
    ot.innerText = ''
}

box = document.querySelector('input');
hi.addEventListener("click", handleTitleClick);
hi.addEventListener("mouseenter", handleMouseEnter)
hi.addEventListener("mouseleave", handleMouseLeave);

var h = document.querySelector("h1");
function hii() {
  if (window.innerWidth >= 800 && window.innerWidth < 1400) {
    document.body.style.backgroundColor = "purple";
  } else if (window.innerWidth < 800 && window.innerWidth >= 400) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "#aa2";
  }
}

window.addEventListener("resize", hii);
