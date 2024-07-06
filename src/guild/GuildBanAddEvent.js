"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildBanAddEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildBanAddEvent extends GuildEvent_1.GuildEvent {
    constructor(guildBan) {
        super(Events_1.Events.GuildBanAdd, guildBan.guild);
        this.guildBan = guildBan;
    }
    getGuildBan() {
        return this.guildBan;
    }
}
exports.GuildBanAddEvent = GuildBanAddEvent;
//# sourceMappingURL=GuildBanAddEvent.js.map