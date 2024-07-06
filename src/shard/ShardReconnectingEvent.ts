import { Event } from "../Event";
import { Events } from "../Events";

export class ShardReconnectingEvent extends Event {
    id: number;
    unavailableGuilds: any[];

    constructor(id: number, unavailableGuilds: any[]) {
        super(Events.ShardReconnecting);
        this.id = id;
        this.unavailableGuilds = unavailableGuilds;
    }

    getId(): number {
        return this.id;
    }

    getUnavailableGuilds(): any[] {
        return this.unavailableGuilds;
    }
}