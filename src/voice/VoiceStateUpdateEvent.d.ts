import { VoiceState } from "discord.js";
import { Event } from "../Event";
export declare class VoiceStateUpdateEvent extends Event {
    oldState: VoiceState;
    newState: VoiceState;
    constructor(oldState: VoiceState, newState: VoiceState);
    getOldState(): VoiceState;
    getNewState(): VoiceState;
}
//# sourceMappingURL=VoiceStateUpdateEvent.d.ts.map