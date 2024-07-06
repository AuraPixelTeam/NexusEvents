"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPacketReceiveEvent = void 0;
const Events_1 = require("../Events");
const ServerEvent_1 = require("./ServerEvent");
class DataPacketReceiveEvent extends ServerEvent_1.ServerEvent {
    constructor(packet) {
        super(Events_1.Events.DataPacketReceive);
        this.packet = packet;
    }
    getPacket() {
        return this.packet;
    }
}
exports.DataPacketReceiveEvent = DataPacketReceiveEvent;
//# sourceMappingURL=DataPacketReceiveEvent.js.map