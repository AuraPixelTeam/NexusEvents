import { Events } from "../Events";
import { ModerationEvent } from "./ModerationEvent";
import { AutoModerationRule } from "discord.js";

export class AutoModerationRuleCreateEvent extends ModerationEvent {
    constructor(autoModerationRule: AutoModerationRule) {
        super(Events.AutoModerationRuleCreate, autoModerationRule);
    }
}