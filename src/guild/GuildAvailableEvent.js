"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildAvailableEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildAvailableEvent extends GuildEvent_1.GuildEvent {
    constructor(guild) {
        super(Events_1.Events.GuildAvailable, guild);
    }
}
exports.GuildAvailableEvent = GuildAvailableEvent;
//# sourceMappingURL=GuildAvailableEvent.js.map