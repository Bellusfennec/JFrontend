const startGame = (heroPlayer, enemyPlayer) => {
  let fight = heroPlayer.health !== 0 && enemyPlayer.health !== 0;
  let win = null;
  while (fight) {
    const randomNumber = getRandomNumberInRange(0, 1);
    if (randomNumber === 0) heroPlayer.heatEnemy(enemyPlayer);
    if (randomNumber === 1) enemyPlayer.heatHero(heroPlayer);
    if (heroPlayer.health === 0) win = enemyPlayer;
    if (enemyPlayer.health === 0) win = heroPlayer;
    fight = heroPlayer.health !== 0 && enemyPlayer.health !== 0;
  }
  alert(`${win.name} победил! У него осталось ${win.health} здоровья`);
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hero = {
  name: "Batman",
  health: 100,
  heatEnemy: (enemy) => {
    return (enemy.health -= 10);
  },
};
const enemy = {
  name: "Joker",
  health: 100,
  heatHero: (hero) => {
    return (hero.health -= 10);
  },
};

startGame(hero, enemy);
