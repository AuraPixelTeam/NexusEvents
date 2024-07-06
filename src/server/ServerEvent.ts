import { Event } from "../Event";


export class ServerEvent extends Event {
    constructor(eventName: string) {
        super(eventName);
    }
}