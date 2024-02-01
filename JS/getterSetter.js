class Student {
    constructor(name , roll , school , clas , mark='unknown'){
        this.name= name;
        this.rollno= roll;
        this.schl = school;
        this.clas = clas;
        this.mark = mark;

    }

    get marks (){
        
        return `${this.name} of ${this.rollno} in ${this.clas} from ${this.schl} with mark ${this.mark}`;

    }

    set marks (mark){
        if(!Array.isArray(mark)){
            console.log('not an array')
           
            throw `invalid number`
            
        }

        let fmark = mark.reduce((total , item )=>{
           return total+item;
        }, 0);

        this.mark = (fmark/600)*100 + "%";

        



    }


}

const s = new Student("Jithen Sahu" , 10011 , "Public High School" , 10 );
console.log(s.marks);
s.marks= [50,60,60,40,90,30];

console.log(s.marks);
