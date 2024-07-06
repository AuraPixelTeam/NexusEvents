"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildIntegrationsUpdateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildIntegrationsUpdateEvent extends GuildEvent_1.GuildEvent {
    constructor(guild) {
        super(Events_1.Events.GuildIntegrationsUpdate, guild);
    }
}
exports.GuildIntegrationsUpdateEvent = GuildIntegrationsUpdateEvent;
//# sourceMappingURL=GuildIntegrationsUpdateEvent.js.map