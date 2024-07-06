"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildRoleCreateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildRoleCreateEvent extends GuildEvent_1.GuildEvent {
    constructor(role) {
        super(Events_1.Events.GuildRoleCreate, role.guild);
        this.role = role;
    }
    getRole() {
        return this.role;
    }
}
exports.GuildRoleCreateEvent = GuildRoleCreateEvent;
//# sourceMappingURL=GuildRoleCreateEvent.js.map