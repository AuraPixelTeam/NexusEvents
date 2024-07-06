import { Sticker } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildStickerUpdateEvent extends GuildEvent {
    oldSticker: Sticker;
    newSticker: Sticker;
    constructor(oldSticker: Sticker, newSticker: Sticker);
    getOldSticker(): Sticker;
    getNewSticker(): Sticker;
}
//# sourceMappingURL=GuildStickerUpdateEvent.d.ts.map