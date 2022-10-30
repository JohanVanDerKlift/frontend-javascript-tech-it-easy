// Opdracht 3a + 3b

function showBrand(item) {
  const brandName = document.createElement('li');
  brandName.textContent = `${item.brand}`;
  const showBrandName = document.getElementById('brand-list');
  showBrandName.appendChild(brandName);

  console.log(item.brand);
}

inventory.forEach(showBrand);