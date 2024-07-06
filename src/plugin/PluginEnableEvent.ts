import { Events } from "../Events";
import { PluginEvent } from "./PluginEvent";

export class PluginEnableEvent extends PluginEvent {
    constructor(plugin: any) {
        super(Events.PluginEnable, plugin);
    }
}