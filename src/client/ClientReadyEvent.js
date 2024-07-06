"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientReadyEvent = void 0;
const Events_1 = require("../Events");
const ClientEvent_1 = require("./ClientEvent");
class ClientReadyEvent extends ClientEvent_1.ClientEvent {
    constructor(client) {
        super(Events_1.Events.ClientReady, client);
    }
}
exports.ClientReadyEvent = ClientReadyEvent;
//# sourceMappingURL=ClientReadyEvent.js.map