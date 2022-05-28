function duplicate(array){
    return [...array,...array,...array]
    // return array.concat(...array)
}

console.log(duplicate([1,2,3,4,5]))