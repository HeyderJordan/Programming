//var name = "Jack";    
//var age = 21;
//var shootingScore= 45.6;
//
//var message = "Hi, my name is " + name + " and i am " + age + " years old!";

//var firstName = "John";
//var lastName = "Jacobjingle";
//var dateOfBirth = "12-14-99";
//var age = 19;
//var profileImgUrl = "http://coolpicks.com/johnjacob.jpg:";
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age +"th birthday.";
//
//console.log(loginWelcomeMessage); 

//var sum = 10 + 15;
//var sub = 15-10;
//var mul = 10 * 3;
//var div = 10 / 3;
//var mod = 10 % 3;
//
//var msg= "10 / 3 = 3 with a remainder of " + mod;
//
//
//var result = 10 * ((5 + 3) - 4);
//console.log(result);
//
//var myAccountBalance = 300;
//var nikeSBShoes = 779.23;
//var coupon = 500
//== is equal to
//<= less than or equal to
//>=greater than or equal to
//=== is equal to and check for same type
//!== is not equal to
//
//var val1 = 23;
//var val2 = "23";
//
//if (val1 === val2){
//    console.log("These are the same.");  
//} else {
//    console.log("These are not the same.")
//}



//if (nikeSBShoes <= myAccountBalance) {
//    myAccountBalance -= nikeSBShoes;
//    console.log("We just bought some dope shoes!");
//    console.log("Account Balance: " + myAccountBalance);
//} else if (nikeSBShoes - coupon <= myAccountBalance){
//    myAccountBalance -= nikeSBShoes - coupon;
//    console.log("We just bought some dope shoes with a coupon!");
// console.log("Account Balance: " + myAccountBalance);
//
//}else {
//    console.log("Transaction Declined");
//}
//
//if (1 === 1 && 2 === 2 || "joe" === "joe") {
//    console.log("These are both true!")
//}
//if ( true && true ) {
//    console.log("These are the same!")
//}
//
//if (1===3||"joe"==="joe"){
//    console.log("something is true!")
//}


//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var disablehandcap = true;
//s
//if ((cat1 > cat2 && cat1 > cat3) && !disablehandcap){
//    console.log("Cat 1 is the cutest")
//} else if ((cat2 > cat1 && cat2 > cat3) && !disablehandcap) {
//    console.log("Cat 2 is the cutest")
//} else if ((cat3 > cat1 && cat3 > cat2) || disablehandcap) {
//    console.log("Cat 3 is the cutest")
//}


// Push will add to array, get indexOf and splice to remove --------------------------------------
//
//var students=["Timmy", "Janessa", "Arun"];
//var naughtylist=[];
//
//naughtylist.push(students[0])
//
//var index = naughtylist.indexOf("Timmy");
//
//console.log(naughtylist)
//if (index > -1) {
//    naughtylist.splice(index, 1);
//}
//
//console.log(naughtylist)

//-----------------------------------------------
// Loops

//var total =10;
//for (var x = 0; x < total; x++) {
//    //Iterate until told not to
//    console.log(x);
//}
//
//var student = ["John","Jacob","Jingle","Heimer","Smith"];
//for (var x = 0; x < student.length ; x++  ){
//    console.log(student[x]);
//}

//-------------------------------------------------

//function area(length, width){
//    return length * width;
//}
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10,15))
//rectanglesAreas.push(area(14,12))
//rectanglesAreas.push(area(16,16))
//rectanglesAreas.push(area(2,15))
//
//console.log(rectanglesAreas)
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale){
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//    
//}
//console.log(bankBalance);
//makeTransaction(79.00);
//console.log(bankBalance);
//makeTransaction(2.32);
//console.log(bankBalance);
//makeTransaction(10.45);
//console.log(bankBalance)
//makeTransaction(409)
//console.log(bankBalance)
//
//var Transaction(priceOfSale){
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//    
//}
//
//var printCustomerName = function(first,last) {
//    console.log("First Name: " + first + " Last Name: " last);
//}
//
//var applyForCreditCard = function(creditScore, soul) {
//    //call some functions
//}
//
//var bankOperations= [];
//bankOperations.push(Transaction)
//bankOperations.push(printCustomerName)
//bankOperations.push(applyForCreditCard)

//Objects----------------------------------------
//
//var students = [];
//
//function student(first, last, age){
//    this.firstName=first;
//    this.lastName= last;
//    this.age = age;
//    this.greeting = function() {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//}
//};
//
//students.push(new student("Jenny","Laga",5));
//students.push(new student("Jenny","Corn",7));
//students.push(new student("Jenny","Beef",3));
//
//var student = students[0];
//
//for (var key in student) {
//    console.log(student[key]);
//}


//var s1 = new student("Jenny","Laga",5);    
//console.log(s1);
//console.log(s1.greeting());
    
//var student0 = {
//    firstName: "John",
//    lastName: "Parker",
//    age: 7,
//    greeting: function() {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//    }
//};
//console.log(student0.greeting())
//
////Creates a new empty object
//var student1 = new Object();
//student1.firstName = "John";
//student1.lastnName = "Parker";
//student1.age = 7;
//
//var student2 = {}
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5


//students.push(student0)
//students.push(student1)
//students.push(student2)
//
//for (var index=0; index < students.length; index++){
// var student = students[index];
//    console.log(student.greeting())
//}

//console.log(student.firstName)
//console.log(student.lastName)


//------------------binding


this.car = "Honda Civic";

var marksGarage = {
    car : "Aston Martin",
    getCar: function() {
        return this.car;
        
    }
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;

console.log(storeGetCarForLater());

var theRealGetCarFucntion = storeGetCarForLater.bind(marksGarage)

console.log(theRealGetCarFucntion());


















