import { Invite } from "discord.js";
import { Event } from "../Event";
export declare class InviteEvent extends Event {
    invite: Invite;
    constructor(eventName: string, invite: Invite);
    getInvite(): Invite;
}
//# sourceMappingURL=InviteEvent.d.ts.map