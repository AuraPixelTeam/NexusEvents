import { ThreadChannel } from "discord.js";
import { ThreadEvent } from "./ThreadEvent";
export declare class ThreadMembersUpdateEvent extends ThreadEvent {
    addedMembers: any;
    removedMembers: any;
    constructor(addedMembers: any, removedMembers: any, thread: ThreadChannel);
    getAddedMembers(): any;
    getRemovedMembers(): any;
}
//# sourceMappingURL=ThreadMembersUpdateEvent.d.ts.map