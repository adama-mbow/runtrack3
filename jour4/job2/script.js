function jsonValueKey(jsonstring, cle){
  let str = {
    name: "La Plateforme",
    adresse: "8 rue d'hozier",
    city: "Marseille",
    nb_staff: 11,
    creation:2019,
    }
    console.log(str[cle])
    return (str[cle])
 }
jsonValueKey(null,"adresse")

