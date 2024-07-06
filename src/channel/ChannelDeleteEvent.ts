import { DMChannel, GuildChannel } from "discord.js";
import { Events } from "../Events";
import { ChannelEvent } from "./ChannelEvent";

export class ChannelDeleteEvent extends ChannelEvent {
    constructor(channel: GuildChannel | DMChannel) {
        super(Events.ChannelDelete, channel);
    }
}