"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEvent = void 0;
const Event_1 = require("../Event");
class ClientEvent extends Event_1.Event {
    /**
     * @param {Client} client
     */
    constructor(eventName, client) {
        super(eventName);
        this.client = client;
    }
    /**
     * @returns {Client}
     */
    getClient() {
        return this.client;
    }
}
exports.ClientEvent = ClientEvent;
//# sourceMappingURL=ClientEvent.js.map