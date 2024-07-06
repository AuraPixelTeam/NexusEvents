import { Sticker } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildStickerCreateEvent extends GuildEvent {
    sticker: Sticker;

    constructor(sticker: Sticker) {
        super(Events.GuildStickerCreate, sticker.guild);
        this.sticker = sticker;
    }

    getSticker(): Sticker {
        return this.sticker;
    }
}