import { AutoModerationRule } from "discord.js";
import { Event } from "../Event.js";
export declare class ModerationEvent extends Event {
    autoModerationRule: AutoModerationRule | null;
    constructor(eventName: string, autoModerationRule: AutoModerationRule | null);
    getAutoModerationRule(): AutoModerationRule | null;
}
//# sourceMappingURL=ModerationEvent.d.ts.map