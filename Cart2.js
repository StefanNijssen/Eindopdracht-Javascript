// In cart.html JavaScript
document.addEventListener("DOMContentLoaded", function() {
  var cartList = document.getElementById("cart-list");
  var totalElement = document.getElementById("total-price");

  // Haal de opgeslagen geselecteerde games op uit localStorage
  var selectedGames = JSON.parse(localStorage.getItem("selectedGames"));

  if (selectedGames && selectedGames.length > 0) {
      var totalPrice = selectedGames.reduce(function(total, game) {
          return total + game.price;
      }, 0);

      selectedGames.forEach(function(game) {
          var listItem = document.createElement("li");
          listItem.textContent = game.title + " - Prijs: $" + game.price.toFixed(2);
          cartList.appendChild(listItem);
      });

      totalElement.textContent = "Totaal: $" + totalPrice.toFixed(2);
  } else {
      var emptyCartMessage = document.createElement("p");
      emptyCartMessage.textContent = "Je winkelwagen is leeg.";
      cartList.appendChild(emptyCartMessage);
      totalElement.style.display = "none"; // Verberg het totaalbedrag als de winkelwagen leeg is
  }
});
