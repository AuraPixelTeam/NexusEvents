"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildEmojiUpdateEvent = void 0;
const GuildEvent_1 = require("./GuildEvent");
const Events_1 = require("../Events");
class GuildEmojiUpdateEvent extends GuildEvent_1.GuildEvent {
    constructor(oldEmoji, newEmoji) {
        super(Events_1.Events.GuildEmojiUpdate, newEmoji.guild);
        this.oldEmoji = oldEmoji;
        this.newEmoji = newEmoji;
    }
    getOldEmoji() {
        return this.oldEmoji;
    }
    getNewEmoji() {
        return this.newEmoji;
    }
}
exports.GuildEmojiUpdateEvent = GuildEmojiUpdateEvent;
//# sourceMappingURL=GuildEmojiUpdateEvent.js.map