
  let zone_text = document.getElementById("keylogger")
  
 document.addEventListener("cle", function(event){
  if (event.key.match(/^[a-z]$/i)){
    if (document.activeElement === zone_text){
      zone_text.value += event.key + event.key
    }
    else{
      zone_text.value += event.key
    }
  }
 })

  