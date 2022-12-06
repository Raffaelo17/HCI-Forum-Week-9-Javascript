function canGiveBlood(x, y) {
    if (x.charAt(1) == "-") {
      if (x.charAt(0) == "O") {
        return true;
      } 
      else if (x.charAt(0) == "A") {
        if (y == "O+" || y == "A-" || y == "AB+") {
          return true;
        } 
        else {
          return false;
        }
      }
      else if (x.charAt(0) == "B") {
        if (y == "B+" || y == "B-" || y == "AB+" || y == "AB-") {
          return true;
        } 
        else {
          return false;
        }
      }
      else if (x.charAt(0) == "AB"){
        if (y == "AB+" || y == "AB-" ){
          return true;
        } 
        else {
          return false;
        }
      }
    } 
    else if (x.charAt(1) == "+"){
      if (x.charAt(0) == "O"){
        if (y.charAt(1) == "+"){
          return true;
        }
        else {
          return false;
        }
      }
      else if (x.charAt(0) == "A"){
        if (y == "AB+" || y == "A+"){
          return true;
        }
        else{
          return false;
        }
      }
      else if (x.charAt(0) == "B"){
        if (y == "AB+" || y == "B+"){
          return true;
        }
        else{
          return false;
        }
      }
      else if (x.charAt(0) == "AB"){
        if (y == "AB+"){
          return true;
        }
      }
    }
  }
  
    
    
  var a = canGiveBlood("O+", "A+")
  var b = canGiveBlood("A-", "B-")
  var c = canGiveBlood("A-", "AB+")
  console.log(a);
  console.log(b);
  console.log(c);