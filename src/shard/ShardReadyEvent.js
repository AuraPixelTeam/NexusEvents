"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardReadyEvent = void 0;
const Event_1 = require("../Event");
const Events_1 = require("../Events");
class ShardReadyEvent extends Event_1.Event {
    constructor(id, unavailableGuilds) {
        super(Events_1.Events.ShardReady);
        this.id = id;
        this.unavailableGuilds = unavailableGuilds;
    }
    getId() {
        return this.id;
    }
    getUnavailableGuilds() {
        return this.unavailableGuilds;
    }
}
exports.ShardReadyEvent = ShardReadyEvent;
//# sourceMappingURL=ShardReadyEvent.js.map