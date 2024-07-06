import { GuildChannel } from "discord.js";
import { Events } from "../Events";
import { ChannelEvent } from "./ChannelEvent";

export class ChannelPinsUpdateEvent extends ChannelEvent {
    time: Date;

    constructor(channel: GuildChannel, time: Date) {
        super(Events.ChannelPinsUpdate, channel);
        this.time = time;
    }

    getTime(): Date {
        return this.time;
    }
}