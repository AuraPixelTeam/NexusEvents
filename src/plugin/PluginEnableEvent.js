"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginEnableEvent = void 0;
const Events_1 = require("../Events");
const PluginEvent_1 = require("./PluginEvent");
class PluginEnableEvent extends PluginEvent_1.PluginEvent {
    constructor(plugin) {
        super(Events_1.Events.PluginEnable, plugin);
    }
}
exports.PluginEnableEvent = PluginEnableEvent;
//# sourceMappingURL=PluginEnableEvent.js.map