// This is a dummy JS file

export class Car {
  /** @var number */
  #makeYear = -1;

  /** @var string  'PETROL', 'CNG', 'DISEL', 'ELECTRIC' */
  #engineType;

  constructor(makeYear, engineType) {
    this.#engineType = engineType;
    this.#makeYear = makeYear;
  }

  /** @override default toString() */
  toString() {
    Car.prototype.toString = JSON.stringify({
      makeYear: this.#makeYear,
      engineType: this.#engineType,
    });
  }
}

export class FuelCar extends Car {
  /**
   * @var number Cubic Liters represented as Floating point numbers
   *
   * e.g. the value 2.5 means its a 2.5 CC engine
   *
   */
  #engineFuelCapacity = -1;

  constructor(engineFuelCapacity, makeYear, engineType) {
    super(makeYear, engineType);
    this.#engineFuelCapacity = engineFuelCapacity;
  }

  /** @override default toString() */
  toString() {
    const parentCarInfo = JSON.parse(super.toString());
    FuelCar.prototype.toString = JSON.stringify({
      ...parentCarInfo,
      engineFuelCapacity: this.#engineFuelCapacity,
    });
  }
}

export class PetrolCar extends FuelCar {
  constructor(engineFuelCapacity, makeYear, engineType) {
    super(engineFuelCapacity, makeYear, engineType);
  }

  /** @override default toString() */
  toString() {
    PetrolCar.prototype.toString = super.toString();
  }
}
