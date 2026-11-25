function creaEstrelles(valoracio) {
  const plenes = Math.floor(valoracio);
  const mitja = valoracio - plenes >= 0.5;
  return "★".repeat(plenes) + (mitja ? "½" : "") + "☆".repeat(5 - plenes - (mitja ? 1 : 0));
}