"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildEmojiDeleteEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildEmojiDeleteEvent extends GuildEvent_1.GuildEvent {
    constructor(emoji) {
        super(Events_1.Events.GuildEmojiDelete, emoji.guild);
        this.emoji = emoji;
    }
    getEmoji() {
        return this.emoji;
    }
}
exports.GuildEmojiDeleteEvent = GuildEmojiDeleteEvent;
//# sourceMappingURL=GuildEmojiDeleteEvent.js.map