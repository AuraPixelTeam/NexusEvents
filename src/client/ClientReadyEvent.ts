import { Client } from "discord.js";
import { Events } from "../Events";
import { ClientEvent } from "./ClientEvent";

export class ClientReadyEvent extends ClientEvent {
    constructor(client: Client) {
        super(Events.ClientReady, client);
    }
}