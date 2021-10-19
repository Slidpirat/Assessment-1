var password = "Welcome to the Password Validator! Please enter a password!";
var response = '';
var invalid = "Invalid! Please Enter a Password containing at Least 10 Characters!"

 if(response.length < 1){
   console.log(password)
 } else if(response.length > 1 && response.length <= 10){
   console.log(invalid)
 }
