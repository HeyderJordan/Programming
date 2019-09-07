 var num1 = document.getElementById("Val1");
 var num2 = document.getElementById("Val2");
 var num3 = document.getElementById("res");
 var form = document.getElementById("Theform")
 
 
 form.addEventListener('submit', function(event){
   if(!num1.value || !num2.value){
       alert("Please Enter Values in the Feilds.")
   } else{
       var x=parseFloat(num1.value)
       var y=parseFloat(num2.value)
       var result = x/y;
       var percent= result * 100;
       
       num3.innerHTML = "Result: "+percent+"%";
       event.preventDefault();
   }
 });