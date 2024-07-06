import { GuildEmoji } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildEmojiDeleteEvent extends GuildEvent {
    emoji: GuildEmoji;

    constructor(emoji: GuildEmoji) {
        super(Events.GuildEmojiDelete, emoji.guild);
        this.emoji = emoji;
    }

    getEmoji(): GuildEmoji {
        return this.emoji;
    }
}