import { Invite } from "discord.js";
import { Event } from "../Event";

export class InviteEvent extends Event {
    invite: Invite;

    constructor(eventName: string, invite: Invite) {
        super(eventName);
        this.invite = invite;
    }

    getInvite(): Invite {
        return this.invite;
    }
}