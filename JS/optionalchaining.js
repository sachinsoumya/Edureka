function getUser(id) {

    if(id <= 0) {
        return null;
    }

    // get the user from database
    // and return null if id does not exist
    // ...
    
    // if user was found, return the user
    return {
        id: id,
        username: 'admin',
        // profile: {
        //     avatar: '/avatar.png',
        //     language: 'English'
        // }
    }
}
let user = getUser(2);
let profile = user?.profile;
console.log(profile);
// console.log(user);

let defaultProfile = { name:'Sachin' , fame:'money'}
let display = user?.profile ?? defaultProfile
console.log(display);

