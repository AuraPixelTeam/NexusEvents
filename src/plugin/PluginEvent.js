"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginEvent = void 0;
const Event_1 = require("../Event");
class PluginEvent extends Event_1.Event {
    constructor(eventName, plugin) {
        super(eventName);
        this.plugin = plugin;
    }
    getPlugin() {
        return this.plugin;
    }
}
exports.PluginEvent = PluginEvent;
//# sourceMappingURL=PluginEvent.js.map