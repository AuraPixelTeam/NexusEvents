import { Guild } from "discord.js";
import { Events } from "../Events.js";
import { GuildEvent } from "./GuildEvent";

export class GuildUnavailableEvent extends GuildEvent {
    constructor(guild: Guild) {
        super(Events.GuildUnavailable, guild);
    }
}