/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet
*/

//always will be a domain
//always be a string

//replace
//split


function domainName(string){
    return string.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]
}


console.log(domainName("http://github.com/carbonfive/raygun"), 'github')
console.log(domainName("http://www.zombie-bites.com"), 'zombie-bites')
console.log(domainName("https://www.cnet.com"), 'cnet')
console.log(domainName("www.google.com"), 'google')
console.log(domainName('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#try_it'), 'developer')