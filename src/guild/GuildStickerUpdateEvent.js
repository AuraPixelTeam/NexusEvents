"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildStickerUpdateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildStickerUpdateEvent extends GuildEvent_1.GuildEvent {
    constructor(oldSticker, newSticker) {
        super(Events_1.Events.GuildStickerUpdate, newSticker.guild);
        this.oldSticker = oldSticker;
        this.newSticker = newSticker;
    }
    getOldSticker() {
        return this.oldSticker;
    }
    getNewSticker() {
        return this.newSticker;
    }
}
exports.GuildStickerUpdateEvent = GuildStickerUpdateEvent;
//# sourceMappingURL=GuildStickerUpdateEvent.js.map