import { AutoModerationRule } from "discord.js";
import { Event } from "../Event.js";

export class ModerationEvent extends Event {
    autoModerationRule: AutoModerationRule | null;

    constructor(eventName: string, autoModerationRule: AutoModerationRule | null) {
        super(eventName);
        this.autoModerationRule = autoModerationRule;
    }

    getAutoModerationRule(): AutoModerationRule | null {
        return this.autoModerationRule;
    }
}