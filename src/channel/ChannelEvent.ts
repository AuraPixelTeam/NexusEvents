import { DMChannel, GuildChannel } from "discord.js";
import { Event } from "../Event";

export class ChannelEvent extends Event {
    channel: GuildChannel | DMChannel;

    constructor(eventName: string, channel: GuildChannel | DMChannel) {
        super(eventName);
        this.channel = channel;
    }

    getChannel(): GuildChannel | DMChannel {
        return this.channel;
    }
}