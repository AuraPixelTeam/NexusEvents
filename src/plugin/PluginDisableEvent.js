"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginDisableEvent = void 0;
const Events_1 = require("../Events");
const PluginEvent_1 = require("./PluginEvent");
class PluginDisableEvent extends PluginEvent_1.PluginEvent {
    constructor(plugin) {
        super(Events_1.Events.PluginDisable, plugin);
    }
}
exports.PluginDisableEvent = PluginDisableEvent;
//# sourceMappingURL=PluginDisableEvent.js.map