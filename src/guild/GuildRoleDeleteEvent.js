"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildRoleDeleteEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildRoleDeleteEvent extends GuildEvent_1.GuildEvent {
    /**
     * @param {Role} role
     */
    constructor(role) {
        super(Events_1.Events.GuildRoleDelete, role.guild);
        this.role = role;
    }
    /**
     * @returns {Role}
     */
    getRole() {
        return this.role;
    }
}
exports.GuildRoleDeleteEvent = GuildRoleDeleteEvent;
//# sourceMappingURL=GuildRoleDeleteEvent.js.map