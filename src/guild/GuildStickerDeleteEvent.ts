import { Sticker } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildStickerDeleteEvent extends GuildEvent {
    sticker: Sticker;

    constructor(sticker: Sticker) {
        super(Events.GuildStickerDelete, sticker.guild);
        this.sticker = sticker;
    }

    getSticker(): Sticker {
        return this.sticker;
    }
}