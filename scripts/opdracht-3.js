// Opdracht 3

function showBrand(inventory) {
  inventory.map((item) => {
    const brandName = document.createElement('li');
    brandName.textContent = `${item.brand}`;
    const showBrandName = document.getElementById('brand-list');
    showBrandName.appendChild(brandName);
  })
}

showBrand(inventory);