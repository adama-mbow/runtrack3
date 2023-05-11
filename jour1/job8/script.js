function sommenombrespremiers(x,y){
 
  if (x<=1 && y<=1){
    return false
  }
  if (x % 2 === 0 && y % 2 === 0){
    return false
  }
  if (x % 1 === 0 && x % x === 0 && y % 1 === 0 && y % y === 0) {
    console.log(x * y)
  }
  else{
    console.log("la valeur entrée n'est pas un nombre premier")
  }
}
let x = prompt("metter la valeur de x")
let y = prompt("metter la valeur de y")
sommenombrespremiers(x,y)