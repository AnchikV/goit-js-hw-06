const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

//ingredients.forEach((ingredient) => {
 // const newElement = document.createElement(`li`);
  //newElement.textContent = `${ingredient}`;
 // newElement.classList = `item`;
 // list.append(newElement);
//})
const elementList = ingredients.map(ingredient => {
  const newElement = document.createElement(`li`);
  newElement.textContent = ingredient;
  newElement.classList = 'item';
  return newElement;
});

list.append(...elementList);