const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
leaveQueueWithoutParcel(peopleWaiting);
leaveQueueWithoutParcel(peopleWaiting);
leaveQueueWithoutParcel(peopleWaiting);
leaveQueueWithoutParcel(peopleWaiting);

function giveParcel(array) {
  const name = array.shift();
  alert(
    `${name} получил(а) посылку. В очереди осталось ${array.length} человек.`
  );
}
function leaveQueueWithoutParcel(array) {
  const name = array.pop();
  alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
}
