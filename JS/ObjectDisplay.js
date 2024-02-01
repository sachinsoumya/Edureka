const items={
    name:"bengali items",
    number:10,
    price:2000,
    date : new Date(),
    work:function(){
        return `${items.name} and ${items.date}`
    }


}
//1 - using dot notation 
console.log(items.price);
//2 - using for in loop

for(x in items){
    console.log(x , items[x]);
}
//3- using Object.values()

console.log(Object.values(items));
console.log(Array.from(items));
console.log(JSON.stringify(items));
console.log(items.work());
items.work = items.work.toString();
console.log(JSON.stringify(items));

