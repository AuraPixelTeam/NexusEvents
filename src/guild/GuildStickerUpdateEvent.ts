import { Sticker } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildStickerUpdateEvent extends GuildEvent {
    oldSticker: Sticker;
    newSticker: Sticker;

    constructor(oldSticker: Sticker, newSticker: Sticker) {
        super(Events.GuildStickerUpdate, newSticker.guild);
        this.oldSticker = oldSticker;
        this.newSticker = newSticker;
    }

    getOldSticker(): Sticker {
        return this.oldSticker;
    }

    getNewSticker(): Sticker {
        return this.newSticker;
    }
}