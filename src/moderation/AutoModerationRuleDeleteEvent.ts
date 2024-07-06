import { AutoModerationRule } from "discord.js";
import { Events } from "../Events";
import { ModerationEvent } from "./ModerationEvent";

export class AutoModerationRuleDeleteEvent extends ModerationEvent {
    constructor(autoModerationRule: AutoModerationRule) {
        super(Events.AutoModerationRuleDelete, autoModerationRule);
    }
}