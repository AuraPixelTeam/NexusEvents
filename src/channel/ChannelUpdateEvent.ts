import { DMChannel, GuildChannel } from "discord.js";
import { Events } from "../Events";
import { ChannelEvent } from "./ChannelEvent";

export class ChannelUpdateEvent extends ChannelEvent {
    oldChannel: GuildChannel | DMChannel;

    constructor(oldChannel: GuildChannel | DMChannel, newChannel: GuildChannel | DMChannel) {
        super(Events.ChannelUpdate, newChannel);
        this.oldChannel = oldChannel;
    }

    getOldChannel(): GuildChannel | DMChannel {
        return this.oldChannel;
    }
}