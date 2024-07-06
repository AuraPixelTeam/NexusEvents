"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildCreateEvent = void 0;
const Events_js_1 = require("../Events.js");
const GuildEvent_1 = require("./GuildEvent");
class GuildCreateEvent extends GuildEvent_1.GuildEvent {
    constructor(guild) {
        super(Events_js_1.Events.GuildCreate, guild);
    }
}
exports.GuildCreateEvent = GuildCreateEvent;
//# sourceMappingURL=GuildCreateEvent.js.map