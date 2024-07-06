import { GuildScheduledEvent, User } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildScheduledEventUserRemoveEvent extends GuildEvent {
    guildScheduledEvent: GuildScheduledEvent;
    user: User;

    constructor(guildScheduledEvent: GuildScheduledEvent, user: User) {
        super(Events.GuildScheduledEventUserRemove, guildScheduledEvent.guild);
        this.guildScheduledEvent = guildScheduledEvent;
        this.user = user;
    }

    getGuildScheduledEvent(): GuildScheduledEvent {
        return this.guildScheduledEvent;
    }

    getUser(): User {
        return this.user;
    }
}