/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/
function bmi(weight, height) {
    const bmiCalc = weight / Math.pow(height,2)
    console.log(`Weight: ${weight} Height: ${height}`)
    switch(true){
        case bmiCalc <= 18.5:
            return "Underweight"
        case bmiCalc < 25:
            return "Normal"
        case bmiCalc < 30.0:
            return "Overweight"
        // case bmiCalc > 30:
        //     return "Obese"
        default:
            return 'Default'
    }
    
}

