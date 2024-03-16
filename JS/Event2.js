// document.querySelector('.s5').onmousemove = (e)=>{
//     console.log(e.type);

// }

// document.querySelector('.s5').onmouseover = (e)=>{
//     console.log(e.type);

// }

document.querySelector(".s5").onmouseout = (e) => {
  console.log(e.type);
};

let text = document.getElementById("text");

document.querySelector(".iball").addEventListener("mouseup", (e) => {
  switch (e.button) {
    case 0:
      console.log("left button is clicked");
      text.textContent = "left button is clicked";
      break;
    case 2:
      console.log("Right button is clicked");
      text.textContent = "right button is clicked";
      break;
    default:
      console.log("unknown mouse button " + e.button);
  }
});

document.querySelector("#btn1").addEventListener("click", (e) => {
  let modifierKeys = [];

  if (e.shiftKey) modifierKeys.push("shift key");
  if (e.ctrlKey) modifierKeys.push("ctrl key");
  if (e.altKey) modifierKeys.push("alt key");
  if (e.metaKey) modifierKeys.push("meta key");

  let modifier = document.getElementById("text");

  modifierKeys.forEach((item) => {
    console.log("modifierKeys " + item);
    modifier.textContent += item;
  });
});

// document.querySelector('body').addEventListener('mousemove' , (e)=>{
//     console.log(`Screen X/Y  ${e.screenX} ${e.screenY}`);
//     console.log(`Client X/Y : ${e.clientX} and ${e.clientY}`);

// });

let letter = " ";
let x = document.querySelector('[type="text"]');
console.log(x);
x.addEventListener("keydown", (e) => {
  letter += e.key;
  console.log(letter);
  document.getElementById("text").textContent += e.key;
});

window.addEventListener("scroll", () => {
  console.log("scrolling....");
  console.log(window.scrollX);
  console.log(Math.round(window.scrollY));
});

window.onscroll = function () {
  console.log("Hello scrolling...");
  console.log(window.scrollX);
  console.log(Math.round(window.scrollY));
};

let scrolling = false;
window.onscroll = () => {
  scrolling = true;
};

setInterval(() => {
  if (scrolling) {
    scrolling = false;
  }

  let back = document.querySelector(".box");

  switch (window.scrollY) {
    case 400:
      back.classList.add("scrlColor");
      break;

    case 100:
      back.style.backgroundColor = "pink";
      break;
    case 200:
      back.style.backgroundColor = "grey";
      break;

    default:
      back.style.backgroundColor = "blue";
  }
}, 300);

let scroll2 = document.querySelector(".pencile");

scroll2.addEventListener("click", function (e) {
  let x = document.querySelector(".box");

  let target = e.target;

  switch (target.className) {
    case "scrlLeft":
      x.scrollLeft += 20;
      console.log("scrollLeft");
      break;
    case "scrlRight":
      x.scrollTop += 20;
      console.log("scrollRight");
      break;
  }
});

console.log(document.querySelector(".scrlLeft"));

document.querySelector(".scrlLeft").onclick = function (e) {
  console.log(e.scrollIntoVew);
};

document.querySelector(".intoViewTop").addEventListener("click", (e) => {
  document.querySelector(".view").scrollIntoView(true);
  // document.querySelector('.view').scrollIntoView(false);
});
document.querySelector(".intoViewButton").addEventListener("click", (e) => {
  document.querySelector(".view2").scrollIntoView(false);
  // document.querySelector('.view').scrollIntoView(false);
});

document.querySelector("#text1").addEventListener("focus", (e) => {
  e.target.style.backgroundColor = "green";
});

document.querySelector("#text1").onblur = (e) => {
  e.target.style.backgroundColor = "white";
};

window.onfocus = function (e) {
  e.target.style.backgroundColor = "red";
};

//* without Event Delegation -

//? document.querySelector('.view').onclick = (e)=> console.log(e.target);

//? document.querySelector('.view2').onclick = (e)=> console.log(e.target);

//* Event Delegation - comes from event bubbling

document.querySelector("#paper").onclick = (e) => {
  // console.log(e.target);

  switch (e.target.innerText) {
    case "HTML":
      console.log("HTML is clicked");
      document.querySelector('.intoViewTop').innerText= "HTML is clicked";
      break;

    case "CSS":
      console.log("CSS is clicked");
      document.querySelector('.intoViewTop').innerText= "CSS is clicked";
      break;
    case "Java":
      console.log("Java is clicked");
      document.querySelector('.intoViewTop').innerText= "Java is clicked";
      break;
    default:
      console.log("others are clicked");
      document.querySelector('.intoViewTop').innerText= "Others is clicked";
  }
};

// document.addEventListener('scroll' , ()=>{

// } , {passive:true})

// document.querySelector('.s5').onmouseenter = (e)=>{
//     console.log(e.type);
// }

// document.querySelector('.s5').onmouseleave = (e)=>{
//     console.log(e.type);
// }
