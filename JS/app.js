import {users} from './user.js';

function renders(users){

    if(!users){
        throw 'The user is not available'
    }

    // const list = users

    const list =  users.map((item)=>{
        return item.name ;
    }).join(',');


    return list;


}


users.then((data)=>{

    try{
        console.log(renders(data));

    }catch(err){
        console.log(err);

    }

})

// try {
//     console.log(renders(users))  

// }catch(err){
//     console.log(err);
// }


