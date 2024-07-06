import { Client } from "discord.js";
import { Event } from "../Event";

export class ClientEvent extends Event {

    client: Client;

    /**
     * @param {Client} client 
     */
    constructor(eventName: string, client: Client) {
        super(eventName);
        this.client = client;
    }

    /**
     * @returns {Client}
     */
    getClient(): Client {
        return this.client;
    }
}