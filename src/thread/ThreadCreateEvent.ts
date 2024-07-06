import { ThreadChannel } from "discord.js";
import { Events } from "../Events";
import { ThreadEvent } from "./ThreadEvent";

export class ThreadCreateEvent extends ThreadEvent {
    newlyCreated: boolean;

    constructor(thread: ThreadChannel, newlyCreated: boolean) {
        super(Events.ThreadCreate, thread);
        this.newlyCreated = newlyCreated;
    }

    getNewlyCreated(): boolean {
        return this.newlyCreated;
    }
}