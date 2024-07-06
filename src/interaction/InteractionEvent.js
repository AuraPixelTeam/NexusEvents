"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionEvent = void 0;
const Event_1 = require("../Event");
class InteractionEvent extends Event_1.Event {
    /**
     * @param {string} eventName
     * @param {BaseInteraction} interaction
     */
    constructor(eventName, interaction) {
        super(eventName);
        this.interaction = interaction;
    }
    /**
     * @returns {BaseInteraction}
     */
    getInteraction() {
        return this.interaction;
    }
}
exports.InteractionEvent = InteractionEvent;
//# sourceMappingURL=InteractionEvent.js.map