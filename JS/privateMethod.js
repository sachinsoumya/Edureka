//private instance methods , private static methods , private getters and setters 

class Person {
    #firstName ;
    #lastName;
    constructor(firstName , lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    getFullName (){
        return `${this.#firsName()} and ${this.#lasName()}`
    }

    #firsName(){
        return this.#firstName ;

    }

    #lasName(){
        return this.#lastName;
    }
}
let p = new Person('John' , 'Doe');
console.log(p.getFullName());


//private static methods

class Teacher {
    #firstName;
    #lastName;
    constructor(firstName,lastName){
        this.#firstName=Teacher.#validate(firstName);
        this.#lastName=Teacher.#validate(lastName);
    }

        static #validate(name){
            if(typeof(name) === 'string'){
                let str = name.trim();
                if(str.length >= 3){
                   return str;
                }
                else{
                    return `name should have minimun three characters`
                }
                

            }
            else{
                throw 'name should be string type'
            }


        }
        #firsName(){
            return `${this.#firstName}`
        }

        #lasName(){
            return `${this.#lastName}`
        }
        getFullName(){
            return `${this.#firstName} ${this.#lastName}`
        }
    

    // getFullName(){
    //     return `${this.#firstName} ${this.#lastName}`
    // }


    // static #firsName (firstName){
    //     return firstName;
    // }
    // static #lasName(lastName){
    //     return lastName;
    // }
}
let t = new Teacher('joe' , 'Doe');
console.log(t.getFullName());



class Husband{
    #firstName;
    #lastName;
    
    constructor(firstName ,lastName){
        this.#firstName = Husband.#validate(firstName,1);
        this.#lastName = Husband.#validate(lastName,0);
    }
    static #validate(name ,cat){
        
        if(cat==1){
           return Husband.#validate1(name);

        }
        else{
            return Husband.#validate2(name);
        }

    }

        static #validate1(firstName){
            if(typeof firstName==='string'){
                let str = firstName.trim();
                if(str.length>=3){
                    return str;
                }
                else{
                    return 'firstName should be atleast 3 charscters'
                }
            }
            else{
                return 'firstName should be string'
            }
        }
        static #validate2(lastName){
            if(typeof lastName==='string'){
                let str = lastName.trim();
                if(str.length>=3){
                    return str;
                }
                else{
                    return `lastName should be atleast 3 charscters`
                }
            }
            else{
                return `lastName should be string`
            }
        }
    getFullName(){
    return this.#firstName.includes(" ")?this.#firstName: this.#firstName +" " + this.#lastName ;
}
    
}
let h = new Husband('Tit' , 'Thomas');
console.log(h.getFullName());
