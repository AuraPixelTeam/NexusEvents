import { GuildEmoji } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildEmojiCreateEvent extends GuildEvent {
    emoji: GuildEmoji;
    constructor(emoji: GuildEmoji);
    getEmoji(): GuildEmoji;
}
//# sourceMappingURL=GuildEmojiCreateEvent.d.ts.map