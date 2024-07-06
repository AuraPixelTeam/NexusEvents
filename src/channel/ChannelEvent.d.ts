import { DMChannel, GuildChannel } from "discord.js";
import { Event } from "../Event";
export declare class ChannelEvent extends Event {
    channel: GuildChannel | DMChannel;
    constructor(eventName: string, channel: GuildChannel | DMChannel);
    getChannel(): GuildChannel | DMChannel;
}
//# sourceMappingURL=ChannelEvent.d.ts.map