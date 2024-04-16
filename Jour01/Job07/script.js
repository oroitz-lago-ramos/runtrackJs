function jourTravaille(date) {
  var joursFeries = [
    new Date(2024, 1 - 1, 1), // Jour de l'an
    new Date(2024, 4 - 1, 5), //"05/04/2024", // Vendredi saint
    new Date(2024, 4 - 1, 7), //"07/04/2024", // Lundi de Pâques
    new Date(2024, 5 - 1, 1), //"01/05/2024", // Fête du Travail
    new Date(2024, 5 - 1, 8), //"08/05/2024", // Victoire 1945
    new Date(2024, 5 - 1, 13), //"13/05/2024", // Ascension
    new Date(2024, 5 - 1, 24), //"24/05/2024", // Lundi de Pentecôte
    new Date(2024, 7 - 1, 14), //"14/07/2024", // Fête nationale
    new Date(2024, 8 - 1, 15), //"15/08/2024", // Assomption
    new Date(2024, 10 - 1, 1), //"01/11/2024", // Toussaint
    new Date(2024, 10 - 1, 11), //"11/11/2024", // Armistice
    new Date(2024, 11 - 1, 25), //"25/12/2024", // Noël
  ];

  var mois = date.getMonth() - 1;
  var annee = date.getFullYear();
  var dateJour = date.getDate();

  date = new Date(annee, mois, dateJour);

  // Comment faire pour que le jour soit un string ?
  var jourString = date.toLocaleDateString("fr-FR", {weekday: "long"});
  var moisString = date.toLocaleDateString("fr-FR", { month: "long" });

  for (var i = 0; i < joursFeries.length; i++) {
    if (date.getTime() === joursFeries[i].getTime()) {
      console.log("Le " + jourString + " " + dateJour + " " + moisString + " est un jour férié.");
      return 0;
    }
  }
  if (date.getDay() == 0 || date.getDay() == 6) {
    console.log("Non, " + jourString + " " + dateJour + " " + moisString + " n'est pas un jour travaillé.");
    return 0;
  } else {
    console.log("Oui, " + jourString + " " + dateJour + " " + moisString + " est un jour travaillé.");
    return 0;
  }

}

jourTravaille(new Date(2024, 4, 5)); // Vendredi saint
jourTravaille(new Date(2024, 4, 7)); // Lundi de Pâques
jourTravaille(new Date(2024, 6, 1));
jourTravaille(new Date(2024, 6, 5));
