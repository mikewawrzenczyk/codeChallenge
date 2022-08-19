/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
    // const bmiCalc = weight / (height *2 )
    // console.log(`Weight: ${weight} Height: ${height} BMI ${bmiCalc}`)
    // switch(true){
    //     case bmiCalc <= 18.5:
    //         return "Underweight"
    //     case bmiCalc <= 25:
    //         return "Normal"
    //     case bmiCalc <= 30.0:
    //         return "Overweight"
    //     case bmiCalc > 30:
    //         return "Obese"
    //     default:
    //         return 'Default'
    // }
    var result = weight/Math.pow(height,2) 
    if (result <= 18.5) {
        return "Underweight";
      } else if (result <= 25) {
        return "Normal";
      } else if (result <= 30) {
        return "Overweight";
      } else {
        return "Obese";
      }
}

console.log(bmi(50, 1.80), "Normal");
console.log(bmi(80, 1.80), "Normal");
console.log(bmi(90, 1.80), "Normal");