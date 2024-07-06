"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUpdateEvent = void 0;
const Events_1 = require("../Events");
const ChannelEvent_1 = require("./ChannelEvent");
class ChannelUpdateEvent extends ChannelEvent_1.ChannelEvent {
    constructor(oldChannel, newChannel) {
        super(Events_1.Events.ChannelUpdate, newChannel);
        this.oldChannel = oldChannel;
    }
    getOldChannel() {
        return this.oldChannel;
    }
}
exports.ChannelUpdateEvent = ChannelUpdateEvent;
//# sourceMappingURL=ChannelUpdateEvent.js.map