import { DMChannel, GuildChannel } from "discord.js";
import { ChannelEvent } from "./ChannelEvent";
export declare class ChannelUpdateEvent extends ChannelEvent {
    oldChannel: GuildChannel | DMChannel;
    constructor(oldChannel: GuildChannel | DMChannel, newChannel: GuildChannel | DMChannel);
    getOldChannel(): GuildChannel | DMChannel;
}
//# sourceMappingURL=ChannelUpdateEvent.d.ts.map