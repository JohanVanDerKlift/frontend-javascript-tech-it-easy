// Opdracht 2a

function itemsSold(inventory) {
  let totalAmount = 0;
  for (let i = 0; i < inventory.length; i++) {
    totalAmount += inventory[i].sold;
  }
  return totalAmount;
}

function itemsBought(inventory) {
  let totalAmount = 0;
  for (let i = 0; i< inventory.length; i++) {
    totalAmount += inventory[i].originalStock;
  }
  return totalAmount;
}

console.log(itemsSold(inventory));

const showItemsSold = document.createElement('span');
showItemsSold.textContent = `${itemsSold(inventory)}`;
showItemsSold.setAttribute('class', 'blue-color');
const sold = document.getElementById('sold');
sold.appendChild(showItemsSold);

const showItemsBought = document.createElement('span');
showItemsBought.textContent = `${itemsBought(inventory)}`
showItemsBought.setAttribute('class', 'green-color');
const bought = document.getElementById('bought');
bought.appendChild(showItemsBought);

const showItemsLeft = document.createElement('span');
showItemsLeft.textContent = `${itemsBought(inventory) - itemsSold(inventory)}`;
showItemsLeft.setAttribute('class', 'red-color');
const left = document.getElementById('left');
left.appendChild(showItemsLeft);
