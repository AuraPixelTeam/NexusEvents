import { ThreadChannel } from "discord.js";
import { Event } from "../Event";

export class ThreadEvent extends Event {
    thread?: ThreadChannel;

    constructor(eventName: string, thread?: ThreadChannel) {
        super(eventName);
        this.thread = thread;
    }

    getThread(): ThreadChannel | undefined {
        return this.thread;
    }
}