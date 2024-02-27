let r = document.querySelector('.red');

let fr = document.createDocumentFragment();

fr.appendChild('This is created by document.fragment');

r.appendChild(fr);
