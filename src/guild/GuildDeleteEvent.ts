import { Guild } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildDeleteEvent extends GuildEvent {
    constructor(guild: Guild) {
        super(Events.GuildDelete, guild);
    }
}