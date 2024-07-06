import { Event } from "../Event";
import { Events } from "../Events";

export class ShardReconnectingEvent extends Event {
    id: number;

    constructor(id: number, unavailableGuilds: any[]) {
        super(Events.ShardReconnecting);
        this.id = id;
    }

    getId(): number {
        return this.id;
    }
}