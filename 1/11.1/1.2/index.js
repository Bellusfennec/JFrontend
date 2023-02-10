const startGame = (heroPlayer, enemyPlayer) => {
  let fight = heroPlayer.health !== 0 && enemyPlayer.health !== 0;
  let winner = null;
  while (fight) {
    getRandomNumberInRange(0, 1)
      ? enemyPlayer.heatHero(heroPlayer)
      : heroPlayer.heatEnemy(enemyPlayer);
    console.log(
      "heroPlayer",
      heroPlayer.health,
      "enemyPlayer",
      enemyPlayer.health
    );
    if (!heroPlayer.health || !enemyPlayer.health) {
      winner = heroPlayer.health ? heroPlayer : enemyPlayer;
    }
    fight = heroPlayer.health !== 0 && enemyPlayer.health !== 0;
  }
  alert(`${winner.name} победил! У него осталось ${winner.health} здоровья`);
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
