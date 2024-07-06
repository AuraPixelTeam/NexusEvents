"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildScheduledEventUpdateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildScheduledEventUpdateEvent extends GuildEvent_1.GuildEvent {
    constructor(oldGuildScheduledEvent, newGuildScheduledEvent) {
        super(Events_1.Events.GuildScheduledEventUpdate, newGuildScheduledEvent.guild);
        this.oldGuildScheduledEvent = oldGuildScheduledEvent;
        this.newGuildScheduledEvent = newGuildScheduledEvent;
    }
    getOldGuildScheduledEvent() {
        return this.oldGuildScheduledEvent;
    }
    getNewGuildScheduledEvent() {
        return this.newGuildScheduledEvent;
    }
}
exports.GuildScheduledEventUpdateEvent = GuildScheduledEventUpdateEvent;
//# sourceMappingURL=GuildScheduledEventUpdateEvent.js.map