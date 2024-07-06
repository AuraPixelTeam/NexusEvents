import { Sticker } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildStickerDeleteEvent extends GuildEvent {
    sticker: Sticker;
    constructor(sticker: Sticker);
    getSticker(): Sticker;
}
//# sourceMappingURL=GuildStickerDeleteEvent.d.ts.map