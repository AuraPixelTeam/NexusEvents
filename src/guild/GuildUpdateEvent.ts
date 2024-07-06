import { Guild } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildUpdateEvent extends GuildEvent {
    oldGuild: Guild;

    constructor(oldGuild: Guild, newGuild: Guild) {
        super(Events.GuildUpdate, newGuild);
        this.oldGuild = oldGuild;
    }

    getOldGuild(): Guild {
        return this.oldGuild;
    }
}