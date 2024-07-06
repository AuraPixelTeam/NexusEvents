"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardDisconnectEvent = void 0;
const Event_1 = require("../Event");
const Events_1 = require("../Events");
class ShardDisconnectEvent extends Event_1.Event {
    constructor(closeEvent, id) {
        super(Events_1.Events.ShardDisconnect);
        this.closeEvent = closeEvent;
        this.id = id;
    }
    getCloseEvent() {
        return this.closeEvent;
    }
    getId() {
        return this.id;
    }
}
exports.ShardDisconnectEvent = ShardDisconnectEvent;
//# sourceMappingURL=ShardDisconnectEvent.js.map