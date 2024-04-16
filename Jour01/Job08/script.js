function verifierSiPremier(nombre) {
  if (nombre < 2) {
    return false;
  }
  for (var i = 2; i < nombre ** (1 / 2) ; i++) {
    if (nombre % i === 0) {
      return false;
    }
  }
  return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
  if (nombre1 < 0 || nombre2 < 0) {
    return "Erreur"
  }
  if (verifierSiPremier(nombre1) && verifierSiPremier(nombre2)) {
    return nombre1 + nombre2;
  }
  else {
    return false
  }
}

console.log(sommeNombresPremiers(3, 5));
console.log(sommeNombresPremiers(4, 6));
console.log(sommeNombresPremiers(-3, 5));