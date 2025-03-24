function shinyDiamondRug(n) {
    result = ""
      for(let i=1;i<(2*n);i++){
        if(i<=n){
          for(let j=i;j<=n-1;j++){
            result+=" "
          }
          for(let s=0;s<((i*2)-1);s++){
             result+="*"
          }
        }
        if(i>n){
          for(let j=n;j<i;j++){
            result+=" "
          }
          for(let s=0;s<((((2*n) - i)*2)-1);s++){
             result+="*"
          }
        }
        result+="\n"
      }
      return result
    }

console.log("'"+shinyDiamondRug(4)+"'")




// ((2n - i)*2)-1