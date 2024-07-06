"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksUpdateEvent = void 0;
const Event_1 = require("../Event");
const Events_1 = require("../Events");
class WebhooksUpdateEvent extends Event_1.Event {
    constructor(channel) {
        super(Events_1.Events.WebhooksUpdate);
        this.channel = channel;
    }
    /**
     *
     * @returns {TextChannel | NewsChannel | VoiceChannel | StageChannel | ForumChannel}
     */
    getChannel() {
        return this.channel;
    }
}
exports.WebhooksUpdateEvent = WebhooksUpdateEvent;
//# sourceMappingURL=WebhooksUpdateEvent.js.map