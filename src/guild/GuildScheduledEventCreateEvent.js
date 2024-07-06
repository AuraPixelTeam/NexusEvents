"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildScheduledEventCreateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildScheduledEventCreateEvent extends GuildEvent_1.GuildEvent {
    constructor(guildScheduledEvent) {
        super(Events_1.Events.GuildScheduledEventCreate, guildScheduledEvent.guild);
        this.guildScheduledEvent = guildScheduledEvent;
    }
    getGuildScheduledEvent() {
        return this.guildScheduledEvent;
    }
}
exports.GuildScheduledEventCreateEvent = GuildScheduledEventCreateEvent;
//# sourceMappingURL=GuildScheduledEventCreateEvent.js.map