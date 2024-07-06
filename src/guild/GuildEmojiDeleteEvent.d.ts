import { GuildEmoji } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildEmojiDeleteEvent extends GuildEvent {
    emoji: GuildEmoji;
    constructor(emoji: GuildEmoji);
    getEmoji(): GuildEmoji;
}
//# sourceMappingURL=GuildEmojiDeleteEvent.d.ts.map