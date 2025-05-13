const accountId = 1234567890;
let accountEmail = "ashwani@gmail.com";
var accountPassword = "12345";
accountCity = "Gorakhpur";
let accountState;

// accountId = 2; //not allowed

accountEmail = "as@gamil.com";
accountPassword = "1234";
accountCity = "Delhi";


/*
    prefer not to use var
    because of issue in block scope and functional scope
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountState, accountCity]);
