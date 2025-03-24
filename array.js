function totalStars(starLevels) {
    let total=0  
    for(let i=0;i<starLevels.length;i++){
      if (typeof starLevels[i]  === 'object'){
        total += totalStars(starLevels[i])
      }else if(starLevels[i]=="*"){
        total++
      }
    }
    return total
  }

  
  let arr = [[ "*", "*", "*" ], [ "*", "*" ], [ "*" ]]

  console.log(totalStars(arr))