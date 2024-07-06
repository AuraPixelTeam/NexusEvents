import { Events } from "../Events";
import { PluginEvent } from "./PluginEvent";

export class PluginDisableEvent extends PluginEvent {
    constructor(plugin: any) {
        super(Events.PluginDisable, plugin);
    }
}