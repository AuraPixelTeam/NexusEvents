import { Typing } from "discord.js";
import { Event } from "../Event";
import { Events } from "../Events";

export class TypingStartEvent extends Event {
    typing: Typing;

    constructor(typing: Typing) {
        super(Events.TypingStart);
        this.typing = typing;
    }

    getTyping(): Typing {
        return this.typing;
    }
}