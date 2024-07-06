"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelPinsUpdateEvent = void 0;
const Events_1 = require("../Events");
const ChannelEvent_1 = require("./ChannelEvent");
class ChannelPinsUpdateEvent extends ChannelEvent_1.ChannelEvent {
    constructor(channel, time) {
        super(Events_1.Events.ChannelPinsUpdate, channel);
        this.time = time;
    }
    getTime() {
        return this.time;
    }
}
exports.ChannelPinsUpdateEvent = ChannelPinsUpdateEvent;
//# sourceMappingURL=ChannelPinsUpdateEvent.js.map