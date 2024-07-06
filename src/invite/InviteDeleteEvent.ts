import { Invite } from "discord.js";
import { InviteEvent } from "./InviteEvent";
import { Events } from "../Events";

export class InviteDeleteEvent extends InviteEvent {

    constructor(invite: Invite) {
        super(Events.InviteDelete, invite);
    }
}