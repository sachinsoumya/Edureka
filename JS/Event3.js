//* To create the custom event we can use Event constructor or use specific event Constructor like MouseEvent , TouchEvent or KeyBoard event like this
// * isTrusted property will be false in case of custom event
// * isTrusted property will be true incase of user Event on document.
// * So we can use this isTrusted property to check that event is coming from custom event or user event.

const btn = document.querySelector(".btn2");
btn.onclick = (e) => {
  console.log(e);

  console.log("btn is clicked  " + e.type + e.target);
  !e.isTrusted
    ? (btn.innerText = "Its a custom event")
    : (btn.innerText = "Its a physical event");
};
const customEvent = new Event("click");

setTimeout(() => {
  btn.dispatchEvent(customEvent);
}, 1000);

btn.onmouseout = function () {
  btn.innerText = "open modal";
};

//Its recomended to use specific mouse constructor rather then Event construtor or base consrtuctor like event  because this will provide more information about the event
const btn2 = document.querySelector(".iball");
btn2.addEventListener("click", (e) => {
  !e.isTrusted ? console.log(e) : console.log("It is a a custom event");
});

//* Here we are using MouseEvent

const ev = new MouseEvent("click", {
  clientX: 150,
  clientY: 150,
  bubbles: true,
  cancelable: true,
});

btn2.dispatchEvent(ev);

//* use CustomEvent constructor for creating events and it decouples the component or code or losely coupled that means 
// * we can have event listeners after some piece of code or an another script like this
const cowFound = new CustomEvent("cowfound", {
  detail: {
    name: "Sunduri",
  },
});

const dogFound = new CustomEvent("dogfound", {
  detail: {
    name: "Bagha",
  },
});

window.addEventListener("cowfound", (e) => {
  console.log(e.detail.name);
});

window.addEventListener("dogfound", (e) => {
  console.log(e.detail.name);
});

window.dispatchEvent(cowFound);
window.dispatchEvent(dogFound);

const cev = new CustomEvent("hello", {
  detail: {
    bgColor: "red",
  },
});

document.querySelector(".scrlRight").addEventListener("hello", function (e) {
  console.log(this);
  this.classList.add("scrlColor");
  this.classList.contains('scrlColor') &&  console.log('Hii')
});

setTimeout(() => {
  document.querySelector(".scrlRight").dispatchEvent(cev);
}, 3000);
