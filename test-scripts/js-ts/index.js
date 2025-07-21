"use strict";

import { appLogger } from "./lib/bootstrap.js";
import { PetrolCar } from "./lib/classes/car.class.js";

console.time();
appLogger.info("🤖 Starting the Node project");

//////// Plug your code Below ⬇️

appLogger.debug("🤓 Creating new Pertol car!");
let hondaCivic = new PetrolCar(3.2, 2025, "PETROL");
console.log("My car = ", hondaCivic);

// This is an error to see if CodeScanner can Identify during the static analysis
appLogger.log(hondaCivic.toSTRING()); // This function is not defined

hondaCivic = null;
console.log("My car = ", hondaCivic.super.toString()); // Trying to access properties on a null reference

/////// Plug your code Above ⬆️

appLogger.info("🤖 Ending the Node project");
console.timeEnd();
