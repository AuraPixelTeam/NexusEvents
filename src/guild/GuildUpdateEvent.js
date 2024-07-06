"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildUpdateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildUpdateEvent extends GuildEvent_1.GuildEvent {
    constructor(oldGuild, newGuild) {
        super(Events_1.Events.GuildUpdate, newGuild);
        this.oldGuild = oldGuild;
    }
    getOldGuild() {
        return this.oldGuild;
    }
}
exports.GuildUpdateEvent = GuildUpdateEvent;
//# sourceMappingURL=GuildUpdateEvent.js.map