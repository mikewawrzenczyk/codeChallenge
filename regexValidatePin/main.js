// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN (pin) {
  //check if the pin is length 4 or 6, otherwise return false
    if(pin.length === 4 || pin.length === 6){
      //if regex of only numbers in the string using test method is not true return false otherwise return true.
      if(!/^[0-9]+$/.test(pin))  return false
      else return true
    }
    else return false
}

//one liner here
//implicit return by using test method and reg ex of only numbers with length 4 or numbers with length 6
// return /^(\d{4}|\d{6})$/.test(pin)

console.log(validatePIN("1"),false, "Wrong output for '1'")
console.log(validatePIN("12"),false, "Wrong output for '12'")
console.log(validatePIN("123"),false, "Wrong output for '123'")
console.log(validatePIN("12345"),false, "Wrong output for '12345'")
console.log(validatePIN("1234567"),false, "Wrong output for '1234567'")
console.log(validatePIN("-1234"),false, "Wrong output for '-1234'")
console.log(validatePIN("1.234"),false, "Wrong output for '1.234'")
console.log(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
console.log(validatePIN("00000000"),false, "Wrong output for '00000000'")
console.log(validatePIN("a234"),false, "Wrong output for 'a234'")
console.log(validatePIN(".234"),false, "Wrong output for '.234'")
console.log(validatePIN("1234"),true, "Wrong output for '1234'")
console.log(validatePIN("0000"),true, "Wrong output for '0000'")
console.log(validatePIN("1111"),true, "Wrong output for '1111'")
console.log(validatePIN("123456"),true, "Wrong output for '123456'")
console.log(validatePIN("098765"),true, "Wrong output for '098765'")
console.log(validatePIN("000000"),true, "Wrong output for '000000'")
console.log(validatePIN("123456"),true, "Wrong output for '123456'")
console.log(validatePIN("090909"),true, "Wrong output for '090909'")
