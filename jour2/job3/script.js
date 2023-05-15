
  let citationElement = document.getElementById("button")
  let citationcompteur = document.getElementById("compteur")
  let count = 0
  function addone() {
  count++
  citationcompteur.textContent = count
  }

  citationElement.addEventListener("click", addone)

  