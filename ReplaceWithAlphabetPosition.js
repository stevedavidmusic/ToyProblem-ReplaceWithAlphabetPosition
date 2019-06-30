function alphabetPosition (str){
    var master = "abcdefghijklmnopqrstuvwxyz"
        newStr = str.replace(/[^a-z]/gmi, "").toLowerCase()
        answer = ""  
    for(let i = 0; i < newStr.length; i++){
      for(let k = 0; k < master.length; k++){
        if(newStr[i] === master[k]){
        answer += k + 1 + " "
        }
      }
    }
    return answer.trim()
  }
