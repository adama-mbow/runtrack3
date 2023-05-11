function bisextile(annee) {
    if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }
 
  let annee = prompt("donner votre année")
  if (bisextile(annee)) {
    console.log("L'année"+ " " + annee + " "+ "est bissextile.");
  } else {
    console.log("L'année"+ " " + annee + " " + "n'est pas bissextile.");
  }
