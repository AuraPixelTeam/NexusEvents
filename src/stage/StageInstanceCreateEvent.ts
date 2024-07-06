import { Events } from "../Events";
import { StageEvent } from "./StageEvent";

export class StageInstanceCreateEvent extends StageEvent {
    constructor(stageInstance: any) {
        super(Events.StageInstanceCreate, stageInstance);
    }
}