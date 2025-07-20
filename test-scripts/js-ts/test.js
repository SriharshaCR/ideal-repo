// This is a dummy JS file


class Car {
    /** @var number */
    #makeYear = -1;

    /** @var string  'PETROL', 'CNG', 'DISEL', 'ELECTRIC' */
    #engineType;

    constructor(makeYear, engineType) {
        this.#engineType = engineType; this.#makeYear = makeYear;
    }
}

class FuelCar extends Car {
    /** 
     * @var number Cubic Liters represented as Floating point numbers
     * 
     * e.g. the value 2.5 means its a 2.5 CC engine
     * 
     */
    #engineFuelCapacity = -1;

    constructor(engineFuelCapacity, makeYear, engineType) {
        super(makeYear, engineType);
        this.#engineFuelCapacity = engineFuelCapacity
    }
}

class PetrolCar extends FuelCar {

    constructor(engineFuelCapacity, makeYear, engineType) {
        super(engineFuelCapacity, makeYear, engineType)
    }

}

const hondaCivic = new PetrolCar(3.2, 2025, 'PETROL');

console.log("My car = ", hondaCivic);