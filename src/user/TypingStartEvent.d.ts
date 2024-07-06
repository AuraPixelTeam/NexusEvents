import { Typing } from "discord.js";
import { Event } from "../Event";
export declare class TypingStartEvent extends Event {
    typing: Typing;
    constructor(typing: Typing);
    getTyping(): Typing;
}
//# sourceMappingURL=TypingStartEvent.d.ts.map