"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelDeleteEvent = void 0;
const Events_1 = require("../Events");
const ChannelEvent_1 = require("./ChannelEvent");
class ChannelDeleteEvent extends ChannelEvent_1.ChannelEvent {
    constructor(channel) {
        super(Events_1.Events.ChannelDelete, channel);
    }
}
exports.ChannelDeleteEvent = ChannelDeleteEvent;
//# sourceMappingURL=ChannelDeleteEvent.js.map