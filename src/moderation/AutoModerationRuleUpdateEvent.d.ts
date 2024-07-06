import { ModerationEvent } from "./ModerationEvent";
import { AutoModerationRule } from "discord.js";
export declare class AutoModerationRuleUpdateEvent extends ModerationEvent {
    oldAutoModerationRule: AutoModerationRule;
    constructor(oldAutoModerationRule: AutoModerationRule, newAutoModerationRule: AutoModerationRule);
    getOldAutoModerationRule(): AutoModerationRule;
}
//# sourceMappingURL=AutoModerationRuleUpdateEvent.d.ts.map