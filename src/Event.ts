export class Event {
    eventName: string;

    constructor(eventName: string) {
        this.eventName = eventName;
    }
    
    getEventName(): string {
        return this.eventName;
    }
}