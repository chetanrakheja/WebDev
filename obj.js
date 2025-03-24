let obj = {"name":"Alice","age":25,"email":null}

function cleanObject(obj) {
    // Remove all properties with null or undefined values
    for (const [key,value] of Object.entries(obj)){
        console.log(key,value)
      if (value==="" || value=== null || value === undefined){
        delete obj[key]
      }
    }
    return obj
  }

// console.log(cleanObject(obj))

function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
    let splitpath = keyPath.split(".")
   let tempObj = obj
    
    for (i in splitpath){
        let findkey=splitpath[i]
        let resultObj = tempObj[findkey]
        if (typeof resultObj === "object"){
            tempObj = resultObj
        }
        else if(typeof resultObj==="undefined"){
            return "Key not found"
        }
        else{
            return resultObj
        }
    }
  }

console.log(getNestedValue({"user": {"address": {"city": "New York"}}},"user.address.test"))