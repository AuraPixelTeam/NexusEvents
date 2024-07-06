"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildEvent = void 0;
const Event_js_1 = require("../Event.js");
class GuildEvent extends Event_js_1.Event {
    /**
     * @param {string} eventName
     * @param {Guild} guild
     */
    constructor(eventName, guild) {
        super(eventName);
        this.guild = guild;
    }
    /**
     * @returns {Guild}
     */
    getGuild() {
        return this.guild;
    }
}
exports.GuildEvent = GuildEvent;
//# sourceMappingURL=GuildEvent.js.map