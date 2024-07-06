"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelEvent = void 0;
const Event_1 = require("../Event");
class ChannelEvent extends Event_1.Event {
    constructor(eventName, channel) {
        super(eventName);
        this.channel = channel;
    }
    getChannel() {
        return this.channel;
    }
}
exports.ChannelEvent = ChannelEvent;
//# sourceMappingURL=ChannelEvent.js.map