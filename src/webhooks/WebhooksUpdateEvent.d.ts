import { ForumChannel, NewsChannel, StageChannel, TextChannel, VoiceChannel } from "discord.js";
import { Event } from "../Event";
export declare class WebhooksUpdateEvent extends Event {
    channel: TextChannel | NewsChannel | VoiceChannel | StageChannel | ForumChannel;
    constructor(channel: TextChannel | NewsChannel | VoiceChannel | StageChannel | ForumChannel);
    /**
     *
     * @returns {TextChannel | NewsChannel | VoiceChannel | StageChannel | ForumChannel}
     */
    getChannel(): TextChannel | NewsChannel | VoiceChannel | StageChannel | ForumChannel;
}
//# sourceMappingURL=WebhooksUpdateEvent.d.ts.map