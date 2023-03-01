let hashmap = {}
for(let letter of stones){
    hashmap[letter] = (hashmap[letter] || 0) + 1
}