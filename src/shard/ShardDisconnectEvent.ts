import { Event } from "../Event";
import { Events } from "../Events";

export class ShardDisconnectEvent extends Event {
    closeEvent: any;
    id: number;

    constructor(closeEvent: any, id: number) {
        super(Events.ShardDisconnect);
        this.closeEvent = closeEvent;
        this.id = id;
    }

    getCloseEvent(): any {
        return this.closeEvent;
    }

    getId(): number {
        return this.id;
    }
}