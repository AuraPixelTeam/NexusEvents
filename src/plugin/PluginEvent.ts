import { Event } from "../Event";

export class PluginEvent extends Event {
    plugin: any;

    constructor(eventName: string, plugin: any) {
        super(eventName);
        this.plugin = plugin;
    }
    
    getPlugin(): any {
        return this.plugin;
    }
}