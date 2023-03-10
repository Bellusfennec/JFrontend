const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defenderObject) {
    let capture = [0, 0];
    for (const defender in defenderObject) {
      if (this[defender] > defenderObject[defender]) capture[0]++;
      capture[1]++;
    }
    return capture;
  },
  improveArmy() {
    this.archer += 5;
    this.footSoldier += 5;
    this.cavalry += 5;
    this.artillery += 5;
  },
  attack(defenderObject) {
    const [ourArmyChances, maximumChances] =
      this.checkChancesToWin(defenderObject);
    if ((ourArmyChances / maximumChances) * 100 < 70) {
      this.improveArmy();
      alert(
        `Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`
      );
    } else {
      alert("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
    }
  },
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
