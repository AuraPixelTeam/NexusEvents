import { GuildBan } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildBanRemoveEvent extends GuildEvent {

    guildBan: GuildBan;
    /**
     * @param {GuildBan} guildBan 
     */
    constructor(guildBan: GuildBan) {
        super(Events.GuildBanRemove, guildBan.guild);
        this.guildBan = guildBan;
    }
    
    /**
     * @returns {GuildBan}
     */
    getGuildBan(): GuildBan {
        return this.guildBan;
    }
}