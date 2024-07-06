import { Collection, Guild, ThreadChannel, ThreadMember } from "discord.js";
import { Events } from "../Events";
import { ThreadEvent } from "./ThreadEvent";

export class ThreadMemberUpdateEvent extends ThreadEvent {
    oldMember: any;
    newMember: any;

    constructor(oldMember: any, newMember: any) {
        super(Events.ThreadMemberUpdate, newMember.thread);
    }

    getOldMember(): any {
        return this.oldMember;
    }

    getNewMembers(): any {
        return this.newMember;
    }
}