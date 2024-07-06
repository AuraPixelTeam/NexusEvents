"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildStickerCreateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildStickerCreateEvent extends GuildEvent_1.GuildEvent {
    constructor(sticker) {
        super(Events_1.Events.GuildStickerCreate, sticker.guild);
        this.sticker = sticker;
    }
    getSticker() {
        return this.sticker;
    }
}
exports.GuildStickerCreateEvent = GuildStickerCreateEvent;
//# sourceMappingURL=GuildStickerCreateEvent.js.map