$(document).ready(function () {
  const form = $("#filter-form");
  const idInput = $("#id");
  const nameInput = $("#name");
  const typeSelect = $("#type");
  const resultsDiv = $("#results");

  $.getJSON("pokemon.json", function (data) {
    const types = new Set();
    data.forEach(function (pokemon) {
      pokemon.type.forEach(function (type) {
        types.add(type);
      });
    });
    types.forEach(function (type) {
      const option = $("<option></option>").attr("value", type).text(type);
      typeSelect.append(option);
    });
  }).fail(function (jqxhr, textStatus, error) {
    console.log(
      "Erreur lors du chargement du fichier JSON:",
      textStatus,
      error
    );
  });

  // Fonction de filtrage et d'affichage des données
  function filterData() {
    const id = idInput.val();
    const name = nameInput.val().toLowerCase();
    const type = typeSelect.val();

    $.getJSON("pokemon.json", function (data) {
      const filteredData = data.filter(function (pokemon) {
        return (
          (id === "" || pokemon.id === Number(id)) &&
          (name === "" || pokemon.name.english.toLowerCase().includes(name)) &&
          (type === "" || pokemon.type.includes(type))
        );
      });

      displayResults(filteredData);
    }).fail(function (jqxhr, textStatus, error) {
      console.log("Erreur lors du filtrage des données:", textStatus, error);
    });
  }

  function displayResults(data) {
    resultsDiv.empty();
    const ul = $("<ul></ul>");

    data.forEach(function (pokemon) {
      const li = $("<li></li>").text(
        `${pokemon.name.english} (ID: ${pokemon.id}, Types: ${pokemon.type.join(
          ", "
        )})`
      );
      ul.append(li);
    });

    resultsDiv.append(ul);
  }

  $("#filter").click(filterData);
});
