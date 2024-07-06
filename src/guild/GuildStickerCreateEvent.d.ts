import { Sticker } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildStickerCreateEvent extends GuildEvent {
    sticker: Sticker;
    constructor(sticker: Sticker);
    getSticker(): Sticker;
}
//# sourceMappingURL=GuildStickerCreateEvent.d.ts.map