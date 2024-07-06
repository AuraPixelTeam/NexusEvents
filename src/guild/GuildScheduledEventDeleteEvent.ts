import { GuildScheduledEvent } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildScheduledEventDeleteEvent extends GuildEvent {

    guildScheduledEvent: GuildScheduledEvent;
    
    constructor(guildScheduledEvent: GuildScheduledEvent) {
        super(Events.GuildScheduledEventDelete, guildScheduledEvent.guild);
        this.guildScheduledEvent = guildScheduledEvent;
    }

    getGuildScheduledEvent(): GuildScheduledEvent {
        return this.guildScheduledEvent;
    }
}