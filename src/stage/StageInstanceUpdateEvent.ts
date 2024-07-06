import { StageInstance } from "discord.js";
import { Events } from "../Events";
import { StageEvent } from "./StageEvent";

export class StageInstanceUpdateEvent extends StageEvent {
    oldStageInstance: StageInstance;

    constructor(oldStageInstance: StageInstance, newStageInstance: StageInstance) {
        super(Events.StageInstanceUpdate, newStageInstance);
        this.oldStageInstance = oldStageInstance;
    }

    getOldStageInstance(): StageInstance {
        return this.oldStageInstance;
    }
}