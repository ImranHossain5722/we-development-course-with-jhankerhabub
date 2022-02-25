class Support{

    name ;
    role ='support web dev';
    address = 'Bd';
    constructor(name){
        this.name = name;

    }
    startSession (){

        console.log('start a session class');
    }
}

const amir = new Support ('Amir Khan');
const ImranKhan = new Support ('Imran Hossain');


console.log(amir,ImranKhan);

///(advanced) Inheritance, extends class, super, class method

class StudentCare {
    name;
    designation = 'student care';
    address= 'BD';
}

