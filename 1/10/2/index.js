const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);

/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/

function giveTalonsInOrder(people, ordersArr) {
  const newArray = [];
  ordersArr.forEach((order) => {
    people.forEach((people) =>
      people.id === order ? newArray.push(people) : ""
    );
  });
  return newArray
};
