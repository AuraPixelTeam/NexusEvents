import { Events } from "../Events";
import { ModerationEvent } from "./ModerationEvent";

export class AutoModerationActionExecutionEvent extends ModerationEvent {
    private autoModerationActionExecution: any;

    constructor(autoModerationActionExecution: any) {
        super(Events.AutoModerationActionExecution, null);
        this.autoModerationActionExecution = autoModerationActionExecution;
    }

    getAutoModerationActionExecution(): any {
        return this.autoModerationActionExecution;
    }
}