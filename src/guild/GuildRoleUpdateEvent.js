"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildRoleUpdateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildRoleUpdateEvent extends GuildEvent_1.GuildEvent {
    constructor(oldRole, newRole) {
        super(Events_1.Events.GuildRoleUpdate, newRole.guild);
        this.oldRole = oldRole;
        this.newRole = newRole;
    }
    getOldRole() {
        return this.oldRole;
    }
    getNewRole() {
        return this.newRole;
    }
}
exports.GuildRoleUpdateEvent = GuildRoleUpdateEvent;
//# sourceMappingURL=GuildRoleUpdateEvent.js.map