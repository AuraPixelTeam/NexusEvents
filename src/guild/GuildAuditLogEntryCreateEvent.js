"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildAuditLogEntryCreateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildAuditLogEntryCreateEvent extends GuildEvent_1.GuildEvent {
    /**
     *
     * @param {GuildAuditLogsEntry} auditLogEntry
     * @param {Guild} guild
     */
    constructor(auditLogEntry, guild) {
        super(Events_1.Events.GuildCreate, guild);
        this.auditLogEntry = auditLogEntry;
    }
    /**
     * @returns {GuildAuditLogsEntry}
     */
    getAuditLogEntry() {
        return this.auditLogEntry;
    }
}
exports.GuildAuditLogEntryCreateEvent = GuildAuditLogEntryCreateEvent;
//# sourceMappingURL=GuildAuditLogEntryCreateEvent.js.map