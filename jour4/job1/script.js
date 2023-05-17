document.getElementById("button").addEventListener("click", function() {
  fetch("expression.txt")
  .then(response => response.text())
  .then(data => {
    document.getElementById("result").innerText = data
  })
  .catch(error => {
    console.log("Une erreur s'est produite :", error)
  })
})