import { Guild } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildIntegrationsUpdateEvent extends GuildEvent {
    constructor(guild: Guild) {
        super(Events.GuildIntegrationsUpdate, guild);
    }
}