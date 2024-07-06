import { Guild, GuildAuditLogsEntry } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildAuditLogEntryCreateEvent extends GuildEvent {

    auditLogEntry: GuildAuditLogsEntry;
    guild: Guild;

    /**
     * 
     * @param {GuildAuditLogsEntry} auditLogEntry 
     * @param {Guild} guild 
     */
    constructor(auditLogEntry: GuildAuditLogsEntry, guild: Guild) {
        super(Events.GuildCreate, guild);
        this.auditLogEntry = auditLogEntry;
    }

    /**
     * @returns {GuildAuditLogsEntry}
     */
    getAuditLogEntry(): GuildAuditLogsEntry {
        return this.auditLogEntry;
    }
}