"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCommandPermissionsUpdateEvent = void 0;
const Events_1 = require("../Events");
const ModerationEvent_1 = require("./ModerationEvent");
class ApplicationCommandPermissionsUpdateEvent extends ModerationEvent_1.ModerationEvent {
    constructor(data) {
        super(Events_1.Events.ApplicationCommandPermissionsUpdate, null);
        this.data = data;
    }
    getData() {
        return this.data;
    }
}
exports.ApplicationCommandPermissionsUpdateEvent = ApplicationCommandPermissionsUpdateEvent;
//# sourceMappingURL=ApplicationCommandPermissionsUpdateEvent.js.map