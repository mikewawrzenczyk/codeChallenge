/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

function removeUrlAnchor(url){
  // TODO: complete
  // const octothorpe = url.indexOf('#')
  // //find the index of the # character
  // if(octothorpe > 0)
  //   //if the index is great than 0 return the substring with the length start of index 0 up to the index of the #
  //   return url.substr(0, octothorpe)
  // else
  // //if octothorpe index is less than 0 there is no octothorpe so return the orignal string
  //   return url

    return url.split('#')[0];
  //this is easier, you split on the octothorpe and then just return the first element of the array at index 0
}

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')