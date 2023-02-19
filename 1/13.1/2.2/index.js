class CarService {
  static DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };
  constructor(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours || CarService.DefaultWorkingHours;
  }
  repairCar(carName) {
    if (!carName) {
      console.error(
        "Вам необходимо указать название машины, чтобы ее отремонтировать"
      );
    } else {
      const nowHour = new Date().getHours();
      const [fromHour] = this.workingHours.from.split(":");
      const [tillHour] = this.workingHours.till.split(":");
      const isOpen = nowHour >= fromHour || nowHour < tillHour;
      isOpen
        ? alert(
            `Сейчас отремонтируем вашу машину ${carName}! Ожидайте пожалуйста`
          )
        : alert("К сожалению, мы сейчас закрыты. Приходите завтра.");
    }
  }
}

const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00",
});
carService.repairCar("BMW");
