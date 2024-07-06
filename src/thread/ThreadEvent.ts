import { ThreadChannel } from "discord.js";
import { Event } from "../Event";

export class ThreadEvent extends Event {
    thread: ThreadChannel | undefined;

    constructor(eventName: string, thread: ThreadChannel | undefined) {
        super(eventName);
        this.thread = thread;
    }

    getThread(): ThreadChannel | undefined {
        return this.thread;
    }
}