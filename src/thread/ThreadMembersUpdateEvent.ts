import { Collection, Guild, ThreadChannel } from "discord.js";
import { Events } from "../Events";
import { ThreadEvent } from "./ThreadEvent";

export class ThreadMembersUpdateEvent extends ThreadEvent {
    addedMembers: any;
    removedMembers: any;

    constructor(addedMembers: any, removedMembers: any, thread: ThreadChannel) {
        super(Events.ThreadMembersUpdate, thread);
        this.addedMembers = addedMembers;
        this.removedMembers = removedMembers;
    }

    getAddedMembers(): any {
        return this.addedMembers;
    }

    getRemovedMembers(): any {
        return this.removedMembers;
    }
}