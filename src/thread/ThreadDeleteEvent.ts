import { ThreadChannel } from "discord.js";
import { Events } from "../Events";
import { ThreadEvent } from "./ThreadEvent";

export class ThreadDeleteEvent extends ThreadEvent {
    constructor(thread: ThreadChannel) {
        super(Events.ThreadDelete, thread);
    }
}