const fs = require('fs');
// const quote = "Make everyday special";
// fs.writeFile("text.txt", quote , ()=>{ // it will take 3 args like file name , contents amnd call back
//     console.log('completed');
// } );
 const quote2 = "Live more worry less";
// //create a below file with this quote

// for(let i =1 ;i<=10 ;i++){
//     fs.writeFile(`./backup/text${i}.html` ,quote2 , ()=>{
//         console.log(`completed writing text${i}.html`);
//     })
// }

// const [ , , noArgs] = process.argv;
// console.log(noArgs);
// quote3 ='Happy Coding!'

// for(let i = 1 ;i<=noArgs ;i++){
//     fs.writeFile(`./backup/file${i}.txt` , quote3 ,()=>{
//         console.log(`completed writing text${i}.txt`);
//     } )
// }

// fs.readFile("./cooll.txt" ,"utf-8" ,(err , data)=>{
//     if(err){
//         console.log("Error" , err);
//     }
//     else{
//         console.log("The content of the file is"+ data);
//     }
// })
  
fs.writeFile('./cool.txt' , quote2 , ()=>{
    console.log('completed writing');
})
 const quote3 = '\nEveryone'
// fs.appendFile('./nice.txt' , quote3 , ()=>{
//     console.log('completed writing');
// })

fs.unlink('./nice.txt' , (err)=>{
    if(err)throw err;
    console.log('Deleated');
})

