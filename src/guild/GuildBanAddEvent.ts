import { GuildBan } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildBanAddEvent extends GuildEvent {

    guildBan: GuildBan;
    
    constructor(guildBan: GuildBan) {
        super(Events.GuildBanAdd, guildBan.guild);
        this.guildBan = guildBan;
    }
    
    getGuildBan(): GuildBan {
        return this.guildBan;
    }
}