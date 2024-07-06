import { StageInstance } from "discord.js";
import { Event } from "../Event";
export declare class StageEvent extends Event {
    stageInstance: StageInstance;
    constructor(eventName: string, stageInstance: StageInstance);
    getStageInstance(): StageInstance;
}
//# sourceMappingURL=StageEvent.d.ts.map