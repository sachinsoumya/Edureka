// let script = document.createElement('script');
// script.src = `file:///D:/document.js`
// document.body.appendChild(script);

let node = document.getElementById("node");

let nodeList = document.getElementsByName("name");
let tagList = document.getElementsByTagName("input");
console.log(tagList);
console.log(nodeList);

console.log(Object.keys(nodeList));
console.log(Object.entries(nodeList));
console.log(Object.values(nodeList));

console.log(node);

let list = document.getElementsByClassName("mark mark2");
console.log(list);

let list2 = document.getElementById("exam").getElementsByClassName("mark");
console.log(list2);

console.log(document.querySelector("*"));
console.log(document.querySelectorAll("*"));
console.log(document.querySelectorAll("input"));
console.log(document.querySelector(".mark"));
console.log(document.querySelectorAll(".mark ,.mark2"));
console.log(document.querySelectorAll("div , ul "));
console.log(document.querySelectorAll("div input"));
console.log(document.querySelector("body ul"));
console.log(document.querySelectorAll("ul > li"));
console.log(document.querySelectorAll("ul#exam > li"));
console.log(document.querySelectorAll("div ~ ul"));
console.log(document.querySelectorAll("ul + button"));
console.log(document.querySelectorAll("li:nth-child(4)"));
// console.log(document.querySelector('p::firstLine'));

let note = document.querySelector(".mark2");
console.log(note.parentNode);
console.log(note.nextElementSibling);
console.log(note.previousElementSibling);
console.log(document.querySelectorAll(".mark + li"));
console.log(document.querySelector("#exam").firstChild);
console.log(document.querySelector("#exam").firstElementChild);
console.log(document.querySelector("#exam").lastElementChild);
console.log(document.querySelector("#exam").childNodes);
console.log(document.querySelector("#exam").children);

let div = document.createElement("div");
div.innerHTML = `<p>This is a test for creating a new Element</p>`;
document.body.appendChild(div);
let newDiv = document.createElement("div");
newDiv.innerHTML = `<div>Hello buddy</div>`;
console.log(newDiv);

let div2 = document.createElement("div");
div2.id = "list";
div2.innerHTML = "<ul><li>Cricket</li><li>Badmiton</li><li>Football</li></ul>";
document.body.appendChild(div2);
console.log(document.querySelector("#list"));
console.log(document.querySelector("#list").firstElementChild.childNodes);
console.log(
  document.querySelector("#list").firstElementChild.childNodes.length
);
console.log(document.querySelector("#list").firstElementChild.children);

let div3 = document.createElement("div");
div3.className = "link";
div3.innerHTML = `<a href="www.google.com">Click here</a>`;
document.body.appendChild(div3);
console.log(document.querySelector(".link"));

let div4 = document.createElement("div");
let div5 = document.createElement("div");
div4.id = "google";
div4.className = "yahoo";

let textNode = document.createTextNode("Hello , world!");
div5.textContent = "Hello , Bharat";

div4.appendChild(textNode);

document.body.appendChild(div4);
document.body.appendChild(div5);

let ul = document.createElement("ul");

let li = document.createElement("li");

li.textContent = "India";
let li2 = document.createElement("li");

li2.textContent = "USA";
let li3 = document.createElement("li");

li3.textContent = "UAE";
let li4 = document.createElement("li");

li4.textContent = "Srilanka";

ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
// ul.appendChild(li);

const generator = (name) => {
  let li = document.createElement("li");
  li.textContent = name;

  return li;
};

ul.appendChild(generator("Cabbage"));
ul.appendChild(generator("Bringle"));
ul.appendChild(generator("Samosa"));
document.body.appendChild(ul);

let i = 3;

const liGenerator = (...args) => {
  let x = 0;
  let arr = [];
  while (i > 0) {
    li = document.createElement("li");
    li.textContent = args[x];

    i--;
    x++;

    arr.push(li);
  }

  return arr;
};

let [firstLi, secondLi, thirdLi] = liGenerator("Rice", "Wheat", "Mandia");

ul.appendChild(firstLi);
ul.appendChild(secondLi);
ul.appendChild(thirdLi);
ul.appendChild(firstLi); //* appendChild is used to append the child node at the end of the list of a specified parent element.and it is also used in moving the exsiting list item to a new position.

document.body.appendChild(ul);

let text = document.querySelector("#rest");
console.log(text.textContent); //* textContent will return the concatenation of text content of the child nodes
console.log(text.innerText); //* innerText will return the human readable text content which takes css into account.
document.querySelector("#rest").textContent = "I love my India";
document.querySelector("#rest").innerText = "I love my Odisha";

console.log(document.querySelector("#exam").innerHTML);

document.querySelector("#exam").innerHTML = `<li> hello world! </li>`;
console.log(document.querySelector("#exam").innerHTML);

document.innerHTML = `<script >alert("Good morning")</script>`;

let div10 = document.querySelector(".red");

let p1 = document.createElement("p");
p1.textContent = "Hii Sachin";
div10.appendChild(p1); //* its efficient and better performance.

let div11 = document.querySelector(".red");

div11.innerHTML += `<div>Hii Soumya</div>`; //* its not efficient because reparsing and recreation of all nodes is happening which is expensive.

