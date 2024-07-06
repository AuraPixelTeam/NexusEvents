import { Collection, Guild } from "discord.js";
import { Events } from "../Events";
import { ThreadEvent } from "./ThreadEvent";

export class ThreadListSyncEvent extends ThreadEvent {
    threads: any;
    guild: Guild;

    constructor(threads: any, guild: Guild) {
        super(Events.ThreadListSync, undefined);
        this.threads = threads;
        this.guild = guild;
    }

    getThreads(): any {
        return this.threads;
    }

    getGuild(): Guild {
        return this.guild;
    }
}