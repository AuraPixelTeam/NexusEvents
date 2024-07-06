"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildBanRemoveEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildBanRemoveEvent extends GuildEvent_1.GuildEvent {
    /**
     * @param {GuildBan} guildBan
     */
    constructor(guildBan) {
        super(Events_1.Events.GuildBanRemove, guildBan.guild);
        this.guildBan = guildBan;
    }
    /**
     * @returns {GuildBan}
     */
    getGuildBan() {
        return this.guildBan;
    }
}
exports.GuildBanRemoveEvent = GuildBanRemoveEvent;
//# sourceMappingURL=GuildBanRemoveEvent.js.map