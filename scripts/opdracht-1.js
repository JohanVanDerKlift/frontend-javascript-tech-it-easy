console.log(inventory);

//---------------------------------------------
// Opdracht 1a

// let tvTypes = [];
// for (let i = 0; i < inventory.length; i++) {
//   tvTypes.push(inventory[i].type);
// }

const tvTypes = inventory.map((item) => {
  return item.type;
})

console.log(tvTypes);

//---------------------------------------------
// Opdracht 1b

// let soldOut = [];
//
// for (let i = 0; i < inventory.length; i++) {
//   if (inventory[i].originalStock - inventory[i].sold === 0) {
//     soldOut.push(inventory[i]);
//   }
// }

function filterSoldOut(inventory) {
  return  inventory.filter((item) => {
    return item.originalStock - item.sold === 0;
  })
}

// console.log(soldOut);

//---------------------------------------------
// Opdracht 1c

// let ambiLight = [];
//
// for (let i = 0; i < inventory.length; i++) {
//   if (inventory[i].options.ambiLight) {
//     ambiLight.push(inventory[i]);
//   }
// }

function filterAmbilight(inventory) {
  return inventory.filter((item) => {
    return item.options.ambiLight;
  })
}

// console.log(ambiLight);

//---------------------------------------------
// Opdracht 1d

function sortInventoryOnPrice(inventory) {
  return inventory.sort((a, b) => {
    return a.price - b.price;
  });
}

// console.log(sortInventoryOnPrice(inventory));
