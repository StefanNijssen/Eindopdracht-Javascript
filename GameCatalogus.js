

for (var i = 0; i < ganes.length; i++){
   
    var obj = games[i];
    for (var key in obj){
      var value = obj[key];
      document.write("<br> - " + key + ": " + value);
    }
  }