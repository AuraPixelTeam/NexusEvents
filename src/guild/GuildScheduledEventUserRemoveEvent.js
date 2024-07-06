"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildScheduledEventUserRemoveEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildScheduledEventUserRemoveEvent extends GuildEvent_1.GuildEvent {
    constructor(guildScheduledEvent, user) {
        super(Events_1.Events.GuildScheduledEventUserRemove, guildScheduledEvent.guild);
        this.guildScheduledEvent = guildScheduledEvent;
        this.user = user;
    }
    getGuildScheduledEvent() {
        return this.guildScheduledEvent;
    }
    getUser() {
        return this.user;
    }
}
exports.GuildScheduledEventUserRemoveEvent = GuildScheduledEventUserRemoveEvent;
//# sourceMappingURL=GuildScheduledEventUserRemoveEvent.js.map