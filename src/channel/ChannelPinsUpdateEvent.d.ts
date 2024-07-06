import { GuildChannel } from "discord.js";
import { ChannelEvent } from "./ChannelEvent";
export declare class ChannelPinsUpdateEvent extends ChannelEvent {
    time: Date;
    constructor(channel: GuildChannel, time: Date);
    getTime(): Date;
}
//# sourceMappingURL=ChannelPinsUpdateEvent.d.ts.map