import { ThreadEvent } from "./ThreadEvent";
export declare class ThreadMemberUpdateEvent extends ThreadEvent {
    oldMember: any;
    newMember: any;
    constructor(oldMember: any, newMember: any);
    getOldMember(): any;
    getNewMembers(): any;
}
//# sourceMappingURL=ThreadMemberUpdateEvent.d.ts.map