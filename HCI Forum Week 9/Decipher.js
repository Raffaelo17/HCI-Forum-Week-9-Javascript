function digitalDecipher(eMessage,key){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var result = "";
    key = Array.from(String(key));
  
    for(var i = 0; i < eMessage.length; i++) 
      result += alphabet[eMessage[i] - 1 - key[i % key.length]];
  
    return result
  }
  var x = digitalDecipher([20, 12, 18, 30, 21], 1939);
  var y = digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
  var z = digitalDecipher([6, 4, 1, 3, 9, 20], 100);
  console.log(x);
  console.log(y);
  console.log(z);