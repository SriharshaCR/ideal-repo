'use strict';

export default class AppLogger {

    static #loggerRef = null;

    get loggerRef() {
        return AppLogger.#loggerRef
    }

    set loggerRef(ref) {
        AppLogger.#loggerRef = ref;
    }

    constructor(loggerRef) {
        AppLogger.#loggerRef = loggerRef
    }

}
