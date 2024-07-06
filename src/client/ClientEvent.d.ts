import { Client } from "discord.js";
import { Event } from "../Event";
export declare class ClientEvent extends Event {
    client: Client;
    /**
     * @param {Client} client
     */
    constructor(eventName: string, client: Client);
    /**
     * @returns {Client}
     */
    getClient(): Client;
}
//# sourceMappingURL=ClientEvent.d.ts.map