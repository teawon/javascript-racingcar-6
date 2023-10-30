class Race {
  constructor(cars) {
    this.cars = cars;
  }

  progressRound() {
    this.cars.forEach((car) => car.move());
  }

  getRoundResult() {
    return this.cars.map((car) => {
      return {
        name: car.getName(),
        position: car.getPosition(),
      };
    });
  }

  getMaxPosition() {
    return Math.max(...this.cars.map((car) => car.getPosition()));
  }

  getWinners() {
    return this.cars.filter(
      (car) => car.getPosition() === this.getMaxPosition()
    );
  }
}

export default Race;