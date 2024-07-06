import { Event } from "../Event";
export declare class ShardReadyEvent extends Event {
    id: number;
    unavailableGuilds: Set<any>;
    constructor(id: number, unavailableGuilds: Set<any>);
    getId(): number;
    getUnavailableGuilds(): Set<any>;
}
//# sourceMappingURL=ShardReadyEvent.d.ts.map