let div12 = document.querySelector(".red");

let fragment = document.createDocumentFragment();

//? for(let i =0 ; i< 10 ;i++){

//?   let p = document.createElement('div');

//?   p.innerText = `paragraph ${i}`;

//?   div12.appendChild(p);
//? }

for (let i = 0; i < 10; i++) {
  let p = document.createElement("div");
  p.innerText = `paragraph ${i}`;

  fragment.appendChild(p);
}

div12.appendChild(fragment);

let r = document.querySelector(".red");
let fr = document.createDocumentFragment();
let d = document.getElementById("rest");

console.log(d.firstChild);
fr.appendChild(d.firstChild);
r.appendChild(fr);

let Cricketer = [
  "Rohit Sharma",
  "Virat Kohli",
  "Yaswaswi",
  "SubmanGill",
  "Love",
];

let fr3 = document.createDocumentFragment();

Cricketer.forEach((crName) => {
  let cr = document.createElement("li");

  cr.innerText = crName;

  fr3.appendChild(cr);
});

document.querySelector("#rest").appendChild(fr3);

let bl = document.querySelector(".blue");

const rainbow = ["Orange", "Green", "Yellow", "Violet", "Indigo", "Blue"];

const fr7 = document.createDocumentFragment();

const rb = rainbow.map((color) => {
  let li = document.createElement("li");

  li.innerText = color;

  fr7.appendChild(li);

  return li;

  // return ;
});

// fr7.appendChild();

console.log(rb);

bl.appendChild(fr7);

bl.firstElementChild.after(...rb);

const movie = document.querySelector(".movie");

const node10 = document.createElement("li");
node10.innerText = "Salaar";

const blockbuster = ["RRR", "Pushpa", "KGF2", "Ugram"];

const bk = blockbuster.map((item) => {
  const node10 = document.createElement("li");

  node10.innerText = item;
  return node10;
});

console.log(movie.firstChild);
movie.firstElementChild.before(node10);
movie.firstElementChild.before(...bk);
movie.firstElementChild.before("❤️");
// movie.firstChild.after(...bk);
movie.firstElementChild.after(...rb);
movie.lastElementChild.after(...rb);
movie.firstElementChild.after("JAWAN", "Pathan", "Dunki");

const listing1 = document.querySelector(".red");

listing1.insertAdjacentHTML("beforebegin", "<h2>This is beforebegin</h2>");
listing1.insertAdjacentHTML("afterbegin", "<li>This is afterbegin</li>");
listing1.insertAdjacentHTML("beforeend", "<li>This is beforeend</li>");
// listing1.insertAdjacentHTML();

console.log(
  listing1.insertAdjacentHTML("afterend", "<h2>This is afterend</h2>")
);

const re = document.createElement("li");

re.innerText = "Apple";

const re2 = document.createElement("li");
re2.innerText = "Banana";

console.log(listing1.replaceChild(re, listing1.firstElementChild));
listing1.replaceChild(re2, listing1.firstElementChild.nextElementSibling);

let clone = listing1.cloneNode(false);
clone.className = "cherry";
let new_child = document.createElement("li");

new_child.innerText = "Tum bin";
// clone.insertAdjacentHTML('afterbegin' , '<li>Hellos</li>');
clone.insertBefore(new_child, clone.firstElementChild);
// clone.firstElementChild = new_child
document.body.appendChild(clone);

listing1.removeChild(listing1.firstElementChild);

listing1.innerHTML = "";
clone.innerHTML = "";

clone.insertBefore(re2, clone.firstElementChild);
clone.insertBefore(re, clone.firstElementChild.nextElementSibling);

console.log(document.getElementById("node").style);
console.log(document.getElementById("node").style.color);
console.log(document.getElementById("node").style.cssText);
console.log(window.getComputedStyle(document.getElementById("node")));
console.log(document.querySelector(".btn").style);
console.log(document.querySelector(".btn").style.cssText);

// document.querySelector('.btn').style.cssText = 'padding:20px';

document.querySelector(".btn").style.cssText += "padding:10px";
console.log(document.querySelector(".btn").style.cssText);

console.log(window.getComputedStyle(document.querySelector(".btn")));
// getComputedStyle(document.querySelector('.btn')).fontSize = '15px';
console.log(getComputedStyle(document.querySelector(".btn")));
// getComputedStyle(document.querySelector('.btn')).setProperty('fontSize', '5px');

const l = getComputedStyle(document.querySelector("a"), ":hover");

console.log(l);
console.log(getComputedStyle(document.querySelector('p') , '::first-letter'));


console.log(document.querySelector('.btn').className)



// s
// let r1 = document.querySelector('.red');

// let fr1 = new DocumentFragment();
// fr1.appendChild('r');

// document.body.appendChild(fr1);

// let script = document.createElement('script');
// script.src = `/document.js`
// document.body.appendChild(script);

// document.body.appendChild(ul);

// document.body.appendChild(ul);

//  if(node.nodeType === Node.ELEMENT_NODE){
//     let name = node.nodeName;
//     console.log(name);
//  }else{
//     console.log('its a text node')
//  }
