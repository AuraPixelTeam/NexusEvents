"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateEvent = void 0;
const Event_1 = require("../Event");
const Events_1 = require("../Events");
class UserUpdateEvent extends Event_1.Event {
    constructor(oldUser, newUser) {
        super(Events_1.Events.UserUpdate);
        this.oldUser = oldUser;
        this.newUser = newUser;
    }
    getOldUser() {
        return this.oldUser;
    }
    getNewUser() {
        return this.newUser;
    }
}
exports.UserUpdateEvent = UserUpdateEvent;
//# sourceMappingURL=UserUpdateEvent.js.map