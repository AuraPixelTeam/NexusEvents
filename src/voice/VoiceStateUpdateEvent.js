"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceStateUpdateEvent = void 0;
const Event_1 = require("../Event");
const Events_1 = require("../Events");
class VoiceStateUpdateEvent extends Event_1.Event {
    constructor(oldState, newState) {
        super(Events_1.Events.VoiceStateUpdate);
        this.oldState = oldState;
        this.newState = newState;
    }
    getOldState() {
        return this.oldState;
    }
    getNewState() {
        return this.newState;
    }
}
exports.VoiceStateUpdateEvent = VoiceStateUpdateEvent;
//# sourceMappingURL=VoiceStateUpdateEvent.js.map