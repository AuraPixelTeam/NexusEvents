import { Guild } from "discord.js";
import { Events } from "../Events.js";
import { GuildEvent } from "./GuildEvent";

export class GuildCreateEvent extends GuildEvent {
    constructor(guild: Guild) {
        super(Events.GuildCreate, guild);
    }
}