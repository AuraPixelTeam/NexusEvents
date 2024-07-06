"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionCreateEvent = void 0;
const InteractionEvent_1 = require("./InteractionEvent");
const Events_1 = require("../Events");
class InteractionCreateEvent extends InteractionEvent_1.InteractionEvent {
    constructor(interaction) {
        super(Events_1.Events.InteractionCreate, interaction);
    }
}
exports.InteractionCreateEvent = InteractionCreateEvent;
//# sourceMappingURL=InteractionCreateEvent.js.map