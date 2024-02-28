let name1 = document.querySelector('.name').className;

console.log(name1);

document.querySelector('.name').className += ' same'
console.log(document.querySelector('.same').className);

document.querySelector('.name').className = 'info park';
console.log(document.querySelector('.park').className);

document.querySelector('.park').className +=" city";
console.log(document.querySelector('.park'));

let result = document.querySelector('.city').classList;
console.log(result);

result.forEach((item)=>{
    console.log(item);
});



const resultArr = Array.from(result);
console.log(resultArr);

const resultMap = resultArr.map((item)=>{
    console.log("Item is :"+item)
});

result.add('silicon' , 'vally' , 'india');
result.remove('silicon' , 'info');
result.replace('india' , 'bharat');
result.contains('bharat');
result.contains('india');
result.toggle('love');
result.toggle('love');
result.toggle('park');
console.log(result.entries());


console.log(Array.isArray(resultMap));





