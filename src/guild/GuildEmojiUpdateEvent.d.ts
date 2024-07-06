import { GuildEmoji } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildEmojiUpdateEvent extends GuildEvent {
    oldEmoji: GuildEmoji;
    newEmoji: GuildEmoji;
    constructor(oldEmoji: GuildEmoji, newEmoji: GuildEmoji);
    getOldEmoji(): GuildEmoji;
    getNewEmoji(): GuildEmoji;
}
//# sourceMappingURL=GuildEmojiUpdateEvent.d.ts.map