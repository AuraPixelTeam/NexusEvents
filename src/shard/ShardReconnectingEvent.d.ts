import { Event } from "../Event";
export declare class ShardReconnectingEvent extends Event {
    id: number;
    unavailableGuilds: any[];
    constructor(id: number, unavailableGuilds: any[]);
    getId(): number;
    getUnavailableGuilds(): any[];
}
//# sourceMappingURL=ShardReconnectingEvent.d.ts.map