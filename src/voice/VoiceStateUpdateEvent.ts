import { VoiceState } from "discord.js";
import { Event } from "../Event";
import { Events } from "../Events";

export class VoiceStateUpdateEvent extends Event {
    oldState: VoiceState;
    newState: VoiceState;

    constructor(oldState: VoiceState, newState: VoiceState) {
        super(Events.VoiceStateUpdate);
        this.oldState = oldState;
        this.newState = newState;
    }

    getOldState(): VoiceState {
        return this.oldState;
    }

    getNewState(): VoiceState {
        return this.newState;
    }
}