import { GuildEmoji } from "discord.js";
import { GuildEvent } from "./GuildEvent";
import { Events } from "../Events";

export class GuildEmojiUpdateEvent extends GuildEvent {
    oldEmoji: GuildEmoji;
    newEmoji: GuildEmoji;

    constructor(oldEmoji: GuildEmoji, newEmoji: GuildEmoji) {
        super(Events.GuildEmojiUpdate, newEmoji.guild);
        this.oldEmoji = oldEmoji;
        this.newEmoji = newEmoji;
    }

    getOldEmoji(): GuildEmoji {
        return this.oldEmoji;
    }

    getNewEmoji(): GuildEmoji {
        return this.newEmoji;
    }
}