// Opdracht 4a

function generateTvString(item) {
  return `${item.brand} ${item.type} - ${item.name}`;
}

//---------------------------------------------
// Opdracht 4b

function generatePriceFormat(price) {
  return `€${price},-`;
}

//---------------------------------------------
// Opdracht 4c

function generateScreenSizes(item) {
  let sizesString = '';
  item.availableSizes.map((size) => {
    sizesString += `${size} inch (${Math.round(size * 2.54)} cm) | `;
  })
  sizesString = sizesString.slice(0, sizesString.length - 2);
  return sizesString;
}

//---------------------------------------------
// Opdracht 4d

// const name = document.createElement('p');
// name.textContent = `${generateTvString(inventory[0])}`;
// const price = document.createElement('p');
// price.textContent = `${generatePriceFormat(inventory[0].price)}`;
// const screenSizes = document.createElement('p');
// screenSizes.textContent = `${generateScreenSizes(inventory[0])}`;
//
// const showItem = document.getElementById('main');
// showItem.appendChild(name);
// showItem.appendChild(price);
// showItem.appendChild(screenSizes);

//---------------------------------------------
// Opdracht 4e

function showTvList(inventory) {
  const tvList = document.getElementById('tv-list');
  tvList.innerHTML = '';

  inventory.map((item) => {
    return tvList.innerHTML += `
    ${generateTvString(item)} </br>
    ${generatePriceFormat(item.price)} </br>
    ${generateScreenSizes(item)} </br></br>
  `;
  })
}

//---------------------------------------------
// Bonus opdracht

const priceButton = document.getElementById('sort-by-price');
priceButton.addEventListener('click', () => {
  showTvList(sortInventoryOnPrice(inventory));
})

const ambilightButton = document.getElementById('sort-by-ambilight');
ambilightButton.addEventListener('click', () => {
  showTvList(filterAmbilight(inventory));
})

const soldOutButton = document.getElementById('filter-sold-out');
soldOutButton.addEventListener('click', () => {
  showTvList(filterSoldOut(inventory));
})