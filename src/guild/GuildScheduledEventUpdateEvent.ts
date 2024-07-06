import { GuildScheduledEvent } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildScheduledEventUpdateEvent extends GuildEvent {

    oldGuildScheduledEvent: GuildScheduledEvent;
    newGuildScheduledEvent: GuildScheduledEvent;
    
    constructor(oldGuildScheduledEvent: GuildScheduledEvent, newGuildScheduledEvent: GuildScheduledEvent) {
        super(Events.GuildScheduledEventUpdate, newGuildScheduledEvent.guild);
        this.oldGuildScheduledEvent = oldGuildScheduledEvent;
        this.newGuildScheduledEvent = newGuildScheduledEvent;
    }

    getOldGuildScheduledEvent(): GuildScheduledEvent {
        return this.oldGuildScheduledEvent;
    }

    getNewGuildScheduledEvent(): GuildScheduledEvent {
        return this.newGuildScheduledEvent;
    }
}