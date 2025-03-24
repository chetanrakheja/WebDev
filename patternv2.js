function shinyDiamondRug(n) {
    result = ""
        for(let i=1;i<=n;i++){
          for(let j=i;j<=n-1;j++){
            result+=" "
          }
          for(let s=0;s<((i*2)-1);s++){
             result+="*"
          }
           result+="\n"
        }
        for(let i=n+1;i<(2*n);i++){
          for(let j=n;j<i;j++){
            result+=" "
          }
          for(let s=0;s<((((2*n) - i)*2)-1);s++){
             result+="*"
          }
           result+="\n"
        }
       
        return result
      }
      
    
function invertedMountain(n) {
        let mountain=""
        for (let i=0;i<n;i++){
          for (let j=i;j<n;j++){
            mountain+="*"
            }
             mountain+="\n"
        }
       return mountain
      }

let arr=["Salad", "Burger", "Apple", "Pizza", "Banana"]
let result = arr.filter((item)=>(item!="Burger"))
console.log(arr)
console.log(result)
console.log(arr.indexOf("Burger"))

function writeLoveLetter(message, name) {
    // Add name at the start of the message and return updated array
    message.unshift(name)
    return message
}

console.log(writeLoveLetter(arr, "name"))

arr.length()

function Animal(name){
    Animal.prototype(makeSound()="Some generic function")
}



// console.log(invertedMountain(4))




// ((2n - i)*2)-1