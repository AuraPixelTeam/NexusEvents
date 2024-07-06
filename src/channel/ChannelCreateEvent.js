"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelCreateEvent = void 0;
const Events_1 = require("../Events");
const ChannelEvent_1 = require("./ChannelEvent");
class ChannelCreateEvent extends ChannelEvent_1.ChannelEvent {
    constructor(channel) {
        super(Events_1.Events.ChannelCreate, channel);
    }
}
exports.ChannelCreateEvent = ChannelCreateEvent;
//# sourceMappingURL=ChannelCreateEvent.js.map