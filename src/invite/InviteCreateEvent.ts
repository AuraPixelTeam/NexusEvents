import { Invite } from "discord.js";
import { InviteEvent } from "./InviteEvent";
import { Events } from "../Events";

export class InviteCreateEvent extends InviteEvent {

    constructor(invite: Invite) {
        super(Events.InviteCreate, invite);
    }
}