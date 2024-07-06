import { GuildScheduledEvent } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildScheduledEventCreateEvent extends GuildEvent {

    guildScheduledEvent: GuildScheduledEvent;
    
    constructor(guildScheduledEvent: GuildScheduledEvent) {
        super(Events.GuildScheduledEventCreate, guildScheduledEvent.guild);
        this.guildScheduledEvent = guildScheduledEvent;
    }

    getGuildScheduledEvent(): GuildScheduledEvent {
        return this.guildScheduledEvent;
    }
}