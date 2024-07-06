"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildStickerDeleteEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildStickerDeleteEvent extends GuildEvent_1.GuildEvent {
    constructor(sticker) {
        super(Events_1.Events.GuildStickerDelete, sticker.guild);
        this.sticker = sticker;
    }
    getSticker() {
        return this.sticker;
    }
}
exports.GuildStickerDeleteEvent = GuildStickerDeleteEvent;
//# sourceMappingURL=GuildStickerDeleteEvent.js.map