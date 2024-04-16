function tri(nombres, order) {
    if (order == "asc") {
        nombres.sort(function (a, b) {
            return a - b;
        });
      
    } else if (order == "desc") {
       nombres.sort(function (a, b) {
            return b - a;
        });
    }
    return nombres;

}