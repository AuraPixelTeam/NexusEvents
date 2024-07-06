"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildScheduledEventDeleteEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildScheduledEventDeleteEvent extends GuildEvent_1.GuildEvent {
    constructor(guildScheduledEvent) {
        super(Events_1.Events.GuildScheduledEventDelete, guildScheduledEvent.guild);
        this.guildScheduledEvent = guildScheduledEvent;
    }
    getGuildScheduledEvent() {
        return this.guildScheduledEvent;
    }
}
exports.GuildScheduledEventDeleteEvent = GuildScheduledEventDeleteEvent;
//# sourceMappingURL=GuildScheduledEventDeleteEvent.js.map