import { Event } from "../Event";
export declare class ShardDisconnectEvent extends Event {
    closeEvent: any;
    id: number;
    constructor(closeEvent: any, id: number);
    getCloseEvent(): any;
    getId(): number;
}
//# sourceMappingURL=ShardDisconnectEvent.d.ts.map