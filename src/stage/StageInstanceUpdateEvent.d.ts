import { StageInstance } from "discord.js";
import { StageEvent } from "./StageEvent";
export declare class StageInstanceUpdateEvent extends StageEvent {
    oldStageInstance: StageInstance;
    constructor(oldStageInstance: StageInstance, newStageInstance: StageInstance);
    getOldStageInstance(): StageInstance;
}
//# sourceMappingURL=StageInstanceUpdateEvent.d.ts.map