var mobileData = {
  iPhone: {
    brand: "Apple",
    model: "iPhone 12",
    color: "Black",
    storage: "128GB",
  },
  Samsung: {
    brand: "Samsung",
    model: "Galaxy S21",
    color: "Phantom Violet",
    storage: "256GB",
  },

  Oppo: {
    brand: "Oppo",
    model: "Oppo F19",
    color: "Phantom Purple Violet",
    storage: "456GB",
  },
  Xiaomi: {
    brand: "Xiaomi",
    model: "Mi 11 lite",
    color: "Pure Black",
    storage: "356GB",
  },
  Realme: {
    brand: "Realme",
    model: "Realme Mp3",
    color: "Grey",
    storage: "256GB",
  },
};

var selectElement = document.getElementById("search-select");
var detailsContainer = document.getElementById("mobile-details-container");

selectElement.addEventListener("change", (event) => {
  var selectedMobile = event.target.value;

  detailsContainer.innerHTML = "";

  if (selectedMobile) {
    var mobileDetails = mobileData[selectedMobile];

    var mobileTitle = document.createElement("h3");
    mobileTitle.textContent = selectedMobile;
    detailsContainer.appendChild(mobileTitle);

    for (var key in mobileDetails) {
      var value = mobileDetails[key];

      var detailItem = document.createElement("p");
      detailItem.textContent = `${key}: ${value}`;
      detailsContainer.appendChild(detailItem);
    }

    selectElement.value = "";
  }
});

// var selectElement = document.getElementById("search-select");

// for (var mobile in mobileData) {
//   var option = document.createElement("option");
//   option.value = mobile;
//   option.textContent = mobile;
//   selectElement.appendChild(option);
// }

// var searchInput = document.getElementById("search-input");
// var resultsContainer = document.getElementById("search-results");

// searchInput.addEventListener("input", (event) => {
//   var query = event.target.value.toLowerCase();

//   // Clear previous results
//   resultsContainer.innerHTML = "";

//   for (var mobile in mobileData) {
//     if (mobile.toLowerCase().includes(query)) {
//       var mobileDetails = mobileData[mobile];

//       var mobileTitle = document.createElement("h3");
//       mobileTitle.textContent = mobile;
//       resultsContainer.appendChild(mobileTitle);

//       for (var key in mobileDetails) {
//         var value = mobileDetails[key];

//         var detailItem = document.createElement("p");
//         detailItem.textContent = `${key}: ${value}`;
//         resultsContainer.appendChild(detailItem);
//       }
//     }
//   }
// });
