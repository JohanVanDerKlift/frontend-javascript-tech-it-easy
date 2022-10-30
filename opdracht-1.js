console.log(inventory);

// Opdracht 1a

let tvTypes = [];
for (let i = 0; i < inventory.length; i++) {
  tvTypes.push(inventory[i].type);
}

console.log(tvTypes);

// Opdracht 1b

let soldOut = [];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].originalStock - inventory[i].sold === 0) {
    soldOut.push(inventory[i]);
  }
}

console.log(soldOut);

// Opdracht 1c

let ambiLight = [];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].options.ambiLight) {
    ambiLight.push(inventory[i]);
  }
}

console.log(ambiLight);

// Opdracht 1d

function sortInventoryOnPrice(inventory) {
  inventory.sort((a, b) => {
    return a.price - b.price;
  });
  return inventory;
}

console.log(sortInventoryOnPrice(inventory));
