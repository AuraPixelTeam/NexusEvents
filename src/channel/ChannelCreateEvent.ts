import { GuildChannel } from "discord.js";
import { Events } from "../Events";
import { ChannelEvent } from "./ChannelEvent";

export class ChannelCreateEvent extends ChannelEvent {
    constructor(channel: GuildChannel) {
        super(Events.ChannelCreate, channel);
    }
}