import { Events } from "../Events.js";
import { ModerationEvent } from "./ModerationEvent";
import { AutoModerationRule } from "discord.js";

export class AutoModerationRuleUpdateEvent extends ModerationEvent {
    oldAutoModerationRule: AutoModerationRule;

    constructor(oldAutoModerationRule: AutoModerationRule, newAutoModerationRule: AutoModerationRule) {
        super(Events.AutoModerationRuleUpdate, newAutoModerationRule);
        this.oldAutoModerationRule = oldAutoModerationRule;
    }

    getOldAutoModerationRule(): AutoModerationRule {
        return this.oldAutoModerationRule;
    }
}