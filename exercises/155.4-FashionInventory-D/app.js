let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
    // your code here
      let result = [];

  for (let designer of inventory) {
    for (let shoe of designer.shoes) {
      let words = shoe.name.split(' ');
      
      let index = words.findIndex(word => word.includes('lace'));

      if (index !== -1) {
        result.push({
          nameWords: words,
          targetWordIndex: index
        });
      }
    }
  }

  return result;
}

console.log(getLaceNameDataForShoes(currentInventory));
