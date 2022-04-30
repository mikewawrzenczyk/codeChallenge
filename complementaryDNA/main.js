/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

*/
function DNAStrand(dna){
  //split string into array on no spaces
  let dnaArray = dna.split('')
  //return a mapped array with a switch case for each element, return the element
  return dnaArray.map(element => {
    switch(element){
    case 'A':
      element = 'T'
      break;
    case 'T':
      element = 'A'
      break;
    case 'C':
      element = 'G'
      break;
    case 'G':
      element = 'C'
      break
  
  } return element
  //join the array into a string
}).join('')
}

console.log(DNAStrand("AAAA"),"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT"),"CATA","String GTAT is") 