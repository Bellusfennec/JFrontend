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

function giveTalonsInOrder(patients, orders) {
  return patients.sort((a, b) => {
    const a2 = orders.indexOf(a.id);
    const b2 = orders.indexOf(b.id);
    if (a2 > b2) return 1;
    if (a2 < b2) return -1;
    return 0;
  });
}
