function stairsIn20(s){
    //your code here
  //   console.log(s)
    let accumulator = 0
    for(let i=0; i < s.length;i++){
      for(let j=0; j < s[i].length;j++){
        console.log(s[i][j])
        accumulator+= s[i][j]
      }
    }
    return accumulator * 20
}