import { Guild } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildAvailableEvent extends GuildEvent {
    constructor(guild: Guild) {
        super(Events.GuildAvailable, guild);
    }
}