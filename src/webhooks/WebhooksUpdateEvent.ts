import { ForumChannel, NewsChannel, StageChannel, TextChannel, VoiceChannel } from "discord.js";
import { Event } from "../Event";
import { Events } from "../Events";

export class WebhooksUpdateEvent extends Event {
    channel: TextChannel | NewsChannel | VoiceChannel | StageChannel | ForumChannel;

    constructor(channel: TextChannel | NewsChannel | VoiceChannel | StageChannel | ForumChannel) {
        super(Events.WebhooksUpdate);
        this.channel = channel;
    }

    /**
     * 
     * @returns {TextChannel | NewsChannel | VoiceChannel | StageChannel | ForumChannel}
     */
    getChannel(): TextChannel | NewsChannel | VoiceChannel | StageChannel | ForumChannel {
        return this.channel;
    }
}