import { Presence } from "discord.js";
import { Event } from "../Event";
export declare class PresenceUpdateEvent extends Event {
    oldPresence: Presence;
    newPresence: Presence;
    constructor(oldPresence: Presence, newPresence: Presence);
    getOldPresence(): Presence;
    getNewPresence(): Presence;
}
//# sourceMappingURL=PresenceUpdateEvent.d.ts.map