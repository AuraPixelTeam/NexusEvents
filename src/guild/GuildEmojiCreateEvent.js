"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildEmojiCreateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildEmojiCreateEvent extends GuildEvent_1.GuildEvent {
    constructor(emoji) {
        super(Events_1.Events.GuildEmojiCreate, emoji.guild);
        this.emoji = emoji;
    }
    getEmoji() {
        return this.emoji;
    }
}
exports.GuildEmojiCreateEvent = GuildEmojiCreateEvent;
//# sourceMappingURL=GuildEmojiCreateEvent.js.map