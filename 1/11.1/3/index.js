const getKiller = (suspectInfo, deadPeople) => {
  for (const key in suspectInfo) {
    const isKiller = suspectInfo[key]
      .map((item) => deadPeople.includes(item))
      .filter(Boolean);
    if (isKiller.length === deadPeople.length) return key;
  }
};

console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
); // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ["Ben", "Kevin"],
      Finn: [],
    },
    ["Ben"]
  )
); // Убийца Megan
