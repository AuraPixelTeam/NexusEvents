import { StageInstance } from "discord.js";
import { Event } from "../Event";

export class StageEvent extends Event {
    stageInstance: StageInstance;

    constructor(eventName: string, stageInstance: StageInstance) {
        super(eventName);
        this.stageInstance = stageInstance;
    }

    getStageInstance(): StageInstance {
        return this.stageInstance;
    }
}