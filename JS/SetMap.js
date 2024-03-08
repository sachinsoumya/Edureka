const s = new Set(["a", "b", "c" , "a" , "b" , "b" , "c" , "a"]);

const t=  new Set([1 ,2 ,4 ]);

const ch1 = new Set(["b" , 1])
console.log(s);
s.add("f");
console.log(s.add("f"));
console.log(s);
console.log(s.size);
console.log(s.delete("a"));
console.log(s);
// console.log(s.clear());
// console.log(s);
console.log(s.difference(new Set(["b" , "F" , "G"])));


console.log(s.entries());

const entries = s.entries();

for(i of entries){
    console.log(Array.isArray(i));
    console.log(i);
}

const keys = s.keys();
console.log(keys);

for ( i of keys){
    console.log(i);
}

const values= s.values();
console.log(values);

for(i of values){
    console.log(i);
}

const ss = s.forEach((item)=>item);
console.log(ss);

let str = ""

const xxx = s.forEach((item)=> str+=item);
console.log(xxx);

console.log(str);

console.log(s.has("f"));


const su = s.union(t);
console.log(su);

console.log(ch1.isSubsetOf(su));
console.log(su.isSupersetOf(ch1));
console.log(ch1.intersection(t));

console.log(typeof ch1);
console.log(ch1 instanceof Set);
console.log(ch1 instanceof Object)
console.log([...s]);

// console.log(Array.from(s))   ;c

