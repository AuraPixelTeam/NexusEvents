import { Presence } from "discord.js";
import { Event } from "../Event";
import { Events } from "../Events";

export class PresenceUpdateEvent extends Event {
    oldPresence: Presence;
    newPresence: Presence;

    constructor(oldPresence: Presence, newPresence: Presence) {
        super(Events.PresenceUpdate);
        this.oldPresence = oldPresence;
        this.newPresence = newPresence;
    }

    getOldPresence(): Presence {
        return this.oldPresence;
    }

    getNewPresence(): Presence {
        return this.newPresence;
    }
}