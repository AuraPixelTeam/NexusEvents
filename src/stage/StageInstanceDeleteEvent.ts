import { StageInstance } from "discord.js";
import { Events } from "../Events";
import { StageEvent } from "./StageEvent";

export class StageInstanceDeleteEvent extends StageEvent {
    constructor(stageInstance: StageInstance) {
        super(Events.StageInstanceDelete, stageInstance);
    }
}