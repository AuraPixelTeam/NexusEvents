"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildUnavailableEvent = void 0;
const Events_js_1 = require("../Events.js");
const GuildEvent_1 = require("./GuildEvent");
class GuildUnavailableEvent extends GuildEvent_1.GuildEvent {
    constructor(guild) {
        super(Events_js_1.Events.GuildUnavailable, guild);
    }
}
exports.GuildUnavailableEvent = GuildUnavailableEvent;
//# sourceMappingURL=GuildUnavailableEvent.js.map