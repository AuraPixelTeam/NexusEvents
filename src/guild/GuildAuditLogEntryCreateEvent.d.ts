import { Guild, GuildAuditLogsEntry } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildAuditLogEntryCreateEvent extends GuildEvent {
    auditLogEntry: GuildAuditLogsEntry;
    guild: Guild;
    /**
     *
     * @param {GuildAuditLogsEntry} auditLogEntry
     * @param {Guild} guild
     */
    constructor(auditLogEntry: GuildAuditLogsEntry, guild: Guild);
    /**
     * @returns {GuildAuditLogsEntry}
     */
    getAuditLogEntry(): GuildAuditLogsEntry;
}
//# sourceMappingURL=GuildAuditLogEntryCreateEvent.d.ts.map